import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import Card from './Card.js';

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">

      <section className="profile">

        <div className="profile__info">
          <div className="profile__parent-avatar">
            <img onClick={props.onEditAvatar} className="profile__avatar" src={currentUser?.avatar}
              alt="Жак Ив Кусто" />
          </div>
          <h1 className="profile__heading">{currentUser?.name}</h1>
          <p className="profile__about">{currentUser?.about}</p>
          <button onClick={props.onEditProfile} className="profile__edit-button" type="button"
            aria-label="edit"></button>
        </div>

        <button onClick={props.onAddPlace} className="profile__add-button" type="button"
          aria-label="addButton"></button>

      </section>

      <section className="elements-wrapper">
        <ul className="elements">
          {props.cards.map((card) => (<Card onCardDelete={props.onCardDelete} onCardLike={props.onCardLike}
            data={card} onCardClick={props.onCardClick} />))}
        </ul>
      </section>
    </main>
  );

};

export default Main;
