import React, { useState } from 'react';
import Card from './componets/Card';
import Header from './componets/Header';
import Drawer from './componets/Drawer';
import { render } from '@testing-library/react';



function App() {

  //массив для хранения карточек на главной
  const [items, setItems] = React.useState([]); 


  //массив для хранения товаров
  const [cartItems, setCartItems] = React.useState([]); 


  const [isOpenCart, setIsOpenCard] = React.useState((false));

  React.useEffect(() => {
    fetch('https://68931363c49d24bce8695195.mockapi.io/items')
    .then((obj) => {
      return obj.json();
    })
    .then((json) => {
      setItems(json);
    })
  }, []);


  const onAddToCart = (obj) => {
    setCartItems((perv) => [...perv, obj]);
  };
  
  
  

  
  
  return (
    <div className ="wrapper clear"> 
      
      {isOpenCart ? <Drawer items={cartItems} onClose = {() => setIsOpenCard(false)}/> : false}
      

       
      <Header onOpenCart = {() => setIsOpenCard(true)}/>

      

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кросовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
       
        
        <div className="d-flex flex-wrap">

          
            {items.map((item) => (
            <Card
            title = {item.name}
            price = {item.price}
            imageUrl = {item.imageUrl}
            onClickPluse = {(obj) => onAddToCart(obj)}
            onClickFavorite = {() => console.log('В избранное')}
            />
          ))}
          

          
          
          
          
          
          
          
          
          
          
          
          

        </div>
        

      </div>
    </div>
  );
}

export default App;



 {/** { isOpenCard ? <Drawer onClose = {() => {setisOpenCard(false)}}/> : null}
    
    <Header onClicCart = {() => {setisOpenCard(true)}} />*/}
    