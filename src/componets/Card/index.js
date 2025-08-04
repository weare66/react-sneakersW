
import styleCard from './Card.module.scss';




function Card(props) {
   
    
    return (
    <div className={styleCard.card}>
        <div className={styleCard.favorite}>
          <img src="/img/heart-unliked.svg" alt="unliked" />
        </div>  
        <img height={112} width={133} src={props.imageUrl} alt="" />
        <h5>{props.title}</h5>
        <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{props.price} руб.</b>
            </div>
            <button className="button" onClick={props.onClick}>
              <img width={32} height={32} src="/img/buttonPlus.svg" alt="plus" />
            </button>
        </div>
    </div>
    );
}

export default Card;


