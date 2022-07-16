import { ReactNode } from 'react';
import {
	FormProvider,
	useForm,
	SubmitHandler,
	Path,
	ValidationMode,
	DeepPartial,
	SubmitErrorHandler,
	FieldErrors,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import clsx from 'clsx';

export interface FormProps<T> {
	className?: string;
	children?: ReactNode;
	schema?: z.ZodType<T, z.ZodTypeDef>;
	onSubmit: (values: T) => Promise<void | OnSubmitResult>;
	initialValues?: DeepPartial<T>;
	validationMode?: keyof ValidationMode;
	onError: (param: { prop: string; message: string }) => void;
}

interface OnSubmitResult {
	FORM_ERROR?: string;
	[prop: string]: string | undefined;
}

export const FORM_ERROR = 'FORM_ERROR';

export function Form<T>({
	className = '',
	children,
	schema,
	initialValues,
	onSubmit,
	validationMode = 'onBlur',
	onError,
	...props
}: FormProps<T>) {
	const formContext = useForm<T>({
		mode: validationMode,
		defaultValues: initialValues,
		...(schema ? { resolver: zodResolver(schema) } : {}),
	});

	const submit: SubmitHandler<T> = async (values) => {
		const result = (await onSubmit(values)) || {};
		for (const [key, value] of Object.entries(result)) {
			if (key === FORM_ERROR) {
				onError({ prop: key, message: value as string });
			} else {
				formContext.setError(key as Path<T>, {
					type: 'submit',
					message: value,
				});
			}
		}
	};

	const invalidSubmit: SubmitErrorHandler<T> = async (errorFields) => {
		const key = Object.keys(errorFields)[0] as Path<T>;
		if (key && errorFields) {
			onError({
				prop: key,
				message: `(${errorFields[key]?.type}) ${key} - ${errorFields[key]?.message}`,
			});
		}
	};

	return (
		<FormProvider {...formContext}>
			<form
				onSubmit={formContext.handleSubmit(submit, invalidSubmit)}
				className={clsx('form', className)}
				{...props}>
				{children}
			</form>
		</FormProvider>
	);
}

export default Form;
