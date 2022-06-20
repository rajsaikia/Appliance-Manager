import React from 'react';
import { render } from 'jest/utils';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './index';

describe('<Dashboard /> - Component', () => {
	let container = null;

	const Component = () => {
		return <Dashboard />;
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
	it('it should contain the text Appliances Type', async () => {
		expect(container.getByText('Appliances Type')).toBeInTheDocument();
	});
	it('it should contain the text Nickname', async () => {
		expect(container.getByText('Nickname')).toBeInTheDocument();
	});
});
