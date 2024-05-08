import getStateFromCookies from 'redux-cookies-middleware';

let initialState = {
	value_1: false,
	value_2: false,
	user: null
};

const paths = {
	value_1: { name: 'value_1' },
	value_2: { name: 'value_2' },
	user: {name: 'signed_user'}
}

initialState = getStateFromCookies(initialState, paths);

if (initialState.value_1 === undefined){
	initialState.value_1 = false;
}
if (initialState.value_2 === undefined){
	initialState.value_2 = false;
}

console.log(initialState.value_1);

export default initialState;

export { initialState, paths };