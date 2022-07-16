import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import Modal from '../components/Modal';
import { Paragraph } from '../components/Typography';

export default {
	title: 'Modal',
	component: Modal,
} as Meta;

const Template: ComponentStory<typeof Modal> = () => {
	return (
		<Modal isOpen title='New delivery' onClose={() => {}}>
			<Paragraph>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore
				ipsam facere aliquid eligendi, minima aliquam harum architecto, natus
				dolorem dicta facilis veritatis rem ut blanditiis vel nobis voluptatum
			</Paragraph>
		</Modal>
	);
};

Template.args = {};

export { Template as Modal };
