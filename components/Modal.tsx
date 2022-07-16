import React, { Fragment, useMemo } from 'react';
import clsx from 'clsx';
import { Transition } from '@headlessui/react';
import { SectionTitle } from './Typography';

export interface ModalProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	isOpen: boolean;
	className?: string;
	iconClassName?: string;
	title?: string;
	children?: React.ReactNode;
	onClose?: () => void;
}

function CloseIcon() {
	return (
		<svg
			className='dro-h-6 dro-w-6'
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'
			aria-hidden='true'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				d='M6 18L18 6M6 6l12 12'
			/>
		</svg>
	);
}

Modal.defaultProps = {
	className: null,
	title: '',
	children: [],
};

const OUTER_CONTAINER_CLASSES = [
	'dro-fixed',
	'dro-z-10',
	'dro-inset-0',
	'dro-overflow-y-auto',
];
const INNER_CONTAINER_CLASSES = [
	'dro-flex',
	'dro-items-end',
	'dro-justify-center',
	'dro-min-h-screen',
	'dro-pt-4',
	'dro-px-4 sm:dro-px-0',
	'dro-text-center',
	'sm:dro-block',
	'sm:dro-p-0',
];

const BACKGROUND_CLASSES = [
	'dro-fixed',
	'dro-inset-0',
	'dro-bg-gray-500',
	'dro-bg-opacity-75',
	'dro-transition-opacity',
];

const INNER_CONTENT_CLASSES = ['dro-mt-3', 'dro-text-center'];

const INNER_CONTENT_ALERT_CLASSES = ['sm:dro-mt-0', 'sm:dro-text-left'];

function Modal(props: ModalProps) {
	const {
		className,
		iconClassName,
		title,
		children,
		onClose,
		isOpen,
		...others
	} = props;

	const mainClassName = useMemo(() => {
		const classes = [...OUTER_CONTAINER_CLASSES];
		return clsx(classes, className);
	}, [className]);

	return (
		<Transition.Root show={isOpen} as={Fragment}>
			<div
				className={mainClassName}
				{...others}
				aria-labelledby='modal-title'
				role='dialog'
				aria-modal='true'>
				<div className={clsx(INNER_CONTAINER_CLASSES)}>
					<Transition.Child
						as={Fragment}
						enter='dro-ease-out dro-duration-300'
						enterFrom='dro-opacity-0'
						enterTo='dro-opacity-100'
						leave='dro-ease-in dro-duration-200'
						leaveFrom='dro-opacity-100'
						leaveTo='dro-opacity-0'>
						<div className={clsx(BACKGROUND_CLASSES)} aria-hidden='true'></div>
					</Transition.Child>
					{/* <!-- This element is to trick the browser into centering the modal contents. --> */}
					<span
						className={clsx(
							'dro-hidden',
							'sm:dro-inline-block',
							'sm:dro-align-middle',
							'sm:dro-h-screen'
						)}
						aria-hidden='true'>
						&#8203;
					</span>

					<Transition.Child
						as={Fragment}
						enter='dro-ease-out dro-duration-300'
						enterFrom='dro-opacity-0 dro-translate-y-4 sm:dro-translate-y-0 sm:dro-scale-95'
						enterTo='dro-opacity-100 dro-translate-y-0 sm:dro-scale-100'
						leave='dro-ease-in dro-duration-200'
						leaveFrom='dro-opacity-100 dro-translate-y-0 sm:dro-scale-100'
						leaveTo='dro-opacity-0 dro-translate-y-4 sm:dro-translate-y-0 sm:dro-scale-95'>
						<div
							className={clsx(
								'dro-inline-block',
								'dro-align-bottom',
								'dro-bg-white',
								'dro-rounded',
								'dro-text-left',
								'dro-shadow-xl',
								'dro-transform',
								'dro-transition-all',
								'sm:dro-align-middle',
								'dro-p-6'
							)}>
							{onClose && (
								<div
									className={clsx(
										'dro-hidden',
										'sm:dro-block',
										'dro-absolute',
										'dro-top-0',
										'dro-right-0',
										'dro-pt-4',
										'dro-pr-4'
									)}>
									<button
										type='button'
										className={clsx(
											'dro-bg-white',
											'dro-rounded-md',
											'dro-text-gray-400',
											'hover:dro-text-gray-500',
											'focus:dro-outline-none',
											'focus:dro-ring-2',
											'focus:dro-ring-offset-2',
											'focus:dro-ring-indigo-500'
										)}
										onClick={onClose}>
										<span className='dro-sr-only'>Close</span>
										<CloseIcon />
									</button>
								</div>
							)}
							<div className={clsx(['sm:dro-flex', 'sm:dro-items-start'])}>
								<div
									className={clsx(
										INNER_CONTENT_CLASSES,
										INNER_CONTENT_ALERT_CLASSES
									)}>
									<SectionTitle className='dro-text-2xl dro-font-normal dro-mb-4'>
										{title}
									</SectionTitle>
									{children}
								</div>
							</div>
						</div>
					</Transition.Child>
				</div>
			</div>
		</Transition.Root>
	);
}

export default Modal;
