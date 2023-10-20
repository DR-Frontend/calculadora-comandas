import Clear from "./components/Clear/Clear"
import Items from "./components/Items/Items"
import Total from "./components/Total/Total"
import { Menus } from "./mocks/Menus"

function App() {
  return (
    <>
      <header>
        <Total/>
      </header>
      <main>
        <Clear/>
        <div className="foodList">
          <Items foods={Menus}/>
        </div>
      </main>
    </>
  )
}

export default App
