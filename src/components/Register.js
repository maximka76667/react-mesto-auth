import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import auth from '../utils/auth'

function Register(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
      auth.register({email, password})
      .then((res) => {
        if(res) {
          console.log(res);
          props.history.push('/');
        }
      })
  }

  return (
    <div className="auth">
      <div className="auth__container">
        <h2 className="auth__title">Регистрация</h2>
        <form className="auth__form" onSubmit={handleSubmit}>
          <input className="auth__input" placeholder="Логин" onChange={handleChangeEmail} />
          <input className="auth__input" placeholder="Пароль" onChange={handleChangePassword} />
          <button className="auth__submit-button">Зарегистрироваться</button>
        </form>
        <Link to="/sign-in" className="auth__login-link">Уже зарегистрированы? Войти</Link>
      </div>
    </div>
  )
}

export default withRouter(Register);