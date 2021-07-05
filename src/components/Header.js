import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { withRouter } from 'react-router';

function Header(props) {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="logo" rel="noreferrer" target="_blank" />
        { props.email > 0 && <p className="header__login">{props.email}</p>}
        { !props.loggedIn
          ? props.isLogin
            ? <a href="/sign-up" className="header__link">Регистрация</a>
            : <a href="/sign-in" className="header__link">Войти</a>
          : <a href="/sign-in" className="header__link">Выйти</a>
        }
        { console.log(location) }
      </div>
    </header>
  )
}

export default withRouter(Header);