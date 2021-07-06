import React from 'react'
import { withRouter } from 'react-router-dom'
import auth from '../utils/auth'

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

    auth.login({login, password})
    .then((data) => {
      if(data.token) {
        setLogin('');
        setPassword('');
        props.onLogin(data.token);
      }
    })
    .catch(err => props.onError(err));
  }

  return (
    <div className="auth">
      <div className="auth__container">
        <h2 className="auth__title">Вход</h2>
        <form className="auth__form" onSubmit={handleSubmit}>
          <input className="auth__input" placeholder="Логин" onChange={handleLoginChange} />
          <input className="auth__input" placeholder="Пароль" onChange={handlePasswordChange} />
          <button className="auth__submit-button">Войти</button>
        </form>
      </div>
    </div>
  )
}

export default withRouter(Login);