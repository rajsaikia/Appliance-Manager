import React from 'react';
import { render } from 'jest/utils';
import '@testing-library/jest-dom/extend-expect';
import Checkbox from './index';

describe('<Checkbox /> - Component', () => {
	let container = null;
	const data = { name: 'power', type: 'toggle', value: false };

	const Component = () => {
		return <Checkbox res={data} register={() => {}} setValue={() => {}} />;
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
});
