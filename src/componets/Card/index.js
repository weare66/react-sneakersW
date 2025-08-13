
import styleCard from './Card.module.scss';
import React, { useState } from 'react';



function Card({id, title, price, imageUrl, onClickFavorite, onClickPluse, favorited = false}) {
  
  const [isAdded, setIsAdded] = React.useState(false);

  const [isFavorite, setIsFavorite] = React.useState(favorited);



  const hendlerClick = () => {
    onClickPluse({title, price, imageUrl});
    setIsAdded(!isAdded);
  };

  const hendelFavorite = () => {
    onClickFavorite({id, title, price, imageUrl});
    setIsFavorite(!isFavorite)
  };  

    return (
    <div className={styleCard.card}>
        <div className={styleCard.favorite} onClick={onClickFavorite}>
          <img onClick={hendelFavorite} src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="unliked" />
        </div>  
        <img height={112} width={133} src={imageUrl} alt="" />
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            
              <img className={styleCard.plus} onClick={hendlerClick}   src={isAdded ? '/img/button-check.svg' : '/img/buttonPlus.svg'} alt="plus" />
            
        </div>
    </div>
    );
}

export default Card;