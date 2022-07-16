import clsx from 'clsx';
import React, { ReactNode } from 'react';

export type BlockProps = {
	title: string;
	children: ReactNode;
	className?: string;
	style?: React.CSSProperties;
};

function Block({ title, children, className = '', style }: BlockProps) {
	return (
		<div className='dro-mb-6 md:dro-max-w-screen-lg md:dro-mx-auto'>
			<h1 className='dro-font-medium dro-text-gray-900 dro-mb-4'>{title}</h1>
			<div
				className={clsx(
					'dro-flex dro-justify-center dro-items-center dro-gap-8 dro-rounded-lg dro-px-4 dro-py-8 dro-bg-white dro-border dro-border-gray-200',
					className
				)}
				style={style}>
				{children}
			</div>
		</div>
	);
}

export default Block;
