// Using Polymorphic Component pattern from https://itnext.io/react-polymorphic-components-with-typescript-f7ce72ea7af2
// https://stackoverflow.com/a/66568474
import React from 'react';

type TextProps<T extends React.ElementType> = {
	className?: string;
	as?: T;
};

function createTypographyComponent(
	baseClassNames: string,
	defaultTag: React.ElementType
) {
	return function Typography<T extends React.ElementType = typeof defaultTag>({
		as,
		className = '',
		...props
	}: TextProps<T> & React.ComponentPropsWithoutRef<T>) {
		const Component = as || defaultTag;
		return (
			<Component className={`${baseClassNames} ${className}`} {...props} />
		);
	};
}

export const SectionTitle = createTypographyComponent(
	'dro-font-inter dro-text-base dro-font-semibold dro-leading-6',
	'h4'
);

export const SectionSubTitle = createTypographyComponent(
	'dro-font-inter dro-text-base dro-font-normal dro-leading-6',
	'h4'
);

export const HeaderTitle = createTypographyComponent(
	'dro-font-inter dro-text-3xl dro-font-normal dro-left-9',
	'h1'
);

export const Caption = createTypographyComponent(
	'dro-font-inter dro-text-base dro-font-normal dro-leading-[19.36px]',
	'span'
);

export const ListItemTitle = createTypographyComponent(
	'dro-font-inter dro-text-sm dro-font-normal dro-leading-4',
	'span'
);

export const ListItemText = createTypographyComponent(
	'dro-font-inter dro-text-base dro-font-normal dro-leading-6',
	'span'
);

export const Paragraph = createTypographyComponent(
	'dro-font-inter dro-text-base dro-font-normal dro-leading-6',
	'p'
);
