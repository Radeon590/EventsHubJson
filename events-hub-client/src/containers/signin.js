import { useRef, useState } from "react";
import { useNavigate, Navigate } from "react-router";
import { connect } from "react-redux";
import "../css/input-group.css";
import { setAccount } from "../store/actionCreators/account";
import UserSignIn from '../components/UserSignIn';
import UserSignUp from "../components/UserSignUp";

function SignIn({ account, setAccount }) {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isUser] = useState(true);

  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
  const navigate = useNavigate();

  async function signInAsUser() {
    let result = await fetch(`http://localhost:5141/api/Users/Authorize?username=${usernameInput.current.value}&password=${passwordInput.current.value}`, {
      method: "GET",
      credentials: "include"
    });
    console.log(result.status);
    console.log(result.statusText);
    if (result.status === 200) {
      let readUserResult = await fetch(`http://localhost:5141/api/Users/ReadByUsername?username=${usernameInput.current.value}`, {
        method: "GET",
        credentials: "include"
      });
      readUserResult.json().then(value => {
        setAccount({ accountType: "user", data: value });
      });
      navigate("../");
    }
  }

  if (account != null) {
    console.log("to profile");
    return (
      <Navigate to="../profile" replace={true} />
    )
  }

  if (isUser) {
    if (isSignIn) {
      return (
        <div className="input-group">
          <UserSignIn usernameInputRef={usernameInput} passwordInputRef={passwordInput} onSignIn={signInAsUser} />
          <button onClick={() => setIsSignIn(false)}>SignUp</button>
        </div>
      );
    }
    else {
      console.log("signup");
      return(
        <div className="input-group">
        <UserSignUp />
        <button onClick={() => setIsSignIn(true)}>SignIn</button>
      </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    account: state.account
  }
};

const mapDispatchToProps = {
  setAccount
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);