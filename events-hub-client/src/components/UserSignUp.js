import "../css/input-group.css";
import { createUserAccount } from "../store/actionCreators/account";
import { connect } from "react-redux";
import { useRef } from "react";

function UserSignUp({ onSignUp, createUserAccount }) {
    const usernameInput = useRef(null);
    const useremailInput = useRef(null);
    const passwordInput = useRef(null);
    const firstnameInput = useRef(null);
    const secondnameInput = useRef(null);
    const patronymicInput = useRef(null);
    const ageInput = useRef(null);

    function handleSignUp() {
        const userData = {
            username: usernameInput.current.value,
            useremail: useremailInput.current.value,
            password: passwordInput.current.value,
            firstname: firstnameInput.current.value,
            secondname: secondnameInput.current.value,
            patronymic: patronymicInput.current.value,
            age: ageInput.current.value
        }
        createUserAccount(userData);
        onSignUp();
    }

    return (
        <div className="input-group">
            <h1>Sign Up as user</h1>
            <input type="text" placeholder="username" ref={usernameInput} />
            <input type="email" placeholder="useremail" ref={useremailInput} />
            <input type="password" placeholder="password" ref={passwordInput} />
            <input type="text" placeholder="firstname" ref={firstnameInput} />
            <input type="text" placeholder="secondname" ref={secondnameInput} />
            <input type="text" placeholder="patronymic" ref={patronymicInput} />
            <input type="number" placeholder="age" ref={ageInput} />
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = {
    createUserAccount
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSignUp);