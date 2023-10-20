import { useState } from 'react'
import '../Items/items.css'
import PropTypes from 'prop-types'

function Items({foods}) {
  const [cant, setCant] = useState(0)

  function reduce(){
    setCant(cant - 1)
  }
  function add(){
    setCant(cant + 1)
  }
  

  return (
    <div className="list">
      {foods.map( food => (
        <div className="list--card" key={food.name}>
        <div className='list--card-top'>
          <div className="list--card-name"><p>{food.name}</p><span>&#40;&#36;{food.price}&#41;</span></div>
          <div className="list--card-price"> <p>&#36;10</p> </div>
        </div>
        <div className='list--card-bottom'>
          <div className='list--card-buttons'>
            <div className="list--card-remove" onClick={reduce}> - </div>
            <div className="list--card-add" onClick={add}> + </div>
          </div>
          <div className="list--card-quantity"> { cant <= 0 ? 0 : cant } </div>
        </div>
      </div>
      ))}
  </div>
  )
}

export default Items

Items.propTypes = {
  foods: PropTypes.array
}