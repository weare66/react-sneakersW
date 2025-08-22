import Card from "../componets/Card";
import React from "react";
import AppContext from "../context";
import axios from "axios";




function Orders({ isLoading}) {
  //здесь должны быть заказы нужно создать хранилище для заказов
  const [orders, setrOrders] = React.useState([]);
  //const [isLoading, setIsLoading] = React.useState(true);
  const {cartItems, onAddToCart, onAddToFavorite} = React.useContext(AppContext);

{/**
  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://68931363c49d24bce8695195.mockapi.io/cart');
      //setrOrders(data);
      //console.log(data.map((obj) => obj.items).flat());
      //console.log(data.reduce((perv, obj) =>[...perv, ...obj.items], []));
      setrOrders(data.reduce((perv, obj) =>[...perv, ...obj.items], []));
      setIsLoading(false);
      } catch (error) {
        alert('Ваши заказы не отобразились, произошла ошибка!');
        console.error(error);
      }
    })();
  }, []);
  */}
  


  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои заказы</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : cartItems)
          .map((item, index) => (
          <Card
            key={index}
            loading={isLoading}
            {...item}
          />
        ))}
      </div>
        

    </div>
    );
}

export default Orders;