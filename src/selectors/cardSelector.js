const useCardSelector = state => {
	const card = state.appliances.filter(res => res.id === state.selectedCard);
	return card[0];
};

export default useCardSelector;
