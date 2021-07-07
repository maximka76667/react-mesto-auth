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
    props.onLogin({login, password});
    setLogin('');
    setPassword('');
  }

  return (
    <div className="auth">
      <div className="auth__container">
        <h2 className="auth__title">Вход</h2>
        <form className="auth__form" onSubmit={handleSubmit}>
          <input className="auth__input" placeholder="Логин" value={login} onChange={handleLoginChange} />
          <input className="auth__input" placeholder="Пароль" value={password} onChange={handlePasswordChange} />
          <button className="auth__submit-button">Войти</button>
        </form>
      </div>
    </div>
  )
}

export default withRouter(Login);