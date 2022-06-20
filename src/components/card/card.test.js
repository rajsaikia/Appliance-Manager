import React from 'react';
import { render } from 'jest/utils';
import '@testing-library/jest-dom/extend-expect';
import Card from './index';

describe('<Appliances /> - Component', () => {
	let container = null;
	const data = {
		id: 2,
		type: 'Oven',
		nickname: 'Oven',
		properties: [
			{
				name: 'power',
				type: 'toggle',
				value: false,
			},
			{
				name: 'mode',
				type: 'select',
				value: 'cool',
				options: ['bake', 'broil'],
			},
			{
				name: 'temperature',
				type: 'temperature',
				value: 300,
			},
		],
	};

	const Component = () => {
		return <Card cardDetails={data} />;
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
	it('it should contain the text Appliances Type', async () => {
		expect(container.getByText('Appliances Type')).toBeInTheDocument();
	});
	it('it should contain the text Nickname', async () => {
		expect(container.getByText('Nickname')).toBeInTheDocument();
	});

	it('it should contain the text power', async () => {
		expect(container.getByText('power')).toBeInTheDocument();
	});
	it('it should contain the text mode', async () => {
		expect(container.getByText('mode')).toBeInTheDocument();
	});
	it('it should contain the text cool', async () => {
		expect(container.getByText('cool')).toBeInTheDocument();
	});
	it('it should contain the text temperature', async () => {
		expect(container.getByText('temperature')).toBeInTheDocument();
	});
	it('it should contain the text 300', async () => {
		expect(container.getByText('300')).toBeInTheDocument();
	});
});
