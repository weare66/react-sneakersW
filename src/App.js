import React from 'react';
import Home from './pages/Home';
import Favorites from "./pages/Favorites";
import Header from './componets/Header';
import Drawer from './componets/Drawer';
import axios from 'axios';
import { use, useState } from 'react';
import {Routes, Route } from "react-router-dom";
import AppContext from './context';
//import { render } from '@testing-library/react';

//export const AppContext = React.createContext({});


function App() {

  //массив для хранения карточек на главной
  const [items, setItems] = React.useState([]); 


  //массив для хранения товаров
  const [cartItems, setCartItems] = React.useState([]); 

  // для поиска
  const [searchValue, setSearchValue] = React.useState('');

  // для открытия корзины
  const [isOpenCart, setIsOpenCard] = React.useState(false);

  // для хранения избранного
  const [isFavorite, setIsFavorite] = React.useState([]);

  //т.е. начальное состояние -- это загрузка
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    {/**
      fetch('https://68931363c49d24bce8695195.mockapi.io/items')
    .then((obj) => {
      return obj.json();
    })
    .then((json) => {
      setItems(json);
    })
       */}
    
    {/**
      axios.get('https://68931363c49d24bce8695195.mockapi.io/items')
    .then((res) => {setItems(res.data)});
    axios.get('https://68931363c49d24bce8695195.mockapi.io/cart')
    .then((res) => {setCartItems(res.data)});
    axios.get('https://68931363c49d24bce8695195.mockapi.io/cart')
    .then((res) => {setIsFavorite(res.data)});
      */}
 {/**очерёдность вызововов */}
    async function fetchData() {
      setIsLoading(true);
      const cartRes = await axios.get('https://68931363c49d24bce8695195.mockapi.io/cart');
      const favoriteRes = await axios.get('https://68931363c49d24bce8695195.mockapi.io/cart');
      const itemsRes = await axios.get('https://68931363c49d24bce8695195.mockapi.io/items');


      setIsLoading(false);

      setCartItems(cartRes.data);
      setIsFavorite(favoriteRes.data);
      setItems(itemsRes.data);

      

    }

    fetchData();
  }, []);


  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((perv) => Number(perv.id) === Number(obj.id))) {
      setCartItems((item) => item.filter(item => Number(item.id) !== Number(obj.id)));
      axios.delete(`https://68931363c49d24bce8695195.mockapi.io/cart/${obj.id}`);
      } else {
      axios.post('https://68931363c49d24bce8695195.mockapi.io/cart', obj);
      setCartItems((perv) => [...perv, obj]);
      }
    } catch (error) {
      alert('Товар не добавился в корзину!');
    }
    
    
  };
  
  const onSearchValue = (event) => {
    //console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  const onRemoveItem = (id) => {
    
    //console.log(id);
    axios.delete(`https://68931363c49d24bce8695195.mockapi.io/cart/${id}`);
    setCartItems((perv) => perv.filter(item => item.id !== id));
  };


  const onAddToFavorite = async (obj) => {
    try {
      if (isFavorite.find(favObj => Number(favObj.id) == Number(obj.id))) {
      axios.delete(`https://68931363c49d24bce8695195.mockapi.io/cart/${obj.id}`);
      setIsFavorite((perv) => perv.filter(item => Number(item.id) != Number(obj.id)));
    } else {
      const {data} = await axios.post('https://68931363c49d24bce8695195.mockapi.io/cart', obj); 
      setIsFavorite((perv) => [...perv, data]);
    }
    } catch (error) {
      alert('Не удалось добавить в избранное!');
    }
  };
  
  const isAddedItems = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };
    

  
  

  
  
  return (
    <AppContext.Provider value={{ items, cartItems, isFavorite, isAddedItems, onAddToFavorite, setIsOpenCard, setCartItems }}>
      <div className ="wrapper clear"> 
      
      {isOpenCart ? <Drawer 
      items={cartItems}  
      onClose = {() => setIsOpenCard(false)} 
      onRemove = {onRemoveItem}
      /> : false}
      

       
      <Header onOpenCart = {() => setIsOpenCard(true)}/>

      <Routes>
        <Route path="/"  element = {
          <Home
          cartItems = {cartItems}
          items = {items}
          searchValue= {searchValue}
          setSearchValue = {setSearchValue}
          onSearchValue = {onSearchValue}
          onAddToCart = {onAddToCart}
          onAddToFavorite = {onAddToFavorite}
          isLoading = {isLoading}
        />}></Route>

        <Route path="/favorites"  element = {
          <Favorites
          //////items = {items}(context)
          //searchValue= {searchValue}
          //setSearchValue = {setSearchValue}
          //onSearchValue = {onSearchValue}
          //onAddToCart = {onAddToCart}
          isLoading = {isLoading}
        />}></Route>


      </Routes>
      
      
    </div>

    </AppContext.Provider>
  );
}

export default App;