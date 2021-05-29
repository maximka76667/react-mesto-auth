import React from 'react'
import Card from './Card'
import CurrentUserContext from '../contexts/CurrentUserContext'

function Cards(props) {
  
  const cards = props.cards;

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      <div className="profile">
        <div className="profile__container">
          <div className="profile__avatar" onClick={props.onEditAvatar}>
            <img
              src={currentUser.avatar}
              className="profile__avatar-image"
              alt="Аватар профиля"
            />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
            <p className="profile__description">{currentUser.about}</p>
          </div>
          <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
        </div>
      </div>
      <div className="cards">
        <div className="cards__container">
          {
            cards.map((card) => {
              return <Card key={card._id} card={card} onClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default Cards;