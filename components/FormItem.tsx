import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import TextInput, { TextInputProps } from './TextInput';

export interface FormItemProps extends TextInputProps {
	name: string;
	defaultValue?: string;
}

function FormItem({ name, defaultValue, ...props }: FormItemProps) {
	const {
		register,
		formState: { isSubmitting },
		setValue,
	} = useFormContext();

	useEffect(() => {
		setValue(name, defaultValue ?? '');
	}, [defaultValue, name, setValue]);

	return (
		<TextInput
			{...props}
			disabled={props?.disabled || isSubmitting}
			role={props.role}
			{...register(name)}
		/>
	);
}

export default FormItem;
