import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
	it('respects the user-given type attribute', () => {
		render(
			<Button variant='primary' data-testid='btn-1'>
				Text
			</Button>
		);
		expect(screen.getByTestId('btn-1')).toHaveAttribute('type', 'button');
		render(
			<Button variant='primary' type='submit' data-testid='btn-2'>
				Text
			</Button>
		);
		expect(screen.getByTestId('btn-2')).toHaveAttribute('type', 'submit');
	});

	it('applies given classes after the component classes', () => {
		render(
			<Button variant='primary' data-testid='btn-1' className='my-custom-class'>
				Text
			</Button>
		);
		const classList = Array.from(screen.getByTestId('btn-1').classList);
		expect(classList[classList.length - 1]).toEqual('my-custom-class');
	});
});
