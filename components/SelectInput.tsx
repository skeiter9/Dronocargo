import { Listbox, Transition } from '@headlessui/react';
import clsx from 'clsx';
import React, {
	cloneElement,
	Fragment,
	ReactElement,
	ReactNode,
	useCallback,
	useEffect,
	useState,
	SVGAttributes,
} from 'react';
import { COMMON_CLASSES, VARIANT_CLASSES } from './Button';

interface SelectItem<KeyType> {
	key: KeyType;
	label: ReactNode;
	leftElement?: ReactElement;
}

type SelectedIcon = {
	position: 'left' | 'right';
	element?: ReactElement;
};

function SelectedIcon({
	selected,
	active,
	selectedIcon,
}: {
	selected: boolean;
	active: boolean;
	selectedIcon?: SelectedIcon;
}) {
	if (selected && selectedIcon) {
		const { position, element } = selectedIcon;
		const iconElement = element ?? <CheckIcon />;
		return (
			<span
				className={clsx(
					active ? 'dro-text-white' : 'dro-text-indigo-600',
					'dro-absolute dro-inset-y-0 dro-flex dro-items-center',
					{
						['dro-left-0 dro-pl-1.5']: position === 'left',
						['dro-right-0 dro-pr-4']: position === 'right',
					}
				)}>
				{cloneElement(iconElement, {
					className: clsx(
						'dro-h-5 dro-w-5',
						iconElement.props?.className ?? ''
					),
					'aria-hidden': 'true',
				})}
			</span>
		);
	}

	return null;
}
export interface SelectInputProps<KeyType> {
	label: ReactNode;
	items: Readonly<Array<SelectItem<KeyType>>>;
	selectedIcon?: SelectedIcon;
	value?: KeyType;
	defaultValue?: KeyType;
	onChange?: (item: SelectItem<KeyType>) => void;
	wapperClassName?: string;
}

function SelectInput<KeyType extends string | number>({
	label,
	items,
	selectedIcon,
	value,
	defaultValue,
	onChange,
	wapperClassName,
}: SelectInputProps<KeyType>) {
	const [selected, setSelected] = useState<SelectItem<KeyType> | null>(
		items.find((item) => item.key === defaultValue) ?? null
	);

	const hasSelectedCheckOnRight =
		selectedIcon && selectedIcon.position === 'right';

	const additionalElement = items.find((item) => item.leftElement);

	const handleChange = useCallback(
		(selection: SelectItem<KeyType>) => {
			setSelected(selection);
			if (onChange) {
				onChange(selection);
			}
		},
		// disable exhausting-deps, its warning about a false positive, not being aware of type variables. Reference: https://github.com/typescript-eslint/typescript-eslint/issues/2467
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[onChange]
	);

	useEffect(() => {
		if (value && onChange) {
			const selectedItem = items.find((item) => item.key === value);
			setSelected(selectedItem ?? null);
		}
	}, [items, value, onChange]);

	if (value && !onChange) {
		throw new Error(
			"Can't pass value without onChange. Use defaultValue instead."
		);
	}

	return (
		<Listbox value={selected} onChange={handleChange}>
			{({ open }) => (
				<div className={clsx(wapperClassName)}>
					<Listbox.Label className='dro-block dro-font-inter dro-text-sm dro-font-normal dro-leading-6 dro-text-black dro-opacity-50 dro-mb-1'>
						{label}
					</Listbox.Label>
					<div className=' dro-relative'>
						<Listbox.Button
							className={clsx([
								...COMMON_CLASSES,
								...VARIANT_CLASSES['secondary'],
								'dro-shadow-textInput',
								'dro-flex dro-items-center dro-pr-8 dro-w-full',
							])}>
							{selected ? (
								<>
									{additionalElement ? selected.leftElement : null}
									<span
										className={clsx('dro-block dro-truncate', {
											['dro-ml-3']: additionalElement,
										})}>
										{selected.label}
									</span>
								</>
							) : (
								//Uses an invisible element to keep the height
								<div className='dro-flex dro-items-center dro-invisible'>
									{additionalElement?.leftElement}
									<span className='dro-block dro-truncate'>
										Choose an option
									</span>
								</div>
							)}
							<span
								className={clsx(
									'dro-absolute dro-inset-y-0 dro-right-0 dro-flex',
									'dro-items-center dro-pr-2 dro-pointer-events-none'
								)}>
								<SelectorIcon
									className='dro-h-5 dro-w-5 dro-text-gray-400'
									aria-hidden='true'
								/>
							</span>
						</Listbox.Button>

						<Transition
							show={open}
							as={Fragment}
							leave='dro-transition dro-ease-in dro-duration-100'
							leaveFrom='dro-opacity-100'
							leaveTo='dro-opacity-0'>
							<Listbox.Options
								static
								className={clsx(
									'dro-absolute dro-z-10 dro-mt-1 dro-w-full dro-bg-white',
									'dro-shadow-textInput dro-max-h-60 dro-rounded-md dro-py-1 dro-text-base dro-ring-1',
									'dro-ring-black dro-ring-opacity-5 dro-overflow-auto focus:dro-outline-none',
									' sm:dro-text-sm'
								)}>
								{items.map((item) => (
									<Listbox.Option
										key={item.key}
										className={({ active }) =>
											clsx(
												active
													? 'dro-text-white dro-bg-primary'
													: 'dro-text-gray-900',
												hasSelectedCheckOnRight
													? 'dro-pl-3 dro-pr-9'
													: 'dro-pl-8 dro-pr-4',
												'dro-cursor-default dro-select-none dro-relative dro-py-2'
											)
										}
										value={item}>
										{({ selected, active }) => (
											<div className='dro-flex dro-items-center'>
												{additionalElement ? item.leftElement : null}
												<span
													className={clsx(
														selected ? 'dro-font-semibold' : 'dro-font-normal',
														'dro-block dro-truncate',
														{ ['dro-ml-3']: additionalElement }
													)}>
													{item.label}
												</span>
												<SelectedIcon
													selected={selected}
													active={active}
													selectedIcon={selectedIcon}
												/>
											</div>
										)}
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</div>
				</div>
			)}
		</Listbox>
	);
}

export default SelectInput;

function SelectorIcon(props: SVGAttributes<SVGElement>) {
	return (
		<svg
			width='12'
			height='8'
			viewBox='0 0 12 8'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z'
				fill='black'
				fillOpacity='0.25'
			/>
		</svg>
	);
}

function CheckIcon(props: SVGAttributes<SVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 20 20'
			fill='currentColor'
			{...props}>
			<path
				fillRule='evenodd'
				d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
				clipRule='evenodd'
			/>
		</svg>
	);
}
