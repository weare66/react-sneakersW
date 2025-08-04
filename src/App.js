
import Card from './componets/Card';
import Header from './componets/Header';
import Drawer from './componets/Drawer';


const arr = [
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/img/sneakers/sn1.jpg'},
  {name: 'Мужские Кроссовки Nike Air Max 270', price: 12999, imageUrl: '/img/sneakers/sn2.jpg'},
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: '/img/sneakers/sn3.jpg'},
  {name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: '/img/sneakers/sn4.jpg'},
];

function App() {
  return (
    <div className ="wrapper clear"> 
    <Drawer/>
    <Header />

      

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кросовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
       
        
        <div className="d-flex">

          {arr.map(obj => (
            <Card
            title = {obj.name}
            price = {obj.price}
            imageUrl = {obj.imageUrl}
            onClick = {() => console.log(obj)}
            />
          ))}
          
          
          
          
          
          
          
          
          
          
          

        </div>
        

      </div>
    </div>
  );
}

export default App;
