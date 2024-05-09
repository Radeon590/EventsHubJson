import { SET_ACCOUNT, SET_ACCOUNT_DATA, SET_ACCOUNT_TYPE } from "../actions/account";

function setAccount(value){
    return {
        type: SET_ACCOUNT,
        account: value
    };
}

function setAccountData(value){
    return {
            type: SET_ACCOUNT_DATA,
		    data: value
    };
}

function setAccountType(value){
    return {
        type: SET_ACCOUNT_TYPE,
        accountType: value
    }
}

export { setAccount, setAccountData, setAccountType };