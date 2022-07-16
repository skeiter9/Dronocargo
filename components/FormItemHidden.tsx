import { forwardRef, InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

export interface FormItemProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
}

const FormItemHidden = forwardRef<HTMLInputElement, FormItemProps>(
	function InnerFormItemHidden(props, ref) {
		const { register } = useFormContext();
		return (
			<input {...register(props.name)} {...props} type='hidden' ref={ref} />
		);
	}
);

export default FormItemHidden;
