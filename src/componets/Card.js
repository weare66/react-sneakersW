function Card() {
    return (
    <div className="card">
        <div className="favorite">
          <img src="/img/heart-unliked.svg" alt="unliked" />
        </div>  
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
    );
}

export default Card;


