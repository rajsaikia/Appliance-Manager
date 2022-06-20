import React from 'react';
import { render } from 'jest/utils';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './index';

describe('<Checkbox /> - Component', () => {
	let container = null;

	const Component = () => {
		return <Navbar />;
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
	it('it should contain the text ApplianceManager', async () => {
		expect(container.getByText('ApplianceManager')).toBeInTheDocument();
	});
});
