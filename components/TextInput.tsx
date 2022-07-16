import clsx from 'clsx';
import React, {
	cloneElement,
	forwardRef,
	InputHTMLAttributes,
	ReactElement,
	ReactNode,
	useId,
} from 'react';
import { COMMON_CLASSES, VARIANT_CLASSES } from './Button';

type IconSideItem = ReactElement;

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: ReactNode;
	type?: InputHTMLAttributes<HTMLInputElement>['type'];
	className?: string;
	wapperClassName?: string;
	hideLabel?: boolean;
	icon?: IconSideItem;
}

function LeadingItem({ sideItem }: { sideItem: IconSideItem }) {
	if (sideItem) {
		return (
			<div
				className={clsx(
					'dro-absolute dro-inset-y-0 dro-left-0 dro-pl-3 dro-flex dro-items-center',
					'dro-pointer-events-none'
				)}>
				{cloneElement(sideItem, {
					className: clsx(
						'dro-w-5 dro-h-5 dro-text-gray-400',
						sideItem.props?.className ?? ''
					),
					'aria-hidden': true,
				})}
			</div>
		);
	}
	return null;
}

function getInputClasses({
	leadingItem,
	className,
}: {
	leadingItem?: IconSideItem;
	className: string;
}) {
	const CLASSES = [
		'dro-block',
		'dro-w-full',
		'sm:dro-text-sm',
		'dro-bg-transparent',
		'dro-shadow-textInput',
		'focus:dro-outline-none',
		'focus:dro-ring-2',
		'focus:dro-ring-offset-2',
		'focus:dro-ring-green-700',
		'dro-border-gray-300',
		'dro-rounded-md',
		'dro-px-6',
		'dro-py-3',
	];

	if (leadingItem) {
		CLASSES.push('dro-pl-10');
	}

	return clsx(CLASSES, className);
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
	function TextInput(props, ref) {
		const {
			label,
			type: typeProp,
			className: classNameProp,
			hideLabel: hideLabelProp,
			icon,
			wapperClassName,
			...inputProps
		} = props;

		const type = typeProp ?? 'text';
		const className = classNameProp ?? '';
		const hideLabel = hideLabelProp ?? false;

		const id = useId();

		return (
			<div className={clsx('dro-w-full', wapperClassName)}>
				<div className='dro-flex dro-justify-between'>
					<label
						htmlFor={id}
						className={clsx(
							hideLabel
								? 'dro-sr-only'
								: 'dro-block dro-font-inter dro-text-sm dro-font-normal dro-leading-6 dro-text-black dro-opacity-50 dro-mb-1'
						)}>
						{label}
					</label>
				</div>
				<div className='dro-relative dro-rounded dro-shadow-textInput dro-flex dro-w-full dro-h-10'>
					{icon ? <LeadingItem sideItem={icon} /> : null}
					<div className='dro-relative dro-w-full dro-flex'>
						<input
							type={type}
							id={id}
							ref={ref}
							className={getInputClasses({
								leadingItem: icon,
								className,
							})}
							{...inputProps}
						/>
					</div>
				</div>
			</div>
		);
	}
);

export default TextInput;
