import React from 'react';
import PropTypes from 'prop-types';
import { render as standardRender } from '@testing-library/react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Provider } from 'react-redux';
import store from '../src/store/index';

const ELEMENTS_OPTIONS = {
	fonts: [
		{
			cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
		},
	],
};

const stripePromise = loadStripe(process.env.REACT_APP_SECRAT_KEY);

export const AllProviders = ({ children }) => (
	<Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
		<Provider store={store}>{children}</Provider>
	</Elements>
);

AllProviders.propTypes = {
	children: PropTypes.any,
};

const customRender = (ui, options) =>
	standardRender(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
