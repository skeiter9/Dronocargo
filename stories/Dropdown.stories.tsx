import {
	ArchiveIcon,
	ArrowCircleRightIcon,
	DuplicateIcon,
	HeartIcon,
	PencilAltIcon,
	TrashIcon,
	UserAddIcon,
} from '@heroicons/react/solid';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import Dropdown from '../components/Dropdown';
import Block from './helpers/Block';

export default {
	title: 'Dropdown',
	component: Dropdown.Menu,
	parameters: {
		controls: { expanded: false },
	},
} as Meta;

const Default: Story = () => {
	const menuItemIconClasses =
		'dro-mr-3 dro-h-5 dro-w-5 dro-text-gray-400 group-hover:dro-text-gray-500';

	return (
		<>
			<Block title='Simple' className='text-center'>
				<Dropdown.Menu buttonText='Options'>
					<Dropdown.Item>
						<a href='#account-settings'>Account Settings</a>
					</Dropdown.Item>
					<Dropdown.Item>
						{({ className }) => {
							return (
								<a href='#support' className={className}>
									Support
								</a>
							);
						}}
					</Dropdown.Item>
					<Dropdown.Item>
						<a href='#license'>License</a>
					</Dropdown.Item>
					<form method='POST' action='#'>
						<Dropdown.Item>
							{({ className }) => {
								return (
									<button type='submit' className={className}>
										Sign out
									</button>
								);
							}}
						</Dropdown.Item>
					</form>
				</Dropdown.Menu>
			</Block>

			<Block title='With dividers' className='text-center'>
				<Dropdown.Menu buttonText='Options'>
					<form method='POST' action='#'>
						<Dropdown.Item>
							<button type='submit'>Edit</button>
						</Dropdown.Item>
					</form>
					<form method='POST' action='#'>
						<Dropdown.Item>
							<button type='submit'>Duplicate</button>
						</Dropdown.Item>
					</form>
					<Dropdown.Divider />
					<form method='POST' action='#'>
						<Dropdown.Item>
							<button type='submit'>Archive</button>
						</Dropdown.Item>
					</form>
					<form method='POST' action='#'>
						<Dropdown.Item>
							<button type='submit'>Move</button>
						</Dropdown.Item>
					</form>
					<Dropdown.Divider />
					<form method='POST' action='#'>
						<Dropdown.Item>
							<button type='submit'>Share</button>
						</Dropdown.Item>
					</form>
					<form method='POST' action='#'>
						<Dropdown.Item>
							<button type='submit'>Add to favorites</button>
						</Dropdown.Item>
					</form>
					<Dropdown.Divider />
					<form method='POST' action='#'>
						<Dropdown.Item>
							<button type='submit'>Delete</button>
						</Dropdown.Item>
					</form>
				</Dropdown.Menu>
			</Block>

			<Block title='With icons' className='text-center'>
				<Dropdown.Menu buttonText='Options'>
					<form method='POST' action='#'>
						<Dropdown.Item>
							<button type='submit'>
								<PencilAltIcon className={menuItemIconClasses} />
								Edit
							</button>
						</Dropdown.Item>
					</form>
					<form method='POST' action='#'>
						<Dropdown.Item>
							<button type='submit'>
								<DuplicateIcon className={menuItemIconClasses} />
								Duplicate
							</button>
						</Dropdown.Item>
					</form>
					<Dropdown.Divider />
					<form method='POST' action='#'>
						<Dropdown.Item>
							<button type='submit'>
								<ArchiveIcon className={menuItemIconClasses} />
								Archive
							</button>
						</Dropdown.Item>
					</form>
					<form method='POST' action='#'>
						<Dropdown.Item>
							<button type='submit'>
								<ArrowCircleRightIcon className={menuItemIconClasses} />
								Move
							</button>
						</Dropdown.Item>
					</form>
					<Dropdown.Divider />
					<form method='POST' action='#'>
						<Dropdown.Item>
							<button type='submit'>
								<UserAddIcon className={menuItemIconClasses} />
								Share
							</button>
						</Dropdown.Item>
					</form>
					<form method='POST' action='#'>
						<Dropdown.Item>
							<button type='submit'>
								<HeartIcon className={menuItemIconClasses} />
								Add to favorites
							</button>
						</Dropdown.Item>
					</form>
					<Dropdown.Divider />
					<form method='POST' action='#'>
						<Dropdown.Item>
							<button type='submit'>
								<TrashIcon className={menuItemIconClasses} />
								Delete
							</button>
						</Dropdown.Item>
					</form>
				</Dropdown.Menu>
			</Block>
		</>
	);
};

export { Default as Dropdown };
