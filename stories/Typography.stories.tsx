import {
	HeaderTitle,
	SectionTitle,
	AvatarTitle,
	ListItemText,
	ListItemTitle,
	Paragraph,
	Caption,
} from '../components/Typography';
import { Meta, ComponentStory } from '@storybook/react';
import WrapperText from './helpers/WrapperText';

export default {
	title: 'Typography',
} as Meta;

const TextComponents: ComponentStory<typeof HeaderTitle> = (args) => (
	<>
		<WrapperText title='Header Title' component={<HeaderTitle {...args} />} />
		<WrapperText title='Section Title' component={<SectionTitle {...args} />} />
		<WrapperText
			title='List Item Text'
			component={<ListItemText {...args} />}
		/>
		<WrapperText
			title='List Item Title'
			component={<ListItemTitle {...args} />}
		/>
		<WrapperText title='Caption' component={<Caption {...args} />} />

		<WrapperText
			title='Paragraph'
			component={
				<Paragraph>
					Contrary to popular belief, Lorem Ipsum is not simply random text. It
					has roots in a piece of classical Latin literature from 45 BC, making
					it over 2000 years old. Richard McClintock, a Latin professor at
					Hampden-Sydney College in Virginia, looked up one of the more obscure
					Latin words, consectetur, from a Lorem Ipsum passage, and going
					through the cites of the word in classical literature, discovered the
					undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
					1.10.33 of de Finibus Bonorum et (The Extremes of Good and Evil) by
					Cicero, written in 45 BC. This book is a treatise on the theory of
					ethics, very popular during the Renaissance. The first line of Lorem
					Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section
					1.10.32.
				</Paragraph>
			}
		/>
	</>
);

TextComponents.args = {
	children:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export { TextComponents as Typography };
