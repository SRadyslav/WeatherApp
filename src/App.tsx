import React from 'react'
import { Search } from './Components/Search'
import './styles.css'
import { Weather } from './Components/Weather'
import { NotFound } from './Components/NotFound';

type NeededData = {
  cod: number;
  message?: string;
  weather?: [{main:string}];
  main?: {humidity:number, temp: number};
  wind?: Wind;
}

type Data = {
  coord?: {};
  base?: string;
  visibility?: number;
  clouds?: {all: number};
  dt?: number;
  sys?:{};
  timezone?: number;
  id?: number;
  name?: string;
} & NeededData;

export type Wind = {
  speed: number;
  deg: number;
}

function App() {
  const [error, setError] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [wetherData, setWetherData] = React.useState<NeededData>()
  

  const onSearch = async(location: string) => {
    const apiKey = '185dbcc57e27f9315a49d3f1c762ebd7'
    setOpen(false)
    setError(false)
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`)
    const data: Data = await res.json()
    switch (Number(data.cod)) {
      case 404: 
        setError(true)
        setMessage(data.message!)
        break
      case 401:
        setError(true)
        setMessage('Something Happens')
        break;
      default:
        setWetherData({cod: data.cod, main: data.main, weather: data.weather, wind: data.wind})
        setOpen(true)
        break
    }
}

  return (
    <div className="container" style={error ? {'height': 400} : (open ? {'height': 600} : {'height': 105})}>
      <Search onSearch={onSearch} onInputFocus={()=> {setOpen(false); setError(false) }} />
      {error && <NotFound text={message} />}
      {open && <Weather temperature={wetherData?.main?.temp!} description={wetherData!.weather?.[0].main!} humidity={wetherData?.main?.humidity!} wind= {wetherData?.wind!} />}
    </div>
  )
}

export default App
