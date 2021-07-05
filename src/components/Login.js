function Login(props) {
  function handleLogin(e) {
    e.preventDefault();

    props.onLogin();
  }

  return (
    <div className="auth">
      <div className="auth__container">
        <h2 className="auth__title">Вход</h2>
        <form className="auth__form">
          <input className="auth__input" placeholder="Логин" />
          <input className="auth__input" placeholder="Пароль" />
          <button className="auth__submit-button" onClick={handleLogin}>Войти</button>
        </form>
      </div>
    </div>
  )
}

export default Login;