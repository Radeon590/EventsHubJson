import initialState from "../initialState";
import { SET_ACCOUNT, SET_ACCOUNT_DATA, SET_ACCOUNT_TYPE, CLEAN_ACCOUNT } from "../actions/account";

export default function account(state = initialState.account, action) {
    console.log("account reducer");
    switch (action.type) {
        case SET_ACCOUNT:
            localStorage.setItem("account", getStorageAccount(action.account));
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
            localStorage.setItem("account", getStorageAccount(state));
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
            localStorage.setItem("account", getStorageAccount(state));
            return state;
        case CLEAN_ACCOUNT:
            console.log("clean");
            localStorage.setItem("account", null);
            return null;

        default:
            return state;
    }
}

function getStorageAccount(account){
    return JSON.stringify(account);
}