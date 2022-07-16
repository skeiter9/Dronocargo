import { ReactNode } from 'react';

export interface StoryWrapperProps {
	children: ReactNode;
}

function StoryWrapper({ children }: StoryWrapperProps) {
	return (
		<section className='dro-max-w-screen-lg dro-m-auto'>{children}</section>
	);
}

export default StoryWrapper;
