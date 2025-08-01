
import Card from './componets/Card';
import Header from './componets/Header';
import Drawer from './componets/Drawer';


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
          
         <Card />


        



        </div>
        

      </div>
    </div>
  );
}

export default App;
