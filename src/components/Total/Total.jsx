import '../Total/total.css'
import Logo from '../../assets/TamalesNancy.svg'

function Total() {
  return (
    <>
      <div className="total">
        <div className="total--container">
          <img src={Logo} alt="" />
          <div className="total--price">
            <h2>TOTAL:</h2>
            <p>$ <span className="total--price-net">0000.00</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Total