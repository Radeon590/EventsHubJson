import { SET_ACCOUNT, SET_ACCOUNT_DATA, SET_ACCOUNT_TYPE, CLEAN_ACCOUNT, CREATE_USER_ACCOUNT } from "../actions/account";

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

function cleanAccount(){
    return {
        type: CLEAN_ACCOUNT
    };
}

function createUserAccount(value){
    return {
        type: CREATE_USER_ACCOUNT,
        data: value
    };
}

export { setAccount, setAccountData, setAccountType, cleanAccount, createUserAccount };