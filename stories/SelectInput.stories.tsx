import React from 'react';
import { Meta, Story } from '@storybook/react';
import SelectInput from '../components/SelectInput';
import Block, { BlockProps } from './helpers/Block';

export default {
	title: 'SelectInput',
	component: SelectInput,
	parameters: {
		controls: { expanded: false },
	},
} as Meta;

const people = [
	{
		id: 1,
		name: 'Wade Cooper',
		username: '@wcooper',
	},
	{
		id: 2,
		name: 'Arlene Mccoy',
		username: '@amccoy',
	},
	{
		id: 3,
		name: 'Devon Webb',
		username: '@dwebb',
	},
	{
		id: 4,
		name: 'Tom Cook',
		username: '@tcook',
	},
	{
		id: 5,
		name: 'Tanya Fox',
		username: '@tfox',
	},
	{
		id: 6,
		name: 'Hellen Schmidt',
		username: '@hschmidt',
	},
];

function SelectBlock({ children, className, ...props }: BlockProps) {
	return (
		<Block {...props}>
			<div className={className ?? 'w-80'}>{children}</div>
		</Block>
	);
}

const Default: Story = () => {
	return (
		<>
			<SelectBlock title='Simple'>
				<SelectInput
					label='Assigned to'
					items={people.map((person) => ({
						key: person.id,
						label: person.name,
					}))}
					selectedIcon={{
						position: 'left',
					}}
				/>
			</SelectBlock>
			<SelectBlock title='With right indicator'>
				<SelectInput
					label='Assigned to'
					items={people.map((person) => ({
						key: person.id,
						label: person.name,
					}))}
					selectedIcon={{
						position: 'right',
					}}
				/>
			</SelectBlock>
		</>
	);
};

export { Default as SelectInput };
