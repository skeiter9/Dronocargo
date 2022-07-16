import { ReactNode } from 'react';
import Block from './Block';

interface WrapperTextProps {
	title: string;
	component: ReactNode;
}
function WrapperText({ title, component }: WrapperTextProps) {
	return (
		<Block title={title} className='dro-p-4 dro-my-6'>
			{component}
		</Block>
	);
}

export default WrapperText;
