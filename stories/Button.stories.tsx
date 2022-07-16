import React from 'react';
import { Meta, ComponentStory } from '@storybook/react';
import Button from '../components/Button';

export default {
	title: 'Buttons',
	component: Button,
	args: {
		children: 'New delivery',
	},
} as Meta;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

Template.parameters = {
	jest: ['../components/Button/Button.test.js'],
};

export const Primary = Template.bind({});
Primary.args = {
	variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	variant: 'secondary',
};
