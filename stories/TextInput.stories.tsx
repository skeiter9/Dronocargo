import React from 'react';
import { Meta, Story } from '@storybook/react';
import Block, { BlockProps } from './helpers/Block';
import { MailIcon } from '@heroicons/react/solid';
import TextInput from '../components/TextInput';
import StoryWrapper from './helpers/StoryWrapper';

export default {
	title: 'TextInput',
	component: TextInput,
	parameters: {
		controls: { expanded: false },
	},
} as Meta;

function InputBlock({ children, ...props }: BlockProps) {
	return (
		<Block {...props}>
			<div className='w-80'>{children}</div>
		</Block>
	);
}

const Default: Story = () => {
	return (
		<StoryWrapper>
			<InputBlock title='Input with label'>
				<TextInput label='Email' placeholder='you@example.com' />
			</InputBlock>
			<InputBlock title='Input with hidden label'>
				<TextInput label='Email' placeholder='you@example.com' hideLabel />
			</InputBlock>
			<InputBlock title='Input with leading icon'>
				<TextInput
					label='Email'
					placeholder='you@example.com'
					icon={<MailIcon />}
				/>
			</InputBlock>
		</StoryWrapper>
	);
};

export { Default as TextInput };
