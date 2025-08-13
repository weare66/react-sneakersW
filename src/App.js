import React from 'react';
import Home from './pages/Home';
import Favorites from "./pages/Favorites";
import Header from './componets/Header';
import Drawer from './componets/Drawer';
import axios from 'axios';
import { use, useState } from 'react';
import {Routes, Route } from "react-router-dom";
//import { render } from '@testing-library/react';



function App() {

  //массив для хранения карточек на главной
  const [items, setItems] = React.useState([]); 


  //массив для хранения товаров
  const [cartItems, setCartItems] = React.useState([]); 

  const [searchValue, setSearchValue] = React.useState('');


  const [isOpenCart, setIsOpenCard] = React.useState((false));

  const [isFavorite, setIsFavorite] = React.useState([]);

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
    

    axios.get('https://68931363c49d24bce8695195.mockapi.io/items')
    .then((res) => {setItems(res.data)});
    axios.get('https://68931363c49d24bce8695195.mockapi.io/cart')
    .then((res) => {setCartItems(res.data)});
    axios.get('https://68931363c49d24bce8695195.mockapi.io/cart')
    .then((res) => {setIsFavorite(res.data)});
  }, []);


  const onAddToCart = (obj) => {
    axios.post('https://68931363c49d24bce8695195.mockapi.io/cart', obj);
    setCartItems((perv) => [...perv, obj]);
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
      if (isFavorite.find(favObj => favObj.id == obj.id)) {
      axios.delete(`https://68931363c49d24bce8695195.mockapi.io/cart/${obj.id}`);
      //setIsFavorite((perv) => perv.filter(item => item.id != obj.id));
    } else {
      const {data} = await axios.post('https://68931363c49d24bce8695195.mockapi.io/cart', obj); 
      setIsFavorite((perv) => [...perv, data]);
    }
    } catch (error) {
      alert('Не удалось добавить в избранное!');
    }
  };
    

  
  

  
  
  return (
    <div className ="wrapper clear"> 
      
      {isOpenCart ? <Drawer items={cartItems}  
      onClose = {() => setIsOpenCard(false)} 
      onRemove = {onRemoveItem}
      /> : false}
      

       
      <Header onOpenCart = {() => setIsOpenCard(true)}/>

      <Routes>
        <Route path="/"  element = {
          <Home
          items = {items}
          searchValue= {searchValue}
          setSearchValue = {setSearchValue}
          onSearchValue = {onSearchValue}
          onAddToCart = {onAddToCart}
          onAddToFavorite = {onAddToFavorite}
        />}></Route>

        <Route path="/favorites"  element = {
          <Favorites
          items = {items}
          searchValue= {searchValue}
          setSearchValue = {setSearchValue}
          onSearchValue = {onSearchValue}
          onAddToCart = {onAddToCart}
          onAddToFavorite = {onAddToFavorite}
        />}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;