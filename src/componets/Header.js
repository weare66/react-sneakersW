import {Link} from 'react-router-dom';
import React from 'react'
import AppContext from '../context';
import { useCart } from '../hooks/useCart';


function Header(props) {

  //console.log(cartItems.reduce((sum, obj) => sum + obj.price , 0));

  const { sumPrice} = useCart();
  
  

    return (
        <header className="d-flex justify-between align-center p-40">
       
      <Link to={'/'}>
        <div className = 'd-flex align-center'>
        <img height={40} width={40} src="/img/logo.png" alt="" />
      <div>
        <h3 className="text-uppercase">React Sneakers</h3>
        <p className="opacity-5">Магазин лучших кроссовок</p>
      </div>
      </div>
      </Link>

      <ul className="d-flex">
        <li onClick={props.onOpenCart} className="mr-30 cu-p">
          <img height={18} width={18} src="/img/cart.svg" alt="" />
          <span>{sumPrice} руб.</span></li>
        <li>
          <Link to="/favorites">
             <img className="mr-30 cu-p" src="/img/favoriteHeader.svg" alt="favIcon"/>
          </Link>
         
        </li>
        <li>      
          <Link to='/orders'>  
            <img height={18} width={18} src="/img/user.svg" alt="" />
          </Link> 
         </li> 
        

        </ul> 
      </header>
    );
}

export default Header;