import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function Register(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister({ email, password });
    setEmail('');
    setPassword('');
  }

  return (
    <div className="auth">
      <div className="auth__container">
        <h2 className="auth__title">Registration</h2>
        <form className="auth__form" onSubmit={handleSubmit}>
          <input className="auth__input" type="text" id="registerEmail" placeholder="Email" value={email} onChange={handleChangeEmail} required />
          <input className="auth__input" type="text" id="registerPassword" placeholder="Password" value={password} onChange={handleChangePassword} required />
          <button className="auth__submit-button">Register</button>
        </form>
        <Link to="/sign-in" className="auth__login-link">Already registered? Sign in</Link>
      </div>
    </div>
  )
}

export default withRouter(Register);