
import Card from '../componets/Card';



function Home({items, searchValue, setSearchValue, onSearchValue, onAddToCart, onAddToFavorite, }) {
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

          
            {items
            .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
            <Card
            key={index}
            title = {item.name}
            price = {item.price}
            imageUrl = {item.imageUrl}
            onClickPluse = {(obj) => onAddToCart(obj)}
            onClickFavorite = {(obj) => onAddToFavorite(obj)}
            />
          ))}
          


          

        </div>
        

      </div>
    );
}

export default Home;