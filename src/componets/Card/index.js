
import styleCard from './Card.module.scss';
import React from 'react';



function Card({title, price, imageUrl, onClickFavorite, onClickPluse}) {
  
  const [isAdded, setIsAdded] = React.useState(false);

  const hendlerClick = () => {
    onClickPluse({title, price, imageUrl});
    setIsAdded(!isAdded);
  };

    return (
    <div className={styleCard.card}>
        <div className={styleCard.favorite} onClick={onClickFavorite}>
          <img src="/img/heart-unliked.svg" alt="unliked" />
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


