
import React from 'react';
import Card from '../componets/Card';
import AppContext from '../context';


function Home({cartItems, 
  items, 
  searchValue, 
  setSearchValue, 
  onSearchValue, 
  onAddToCart, 
  onAddToFavorite,
  isLoading
}) {

  

  const renderItems = () => {
    const filtredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
    
    return (isLoading ? [...Array(8)] : filtredItems)
            .map((item, index) => (
            <Card
            key={index}
            //title = {item.name}
            //price = {item.price}
            //imageUrl = {item.imageUrl}
            //id={item.id}
            onClickPluse = {(obj) => onAddToCart(obj)}
            onClickFavorite = {(obj) => onAddToFavorite(obj)}
            
            loading={isLoading}
            {...item}
            />
          ));
  };
    

    return (
        <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Поиск по: "${searchValue}" `: 'Все кросовки'}</h1>
          <div className="search-block d-flex">
            {searchValue ? <img onClick={() => setSearchValue('')} className="delSearch cu-p" src="/img/btn-remove.svg" alt="Clear" /> : false}
            <img src="/img/search.svg" alt="Search" />
            <input onChange={onSearchValue} type="text" value={searchValue} placeholder="Поиск..." />
          </div>
        </div>
       
      
        <div className="d-flex flex-wrap">

          
            {renderItems()}
          


          

        </div>
        

      </div>
    );
}

export default Home;