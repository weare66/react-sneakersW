import Card from "../componets/Card";
import React from "react";
import AppContext from "../context";




function Favorites({ isLoading}) {

  const {isFavorite, onAddToFavorite} = React.useContext(AppContext);
  

    return (
        <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Мои закладки</h1>
        </div>
       
        
        <div className="d-flex flex-wrap">
          {(isLoading ? [...Array(8)] : isFavorite)
            .map((item, index) => (
            <Card
            key={index}
           // title = {item.name}
           // price = {item.price}
           // imageUrl = {item.imageUrl}
           // id={item.id}
            favorited = {true}
            onFavorite = {onAddToFavorite}
            loading={isLoading}
            {...item}
            />
          ))}
        </div>
        

      </div>
    );
}

export default Favorites;