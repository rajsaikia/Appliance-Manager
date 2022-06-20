import defaultState from '../default-state';
import { createReducer } from '@reduxjs/toolkit';
import {
	getAppliancesAction,
	getRoomsAction,
	changeAppliancesAction,
	changeRoomsAction,
	editAppliancesAction,
	addAppliancesAction,
	deleteAppliancesAction,
} from '../actions';
import {
	getAppliancesActionFullfilledReducer,
	getRoomsActionFullfilledReducer,
	changeAppliancesActionFullfilledReducer,
	changeRoomsActionFullfilledReducer,
	editAppliancesActionFullfilledReducer,
	addAppliancesActionFullfilledReducer,
	deleteAppliancesActionFullfilledReducer,
} from './appliancesReducer';

const actionsMap = {
	[getAppliancesAction.fulfilled]: getAppliancesActionFullfilledReducer,
	[getRoomsAction.fulfilled]: getRoomsActionFullfilledReducer,
	[changeAppliancesAction.fulfilled]: changeAppliancesActionFullfilledReducer,
	[changeRoomsAction.fulfilled]: changeRoomsActionFullfilledReducer,
	[editAppliancesAction.fulfilled]: editAppliancesActionFullfilledReducer,
	[addAppliancesAction.fulfilled]: addAppliancesActionFullfilledReducer,
	[deleteAppliancesAction.fulfilled]: deleteAppliancesActionFullfilledReducer,
};

export const iniReducer = initialState =>
	createReducer(initialState, actionsMap);

export const rootReducer = createReducer(defaultState, actionsMap);
