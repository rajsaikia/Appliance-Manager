const useAppliancesSelector = state => {
	return state?.appliances?.filter(res =>
		state?.appliancesIndex?.includes(res.id)
	);
};

export default useAppliancesSelector;
