import initialState from "../initialState";
import SET_ACCOUNT from "../actions/account";

export default function account(state = initialState.account, action) {
    console.log(state);
    switch (action.type){
        case SET_ACCOUNT: return action.account;

        default: return state;
    }
}