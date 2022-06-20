import React from 'react';
import { render } from 'jest/utils';
import '@testing-library/jest-dom/extend-expect';
import Appliances from './index';

describe('<Appliances /> - Component', () => {
	let container = null;
	const data = [
		{
			name: 'super-lemon',
			version: '1.0.0',
			description: '',
			main: './build/index.js',
			scripts: {
				build: 'webpack',
			},
			author: 'guandjoy',
			license: 'ISC',
			devDependencies: {
				'@babel/core': '^7.7.5',
				'@babel/preset-env': '^7.7.6',
				'@babel/preset-react': '^7.7.4',
				'babel-loader': '^8.0.6',
				'css-loader': '^3.3.0',
				'style-loader': '^1.0.1',
				webpack: '^4.41.2',
				'webpack-cli': '^3.3.10',
			},
			dependencies: {
				'prop-types': '^15.7.2',
				react: '^16.12.0',
			},
		},
	];

	const Component = () => {
		return <Appliances appliances={data} />;
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
	it('it should contain the text online', async () => {
		expect(container.getByText('online')).toBeInTheDocument();
	});
});
