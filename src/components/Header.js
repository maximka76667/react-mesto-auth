import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Header(props) {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="logo" rel="noreferrer" target="_blank" />
        { (() => {
          switch (location.pathname) {
            case '/sign-in':
              return <Link to="/sign-up" className="header__link">Регистрация</Link>

            case '/sign-up':
              return <Link to="/sign-in" className="header__link">Войти</Link>

            case '/':
              return (<>
                <p className="header__login">{props.email}</p>
                <Link to="/sign-in" className="header__link header__link_logged-in" onClick={props.onLogout}>Выйти</Link>
              </>)
            }
          })()
        }
      </div>
    </header>
  )
}

export default Header;