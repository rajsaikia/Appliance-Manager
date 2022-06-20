import React from 'react';
import { render } from 'jest/utils';
import '@testing-library/jest-dom/extend-expect';
import Form from './index';

describe('<Form /> - Component', () => {
	let container = null;
	const data = {
		id: 1,
		type: 'Air Conditioner',
		nickname: 'AC',
		properties: [
			{
				name: 'power',
				type: 'toggle',
				value: true,
			},
			{
				name: 'mode',
				type: 'select',
				value: 'cool',
				options: ['cool', 'heat'],
			},
			{
				name: 'temperature',
				type: 'temperature',
				value: 60,
			},
		],
	};
	const Component = () => {
		return <Form field={data} cancelUpdate={() => {}} />;
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
	it('it should contain the text heat', async () => {
		expect(container.getByText('heat')).toBeInTheDocument();
	});
	it('it should contain the text temperature', async () => {
		expect(container.getByText('temperature')).toBeInTheDocument();
	});
	it('it should contain the text 60', async () => {
		expect(container.getByText('60')).toBeInTheDocument();
	});
	it('it should contain the text cool', async () => {
		expect(container.getByText('cool')).toBeInTheDocument();
	});

	it('it should contain the text F', async () => {
		expect(container.getByText('F')).toBeInTheDocument();
	});

	it('it should contain the text Apply', async () => {
		expect(container.getByText('Apply')).toBeInTheDocument();
	});
	it('it should contain the text cancel', async () => {
		expect(container.getByText('cancel')).toBeInTheDocument();
	});
});
