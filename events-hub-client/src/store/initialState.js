const initialState = {
	value_1: false,
	value_2: false,
	account: JSON.parse(localStorage.getItem('account'))
};

console.log(initialState.account);

export default initialState;