import '../Total/total.css'
import Logo from '../../assets/TamalesNancy.svg'
import { useState } from 'react'

function Total() {
  const [total, setTotal] = useState(0)
  return (
    <>
      <div className="total">
        <div className="total--container">
          <img src={Logo} alt="" />
          <div className="total--price">
            <h2>TOTAL:</h2>
            <p>$ <span className="total--price-net">{total}</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Total