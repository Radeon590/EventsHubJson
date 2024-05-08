//import getCookies from "../utils/cookies/getCookies";

//const cookies = getCookies();

const initialState = {
	value_1: false,
	value_2: false,
	account: localStorage.getItem('account')
};

console.log(initialState.account);

export default initialState;