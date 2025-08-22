import React from 'react';
import ContentLoader from "react-content-loader";
import 'react-loading-skeleton/dist/skeleton.css'
import styleCard from './Card.module.scss';
import AppContext from '../../context';


function Card({
  id, 
  title, 
  price, 
  imageUrl, 
  onClickFavorite, 
  onClickPluse, 
  favorited = false, 
  loading = false, 
}) {



  const {isAddedItems} = React.useContext(AppContext);
  
  //const [isAdded, setIsAdded] = React.useState(added);

  const [isFavorite, setIsFavorite] = React.useState(favorited);

 const itemObj = {id, parentId: id, title, price, imageUrl};

  const hendlerClick = () => {
    onClickPluse(itemObj);
    //setIsAdded(!isAdded);
  };

  const hendelFavorite = () => {
    onClickFavorite(itemObj);
    setIsFavorite(!isFavorite)
  };  

    return (
    <div className={styleCard.card}>

    {loading ? 
    <ContentLoader 
      speed={2}
      width={155}
      height={265}
      viewBox="0 0 155 265"
      backgroundColor="#e0e0e0"
      foregroundColor="#949494"
    >
    <rect x="0" y="0" rx="10" ry="10" width="155" height="91" /> 
    <rect x="0" y="104" rx="3" ry="3" width="155" height="15" /> 
    <rect x="0" y="130" rx="3" ry="3" width="93" height="15" /> 
    <rect x="0" y="168" rx="8" ry="8" width="80" height="25" /> 
    <rect x="120" y="162" rx="8" ry="8" width="32" height="32" />
  </ContentLoader>
  :
  <>
    {onClickFavorite &&
    <div className={styleCard.favorite} onClick={onClickFavorite}>
          <img onClick={hendelFavorite} src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="unliked" />
      </div>
    }
        
        <img height={135} width='100%' src={imageUrl} alt="" />
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            
              {onClickPluse && <img 
              className={styleCard.plus} 
              onClick={hendlerClick}   
              src={isAddedItems(id) ? '/img/button-check.svg' : '/img/buttonPlus.svg'} 
              alt="plus" />}
            
        </div>
  </>
}
      
    </div>
    );
}

export default Card;



  