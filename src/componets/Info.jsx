import React from 'react'
import AppContext from '../context';

export const Info = ({title, image, description}) => {

  const {setIsOpenCard} = React.useContext(AppContext);
  

  return (
  <div className="cartEmpty d-flex align-center justify-center flex-column flex">
    <img className="mb-20" src={image} alt="BoxClear"/>
    <h2>{title}</h2>
    <p className="opacity-6">{description}</p>
    <button onClick={() => setIsOpenCard(false)} className="greenButton">
      <img src="/img/arrow.svg" alt="arrow" /> Вернуться назад 
    </button>
  </div>
  )
}

export default Info;