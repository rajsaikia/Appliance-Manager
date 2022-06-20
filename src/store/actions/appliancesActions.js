import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	getAppliances,
	getRooms,
	addAppliances,
	deleteAppliances,
} from 'services/restApi';
import {
	GET_APPLIANCES,
	CHANGE_APPLIANCES,
	CHANGE_ROOM,
	EDIT_APPLIANCES,
	ADD_APPLIANCES,
	DELETE_APPLIANCES,
	GET_ROOMS,
} from 'store/action-types';

export const getAppliancesAction = createAsyncThunk(
	GET_APPLIANCES,
	async thunkAPI => {
		const response = await getAppliances();
		return response;
	}
);

export const getRoomsAction = createAsyncThunk(GET_ROOMS, async thunkAPI => {
	const response = await getRooms();
	return response;
});

export const changeAppliancesAction = createAsyncThunk(
	CHANGE_APPLIANCES,
	(payload, thunkAPI) => {
		const response = payload;
		return response;
	}
);

export const changeRoomsAction = createAsyncThunk(
	CHANGE_ROOM,
	(payload, thunkAPI) => {
		const response = payload;
		return response;
	}
);

export const editAppliancesAction = createAsyncThunk(
	EDIT_APPLIANCES,
	(payload, thunkAPI) => {
		const response = payload;
		return response;
	}
);

export const addAppliancesAction = createAsyncThunk(
	ADD_APPLIANCES,
	async (payload, thunkAPI) => {
		const response = await addAppliances(payload);
		return response;
	}
);

export const deleteAppliancesAction = createAsyncThunk(
	DELETE_APPLIANCES,
	async (payload, thunkAPI) => {
		const response = await deleteAppliances(payload);
		return response;
	}
);
