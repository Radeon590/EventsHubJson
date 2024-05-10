import "../css/input-group.css";

export default function UserSignIn({ usernameInputRef, passwordInputRef, onSignIn }){
    return(
        <div className="input-group">
          <h1>Sign In as user</h1>
          <input type="text" placeholder="username" ref={usernameInputRef}/>
          <input type="password" placeholder="password" ref={passwordInputRef}/>
          <button onClick={onSignIn}>Sign in</button>
        </div>  
      );
}