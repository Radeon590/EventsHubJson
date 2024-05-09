import initialState from "../initialState";
import { SET_ACCOUNT, SET_ACCOUNT_DATA, SET_ACCOUNT_TYPE } from "../actions/account";

export default function account(state = initialState.account, action) {
    switch (action.type) {
        case SET_ACCOUNT:
            console.log(action.account);
            localStorage.setItem("account", action.account);
            return action.account;
        case SET_ACCOUNT_DATA:
            if (state === null) {
                state = {
                    data: action.data,
                    accountType: null
                }
            }
            else {
                state.data = action.data;
            }
            localStorage.setItem("account", action.account);
            return state;
        case SET_ACCOUNT_TYPE:
            if (state === null) {
                state = {
                    data: null,
                    accountType: action.accountType
                }
            }
            else{
                state.accountType = action.accountType;
            }
            localStorage.setItem("account", action.account);
            return state;

        default:
            console.log(state); 
            return state;
    }
}