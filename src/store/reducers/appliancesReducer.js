import {
	filterRooms,
	updateAppliances,
	addNewAppliances,
	AddAppliancesIndex,
	addAppliancesToRoom,
} from './utils';
import { current } from '@reduxjs/toolkit';

export const getAppliancesActionFullfilledReducer = (state, action) => {
	return {
		...state,
		appliances: action.payload,
	};
};
export const getRoomsActionFullfilledReducer = (state, action) => {
	return {
		...state,
		rooms: filterRooms(action.payload),
		appliancesIndex:
			action.payload[process.env.REACT_APP_SELECTED_ID].applianceIds,
		selectedCard:
			action.payload[process.env.REACT_APP_SELECTED_ID].applianceIds[0],
		roomIndex: action.payload[process.env.REACT_APP_SELECTED_ID].id,
	};
};

export const changeAppliancesActionFullfilledReducer = (state, action) => {
	return {
		...state,
		selectedCard: action.payload.id,
		defaultSelectedAppliancesIndex: action.payload.index,
	};
};

export const changeRoomsActionFullfilledReducer = (state, action) => {
	return {
		...state,
		appliancesIndex: action.payload.applianceIds,
		selectedCard: action.payload.applianceIds[0],
		roomIndex: action.payload.id,
		defaultSelectedAppliancesIndex: 0,
	};
};

export const editAppliancesActionFullfilledReducer = (state, action) => {
	return {
		...state,
		appliances: updateAppliances(current(state).appliances, action.payload),
	};
};

export const addAppliancesActionFullfilledReducer = (state, action) => {
	return {
		...state,
		appliances: addNewAppliances(current(state).appliances, action.payload),
		rooms: addAppliancesToRoom(
			current(state).rooms,
			current(state).roomIndex,
			action.payload
		),
		appliancesIndex: AddAppliancesIndex(
			current(state).appliancesIndex,
			action.payload
		),
	};
};

export const deleteAppliancesActionFullfilledReducer = (state, action) => {
	return {
		...state,
	};
};
