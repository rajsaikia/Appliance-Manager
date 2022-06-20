// eslint-disable-next-line
const { REACT_APP_MOCK_REST_URI, REACT_APP_MOCK, REACT_APP_REST_URI } =
	process.env;

const restURL =
	REACT_APP_MOCK && JSON.parse(REACT_APP_MOCK)
		? REACT_APP_MOCK_REST_URI
		: REACT_APP_REST_URI;

const fetchData = (method, type) => {
	return fetch(`${restURL}/${type}`, {
		method: method,
		headers: { 'Content-Type': 'application/json' },
	}).then(res => res.json().then(result => result));
};

export const getAppliances = () =>
	fetchData('GET', `appliances`, {
		action: 'SUBSCRIBE',
	});

export const getRooms = () => {
	return fetchData('GET', `rooms`, {
		action: 'SUBSCRIBE',
	});
};

export const addAppliances = payload =>
	fetchData('POST', `appliances`, {
		action: 'SUBSCRIBE',
		payload: payload,
	}).then(result => {
		return result;
	});

export const deleteAppliances = payload =>
	fetchData('DELETE', `appliances/${payload}`, {
		action: 'SUBSCRIBE',
		payload: payload,
	}).then(result => {
		return result;
	});
