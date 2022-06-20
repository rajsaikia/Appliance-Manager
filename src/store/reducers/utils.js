import { cloneDeep } from 'lodash';

export const filterRooms = rooms => {
	return rooms.filter(res => res.name);
};

export const updateAppliances = (appliances, source) => {
	const newUpdateAppliances = cloneDeep(appliances);
	const orderAt = newUpdateAppliances.findIndex(o => o.id === source.id);
	const app = newUpdateAppliances.filter(res => res.id === source.id);
	const keynames = Object.keys(source);
	app[0].nickname = source.nickname;
	app[0].properties.map(res =>
		keynames.includes(res.name) ? (res.value = source[res.name]) : null
	);
	newUpdateAppliances[orderAt] = app[0];
	return newUpdateAppliances;
};

export const addNewAppliances = (appliances, payload) => {
	const newUpdateAppliances = cloneDeep(appliances);
	const data = {
		...payload,
		...{
			type: 'New Appliances',
			nickname: 'NA',
			properties: [
				{
					name: 'power',
					type: 'toggle',
					value: true,
				},
			],
		},
	};
	newUpdateAppliances.push(data);
	return newUpdateAppliances;
};

export const addAppliancesToRoom = (rooms, selectedRoom, payload) => {
	const newUpdateRooms = cloneDeep(rooms);
	newUpdateRooms
		.filter(res => res.id === selectedRoom)[0]
		.applianceIds.push(payload.id);
	return newUpdateRooms;
};
export const AddAppliancesIndex = (appliancesIndex, payload) => {
	const newUpdateRooms = cloneDeep(appliancesIndex);
	newUpdateRooms.push(payload.id);
	return newUpdateRooms;
};
