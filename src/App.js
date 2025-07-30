
function App() {
  return (
    <div className ="wrapper clear"> 
      <header className="d-flex justify-between align-center p-40">
        <div className = 'd-flex align-center'>
        <img height={40} width={40} src="/img/logo.png" alt="" />
      <div>
        <h3 className="text-uppercase">React Sneakers</h3>
        <p className="opacity-5">Магазин лучших кроссовок</p>
      </div>
      </div>
      
      <ul className="d-flex">
        <li className="mr-30">
          <img height={18} width={18} src="/img/cart.svg" alt="" />
          <span>1205 руб.</span></li>
        <li>
          <img height={18} width={18} src="/img/user.svg" alt="" />


        </li> 

        </ul> 
      </header>

      <div className="content p-40">
        <h1 className="mb-40">Все кросовки</h1>
        
        <div className="d-flex">
          
          <div className="card">
          <img height={112} width={133} src="/img/sneakers/sn1.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={32} height={32} src="/img/buttonPlus.svg" alt="plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img height={112} width={133} src="/img/sneakers/sn1.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={32} height={32} src="/img/buttonPlus.svg" alt="plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img height={112} width={133} src="/img/sneakers/sn1.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={32} height={32} src="/img/buttonPlus.svg" alt="plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img height={112} width={133} src="/img/sneakers/sn1.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={32} height={32} src="/img/buttonPlus.svg" alt="plus" />
            </button>
          </div>
        </div>



        </div>
        

      </div>
    </div>
  );
}

export default App;
