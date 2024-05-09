import initialState from "../initialState";
import { SET_ACCOUNT, SET_ACCOUNT_DATA, SET_ACCOUNT_TYPE } from "../actions/account";

export default function account(state = initialState.account, action) {
    switch (action.type) {
        case SET_ACCOUNT:
            console.log(action.account);
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

        default:
            console.log(state); 
            return state;
    }
}

function getStorageAccount(account){
    let storageAccount = account;
    storageAccount.data = JSON.stringify(storageAccount.data);
    return JSON.stringify(storageAccount);
}