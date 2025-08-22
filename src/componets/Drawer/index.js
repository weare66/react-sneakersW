
import React from 'react';
import axios from "axios";

import Info from "../Info";
import { useCart } from "../../hooks/useCart";

import styles from './Drawer.module.scss' 

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({onClose, items = [], onRemove, opened} ) {
  
  const { cartItems, setCartItems, sumPrice} = useCart();
  const [isOrderComplited, setIsOrderComplited] = React.useState(false);
  const [OrderId, setOrderId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  

  

  


  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const {data} = await axios.post('./', {items: cartItems});
      setOrderId(data.id);
      setIsOrderComplited(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('/cart/' + item.id);
        await delay(1000);
      }
      
    } catch (error) {
      alert('Не удалось офрмить заказ, попробуйте ещё раз!');
    }
    setIsLoading(false);
  };

  return (
        
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : '' }`}>
            <div  className={styles.drawer}>
                <h2 className="d-flex justify-between mb-30 ">
                  Корзина <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="" />
                </h2>

        {
          items.length > 0 ? 
        <div className="d-flex flex-column flex">
          <div className="items flex">
            {
              items.map((obj) => (
              <div key={obj.id} className="cartItem d-flex align-center mb-20">
              <div style={{backgroundImage: `url(${obj.imageUrl})`}} className="cartItemImg">
              </div>
              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img onClick={()=> onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Del" />
            </div>
              ))
            }

          </div>

          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого</span>
                <div></div>
                <b>{sumPrice} руб.</b>
              </li>
              <li>
                <span>Налог 5%: </span>
                <div></div>
                <b>{sumPrice/100*5} руб.</b>
              </li>
            </ul>
            <button disabled = {isLoading} onClick={onClickOrder} className="greenButton">Оформит заказ <img src="/img/arrow.svg" alt="arrow" /></button>
          </div>

        </div> :
        <Info 
          title={isOrderComplited ? 'Заказ оформлен' : 'Корзина пустая'} 
          description =  {isOrderComplited ? `Ваш заказ #${OrderId} скоро будет передан курьерской доставке` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ'} 
          image = {isOrderComplited ? '/img/finishedOrder.svg' : "/img/boxclear.png"} />
        }
          
        



        
          

          
          


          

            </div>
        </div>

        
    );
}

export default Drawer;




{/**
  <div className="cartItem d-flex align-center mb-20">
              <div style={{backgroundImage: 'url(/img/sneakers/sn1.jpg)'}} className="cartItemImg">
              </div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="" />
            </div>

            <div className="cartItem d-flex align-center mb-20">
              <div style={{backgroundImage: 'url(/img/sneakers/sn1.jpg)'}} className="cartItemImg">
              </div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="" />
            </div>

            <div className="cartItem d-flex align-center mb-20">
              <div style={{backgroundImage: 'url(/img/sneakers/sn1.jpg)'}} className="cartItemImg">
              </div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="" />
            </div> */}