import clsx from 'clsx';
import { ReactNode } from 'react';

interface ListItemProps {
	children: ReactNode;
	className?: string;
}

function ListItem({ children, className }: ListItemProps) {
	return (
		<li className={clsx('dro-block dro-w-full', className ?? '')}>
			{children}
		</li>
	);
}

export default ListItem;
