import React from 'react';
import Home from './pages/Home';
import Favorites from "./pages/Favorites";
import Header from './componets/Header';
import Drawer from './componets/Drawer';
import axios from 'axios';
import {Routes, Route } from "react-router-dom";
import AppContext from './context';
import Orders from './pages/Orders';
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

      try {
        setIsLoading(true);

        const [cartRes, favoriteRes, itemsRes] = await Promise.all([axios.get('https://68931363c49d24bce8695195.mockapi.io/cart'), axios.get('https://68931363c49d24bce8695195.mockapi.io/cart'), axios.get('https://68931363c49d24bce8695195.mockapi.io/items')]);
{/**
  const cartRes = await axios.get('https://68931363c49d24bce8695195.mockapi.io/cart');
        const favoriteRes = await axios.get('https://68931363c49d24bce8695195.mockapi.io/cart');
        const itemsRes = await axios.get('https://68931363c49d24bce8695195.mockapi.io/items');

  */}
        

        setIsLoading(false);

        setCartItems(cartRes.data);
        setIsFavorite(favoriteRes.data);
        setItems(itemsRes.data);
      } catch (error) {
        alert('Ошибка при запросе данных!');
        console.error(error);
      }
      

      

    }

    fetchData();
  }, []);


  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((perv) => Number(perv.parentId) === Number(obj.id));
      if (findItem) {
      setCartItems((item) => item.filter(item => Number(item.parentId) !== Number(obj.id)));
      await axios.delete(`https://68931363c49d24bce8695195.mockapi.io/cart/${findItem.id}`);
      } else {
       setCartItems((perv) => [...perv, obj]); 
      const { data } = await axios.post('https://68931363c49d24bce8695195.mockapi.io/cart', obj);
      setCartItems((perv) => perv.map(item => {
        if (item.parentId === data.parentId) {
          return {
            ...item,
            id: data.id
          };
        }
        return item;
      }));
    }
    } catch (error) {
      alert('Товар не добавился в корзину!');
      console.error(error);
    }
    
    
  };
  
  const onSearchValue = (event) => {
    //console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  const onRemoveItem = (id) => {
    try {
    //console.log(id);
    axios.delete(`https://68931363c49d24bce8695195.mockapi.io/cart/${id}`);
    setCartItems((perv) => perv.filter(item => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('Ошибка при удалении из корзины!');
      console.error(error);
    }
    
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
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };
    

  
  

  
  
  return (
    <AppContext.Provider value={{ items, cartItems, isFavorite, isAddedItems, onAddToFavorite, onAddToCart, setIsOpenCard, setCartItems }}>
      <div className ="wrapper clear"> 
      
      <div>
        <Drawer 
      items={cartItems}  
      onClose = {() => setIsOpenCard(false)} 
      onRemove = {onRemoveItem}
      opened = {isOpenCart}
      />
      </div>
  
      

       
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

        <Route path="/orders"  element = {
          <Orders
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