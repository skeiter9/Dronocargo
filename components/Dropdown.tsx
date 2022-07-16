import React, {
	Children,
	cloneElement,
	Fragment,
	ReactElement,
	ReactNode,
	SVGAttributes,
} from 'react';
import { Menu, Transition } from '@headlessui/react';
import isFunction from '../helpers/isFunction';
import clsx from 'clsx';
import { COMMON_CLASSES, VARIANT_CLASSES } from './Button';

function DropdownTextButtonContent({ children }: { children: ReactNode }) {
	return (
		<>
			<span>{children}</span>
			<DownIcon
				className='dro--mr-1 dro-ml-2 dro-h-5 dro-w-5'
				aria-hidden='true'
			/>
		</>
	);
}

const DRODPOWN_TEXT_BUTTON_CLASSES = clsx(
	'dro-inline-flex dro-justify-center dro-w-full dro-rounded-md dro-border dro-border-gray-300',
	'dro-shadow-sm dro-px-4 dro-py-2 dro-bg-white dro-text-sm dro-font-medium dro-text-gray-700',
	'hover:dro-bg-gray-50 focus:dro-outline-none focus:dro-ring-2 focus:dro-ring-offset-2',
	'focus:dro-ring-offset-gray-100 focus:dro-ring-indigo-500'
);

export type DropdownMenuProps = {
	buttonText: string;
	children: ReactNode;
	className?: string;
	itemsClassName?: string;
};
function DropdownMenu({
	buttonText,
	children,
	className = '',
	itemsClassName = '',
}: DropdownMenuProps) {
	return (
		<Menu
			as='div'
			className={clsx(
				'dro-relative dro-inline-block dro-text-left',
				className
			)}>
			{({ open }) => (
				<>
					<Menu.Button
						className={clsx([
							...COMMON_CLASSES,
							...VARIANT_CLASSES['secondary'],
						])}>
						{buttonText}
						<DownIcon
							className='dro--mr-1 dro-ml-2 dro-h-5 dro-w-5'
							aria-hidden='true'
						/>
					</Menu.Button>

					<Transition
						show={open}
						as={Fragment}
						enter='dro-transition dro-ease-out dro-duration-100'
						enterFrom='dro-transform dro-opacity-0 dro-scale-95'
						enterTo='dro-transform dro-opacity-100 dro-scale-100'
						leave='dro-transition dro-ease-in dro-duration-75'
						leaveFrom='dro-transform dro-opacity-100 dro-scale-100'
						leaveTo='dro-transform dro-opacity-0 dro-scale-95'>
						<Menu.Items
							static
							className={clsx(
								'dro-origin-top-right dro-absolute dro-right-0 dro-mt-2 dro-w-5/6 dro-rounded',
								'dro-shadow-lg dro-bg-white dro-ring-1 dro-ring-black dro-ring-opacity-5',
								'focus:dro-outline-none dro-w-56 dro-z-50',
								'dro-rounded  dro-shadow-lg',
								itemsClassName
							)}>
							<div className='dro-py-1'>{children}</div>
						</Menu.Items>
					</Transition>
				</>
			)}
		</Menu>
	);
}

type DropdownItemProps = {
	children:
		| ReactElement
		| ((props: { className: string; active: boolean }) => ReactNode);
};

function DropdownItem({ children }: DropdownItemProps) {
	return (
		<Menu.Item>
			{({ active }) => {
				const itemClassName = clsx(
					'dro-block dro-p-4 dro-text-sm dro-w-full dro-text-left dro-group dro-flex dro-items-centered',
					'dro-font-inter dro-text-base dro-font-normal dro-leading-6',
					{
						'dro-bg-primary dro-text-white': active,
						'dro-text-gray-700': !active,
					}
				);

				if (isFunction(children)) {
					return children({ className: itemClassName, active }) as ReactElement;
				} else {
					const childrenNodes = Children.toArray(children);
					const firstChild = childrenNodes[0] as ReactElement;

					if (
						firstChild &&
						(firstChild.type === 'a' || firstChild.type === 'button')
					) {
						return cloneElement(firstChild, {
							className: clsx(itemClassName, firstChild.props.className ?? ''),
						});
					} else {
						return children;
					}
				}
			}}
		</Menu.Item>
	);
}

function DropdownDivider({ className = '' }: { className?: string }) {
	return (
		<div
			className={clsx(
				'dro-my-1 dro-h-px dro-w-full dro-bg-gray-100',
				className
			)}
			role='none'
		/>
	);
}

const exportedComponents = {
	Menu: DropdownMenu,
	Item: DropdownItem,
	Divider: DropdownDivider,
};

export default exportedComponents;

function DownIcon(props: SVGAttributes<SVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 20 20'
			fill='currentColor'
			{...props}>
			<path
				fillRule='evenodd'
				d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
				clipRule='evendoff'
			/>
		</svg>
	);
}
