import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAppliancesAction, getRoomsAction } from 'store/actions';
import Dashboard from './container/dashboard';

import './App.css';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAppliancesAction());
	}, [dispatch]);
	useEffect(() => {
		dispatch(getRoomsAction());
	}, [dispatch]);
	return (
		<div className='container'>
			<Dashboard />
		</div>
	);
};

export default App;
