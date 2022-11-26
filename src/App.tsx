import { Search } from './Components/Search'
import './styles.css'
import { Weather } from './Components/Weather'
import { NotFound } from './Components/NotFound';

export type Wind = {
  speed: number;
  deg: number;
}

function App() {
  const speed = 1
  const deg = 1

  return (
    <div className="container">
      <Search />
      <NotFound />
      <Weather temperature={24} description='Clear Sky' humidity={22} wind= {{speed, deg}} />
    </div>
  )
}

export default App
