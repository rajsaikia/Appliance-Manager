import React from 'react';
import { render } from 'jest/utils';
import '@testing-library/jest-dom/extend-expect';
import Temperature from './index';

describe('<Temperature /> - Component', () => {
	let container = null;

	const Component = () => {
		return (
			<Temperature
				value='300'
				name='ACDC'
				register={() => {}}
				setValue={() => {}}
			/>
		);
	};
	beforeEach(async () => {
		container = render(<Component />);
	});

	afterEach(() => {
		container.unmount();
	});
	it('renders correctly', async () => {
		expect(container.asFragment()).toMatchSnapshot();
	});
	it('it should contain the text 300', async () => {
		expect(container.getByText('300')).toBeInTheDocument();
	});
	it('it should contain the text F', async () => {
		expect(container.getByText('F')).toBeInTheDocument();
	});
});
