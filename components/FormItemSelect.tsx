import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import SelectInput, { SelectInputProps } from './SelectInput';

export interface FormItemSelectProps<KeyType>
	extends SelectInputProps<KeyType> {
	name: string;
	wapperClassName?: string;
}

function FormItemSelect<KeyType extends string | number>({
	name,
	items,
	defaultValue,
	wapperClassName,
	...props
}: FormItemSelectProps<KeyType>) {
	const { setValue, watch } = useFormContext();
	useEffect(() => {
		if (defaultValue) {
			setValue(name, defaultValue);
		}
	}, [defaultValue, name, setValue]);
	return (
		<SelectInput
			items={items}
			{...props}
			value={watch(name)}
			onChange={(item) => {
				setValue(name, item.key);
			}}
			wapperClassName={wapperClassName}
		/>
	);
}

export default FormItemSelect;
