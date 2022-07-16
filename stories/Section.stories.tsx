import React from 'react';
import { Meta, ComponentStory } from '@storybook/react';
import Section from '../components/Section';
import { SectionSubTitle, SectionTitle } from '../components/Typography';
import Avatar from '../components/Avatar';

export default {
	title: 'Section',
	component: Section,
	argTypes: {
		left: {
			table: {
				disable: true,
			},
		},
		right: {
			table: {
				disable: true,
			},
		},
	},
} as Meta;

const Template: ComponentStory<typeof Section> = (args) => (
	<Section
		{...args}
		left={<SectionTitle className='dro-text-green'>Dronocargo</SectionTitle>}
		right={
			<div className='dro-flex dro-items-center'>
				<SectionSubTitle className='dro-text-black dro-mr-[10px]'>
					Regina Zepeda
				</SectionSubTitle>
				<Avatar />
			</div>
		}
	/>
);

Template.args = {
	variant: 'transparent',
	className: '',
};

export { Template as Section };
