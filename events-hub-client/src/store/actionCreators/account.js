import SET_ACCOUNT from "../actions/account";

function set_account(value){
    return {
            type: SET_ACCOUNT,
		    account: value
    };
}

export default set_account;