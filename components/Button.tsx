import clsx from 'clsx';
import React, { ButtonHTMLAttributes, forwardRef, useMemo } from 'react';

export const COMMON_CLASSES = [
	'dro-inline-flex',
	'dro-items-center',
	'dro-border',
	'focus:dro-outline-none',
	'focus:dro-ring-2',
	'focus:dro-ring-offset-2',
	'focus:dro-ring-green-700',
	'dro-font-inter dro-text-base dro-font-medium dro-leading-6',
	'dro-rounded',
	'dro-px-4',
	'dro-min-h-[40px]',
];

type ButtonVariant = 'primary' | 'secondary';

export const VARIANT_CLASSES: { [key in ButtonVariant]: Array<string> } = {
	primary: [
		'dro-text-white',
		'dro-bg-primary',
		'hover:dro-bg-green-700',
		'dro-border-transparent',
	],
	secondary: [
		'dro-text-black',
		'dro-bg-white',
		'hover:dro-bg-neutral-100',
		'dro-border-neutral-200',
	],
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
	props,
	ref
) {
	const {
		type: typeProp,
		className: classNameProp,
		variant = 'primary',
		children,
		...moreProps
	} = props;

	const type = typeProp ?? 'button';
	const givenClassName = classNameProp ?? '';

	const className = useMemo(() => {
		const classes = [...COMMON_CLASSES, ...VARIANT_CLASSES[variant]];
		return clsx(classes, givenClassName);
	}, [variant, givenClassName]);

	return (
		<button ref={ref} type={type} className={className} {...moreProps}>
			{children}
		</button>
	);
});

export default Button;
