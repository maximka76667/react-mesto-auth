import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import ImagePopup from './ImagePopup'
import api from '../utils/api'
import CurrentUserContext from '../contexts/CurrentUserContext'
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import RemovePopup from './RemovePopup';
import InfoTooltip from './InfoTooltip'
import { Route, Switch, withRouter } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import ProtectedRoute from './ProtectedRoute'
import auth from '../utils/auth'

function App(props) {

  const [currentUser, setCurrentUser] = React.useState({});

  // isOpen
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isRemovePopupOpen, setIsRemovePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);

  // isLoading
  const [isEditProfilePopupLoading, setIsEditProfilePopupLoading] = React.useState(false);
  const [isAddPlacePopupLoading, setIsAddPlacePopupLoading] = React.useState(false);
  const [isEditAvatarPopupLoading, setIsEditAvatarPopupLoading] = React.useState(false);
  const [isRemovePopupLoading, setIsRemovePopupLoading] = React.useState(false);

  const [cards, setCards] = React.useState([]);

  const [selectedCard, setSelectedCard] = React.useState(null);

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [loginResult, setLoginResult] = React.useState(false);
  const [email, setEmail] = React.useState('');

  React.useEffect(() => {
    api.getInitialCards()
    .then((result) => {
      setCards(result)
    })
    .catch((err) => console.log(err))
  }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => console.log(err))
  }

  function handleCardDelete(card) {
    setIsRemovePopupLoading(true);
    api.removeCard(card._id).then(() => {
      setCards((cardList) => {
        return cardList.filter((newCard) => newCard._id !== card._id)
      })
      closeAllPopups();
    })
    .catch((err) => console.log(err))
    .finally(() => setIsRemovePopupLoading(false))
  }

  function handleRemovePopupClick(card) {
    setIsRemovePopupOpen(true);
    setSelectedCard(card);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsRemovePopupOpen(false);
    setIsImagePopupOpen(false);
    setIsInfoTooltipOpen(false);
    setSelectedCard(null);
  }

  function handleUpdateUser(data) {
    setIsEditProfilePopupLoading(true);
    api.setProfileInfo(data).then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      setIsEditProfilePopupLoading(false);
    })
  }

  function handleUpdateAvatar({avatar}) {
    setIsEditAvatarPopupLoading(true);
    api.changeAvatar(avatar).then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setIsEditAvatarPopupLoading(false);
    })
  }

  function handleAddPlace(data) {
    setIsAddPlacePopupLoading(true);
    api.addPlace({
      name: data.name,
      link: data.link
    }).then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      setIsAddPlacePopupLoading(false);
    })
  }

  function handleLogin(token) {
    auth.getEmail(token)
    .then((res) => {
      localStorage.setItem('token', token);
      setLoggedIn(true);
      setLoginResult(true);
      setIsInfoTooltipOpen(true);
      setEmail(res.data.email);
      props.history.push('/');
    })
    .catch((err) => console.log(err))
  }

  function handleLogout() {
    setLoggedIn(false);
    localStorage.removeItem('token');
  }

  function handleRegister() {
    setLoginResult(true);
    setIsInfoTooltipOpen(true);
    props.history.push('/sign-in');
  }
  
  function handleError(error) {
    setLoginResult(false);
    setIsInfoTooltipOpen(true);
    console.log(error);
  }

  function handleKeyDown(e) {
    if(e.keyCode === 27) {
      closeAllPopups();
    }
  }

  function handleTokenCheck() {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      handleLogin(token);
    }
  }

  React.useEffect(() => {
    handleTokenCheck();
  }, [])

  React.useEffect(() => {
    api.getProfileInfo()
    .then((data) => {
      setCurrentUser(data)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page" tabIndex="0" onKeyDown={isRemovePopupOpen || isEditAvatarPopupOpen || isEditProfilePopupOpen || isImagePopupOpen || isAddPlacePopupOpen ? handleKeyDown : null }>
        <div className="page__content">
            <Route path="/">
              <Header onLogout={handleLogout} email={email} />
            </Route>
            <Switch>
              <Route path="/sign-up">
                <Register onRegister={handleRegister} onError={handleError} />
              </Route>
              <Route path="/sign-in">
                <Login onLogin={handleLogin} onError={handleError} />
              </Route>
              <ProtectedRoute component={Main} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} cards={cards} onCardLike={handleCardLike} onCardDelete={handleRemovePopupClick} loggedIn={loggedIn} />
            </Switch>
            <Route exact path="/">
              <Footer />
            </Route>
            <Route path="/">
              <InfoTooltip isOpen={isInfoTooltipOpen} onClose={closeAllPopups} result={loginResult} />
            </Route>
          <EditProfilePopup isOpen={isEditProfilePopupOpen} isLoading={isEditProfilePopupLoading} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
          <AddPlacePopup isOpen={isAddPlacePopupOpen} isLoading={isAddPlacePopupLoading} onClose={closeAllPopups} onAddPlace={handleAddPlace} />
          <ImagePopup isOpen={isImagePopupOpen} card={selectedCard} onClose={closeAllPopups} />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} isLoading={isEditAvatarPopupLoading} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
          <RemovePopup card={selectedCard} onClose={closeAllPopups} isOpen={isRemovePopupOpen} isLoading={isRemovePopupLoading} onCardDelete={handleCardDelete} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
