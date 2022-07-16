import React, { ReactNode } from 'react';
import clsx from 'clsx';

type Variant = 'primary' | 'transparent';
interface ComponentScheme {
	wrapper: String[];
}

export const VARIANT_CLASSES: { [key in Variant]: ComponentScheme } = {
	primary: {
		wrapper: ['dro-bg-primary'],
	},
	transparent: {
		wrapper: ['dro-bg-transparent'],
	},
};

export interface SectionProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	variant?: Variant;
	className?: string;
	left: ReactNode;
	right: ReactNode;
}

Section.defaultProps = {
	variant: 'transparent',
};

function Section(props: SectionProps) {
	const { className, variant = 'transparent', left, right, ...others } = props;

	return (
		<section
			{...others}
			className={clsx(
				'dro-py-6 dro-px-[32px]',
				VARIANT_CLASSES[variant].wrapper,
				className
			)}>
			<div
				className={clsx(
					'dro-container dro-mx-auto sm:dro-flex dro-items-center dro-justify-between'
				)}>
				{left}
				{right}
			</div>
		</section>
	);
}

export default Section;
