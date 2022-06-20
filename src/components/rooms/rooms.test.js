import React from 'react';
import { render } from 'jest/utils';
import '@testing-library/jest-dom/extend-expect';
import Rooms from './index';

describe('<Checkbox /> - Component', () => {
	let container = null;
	const data = [
		{
			id: 1,
			name: 'Living Room',
			applianceIds: [1],
		},
		{
			id: 2,
			name: 'Kitchen',
			applianceIds: [2, 3, 4],
		},
		{
			id: 3,
			name: 'Laundry',
			applianceIds: [5, 6],
		},
		{
			id: 4,
			name: 'Home Office',
			applianceIds: [6, 7],
		},
	];

	const Component = () => {
		return <Rooms rooms={data} />;
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
	it('it should contain the text Living Room', async () => {
		expect(container.getByText('Living Room')).toBeInTheDocument();
	});
	it('it should contain the text Kitchen', async () => {
		expect(container.getByText('Kitchen')).toBeInTheDocument();
	});
	it('it should contain the text Laundry', async () => {
		expect(container.getByText('Laundry')).toBeInTheDocument();
	});
	it('it should contain the text Home Office', async () => {
		expect(container.getByText('Home Office')).toBeInTheDocument();
	});
});
