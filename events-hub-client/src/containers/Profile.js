import { connect } from "react-redux";
import { Navigate } from "react-router";

function Profile({ account }){

    if (account != null){
        if (account.accountType === "user"){
            return (
                <div>
                    User profile
                </div>
            );
        }
        else {
            return (
                <div>
                    Organization profile
                </div>
            );
        }
    }
    else {
        return (
            <Navigate to={"../signin"} replace={true}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        account: state.account
    }
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);