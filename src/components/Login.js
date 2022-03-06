import React from 'react'
import { withRouter } from 'react-router-dom'

function Login(props) {

  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleLoginChange(e) {
    setLogin(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin({ login, password });
    setLogin('');
    setPassword('');
  }

  return (
    <div className="auth">
      <div className="auth__container">
        <h2 className="auth__title">Sign in</h2>
        <form className="auth__form" onSubmit={handleSubmit}>
          <input className="auth__input" type="text" id="loginLogin" placeholder="Login" value={login} onChange={handleLoginChange} required />
          <input className="auth__input" type="text" id="loginPassword" placeholder="Password" value={password} onChange={handlePasswordChange} required />
          <button className="auth__submit-button">Let's go</button>
        </form>
      </div>
    </div>
  )
}

export default withRouter(Login);