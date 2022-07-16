import clsx from 'clsx';
import { ReactNode } from 'react';

interface ListProps {
	children: ReactNode;
	className?: string;
}

function List({ children, className }: ListProps) {
	return (
		<ul
			className={clsx(
				'dro-divide-y dro-divide-gray-200 dro-w-full',
				className ?? ''
			)}>
			{children}
		</ul>
	);
}

export default List;
