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
        { (() => {
          switch (location.pathname) {
            case '/sign-in':
              return <Link to="/sign-up" className="header__link">Регистрация</Link>

            case '/sign-up':
              return <Link to="/sign-in" className="header__link">Войти</Link>

            case '/':
              return <Link to="/sign-in" className="header__link">Выйти</Link>
            }
          })()
        }
        { console.log(location.pathname) }
      </div>
    </header>
  )
}

export default Header;