import React from 'react'
import './styles.css'
import { Wind } from '../../App';
import {clear,cloud,mist, rain,snow} from '../../assets'

type WeatherProps = {
  temperature: number;
  description: string;
  humidity: number;
  wind: Wind;
}

export const Weather = ({temperature = 0, description = "", humidity =0 , wind = {deg:0,speed:0}}: WeatherProps) => {
  const [img, setImg] = React.useState('') 

  React.useEffect(()=> {
    switch (description) {
      case 'Clear':
        setImg(clear)
        break;
      case 'Clouds':
        setImg(cloud)
        break;
      case 'Haze':
        setImg(mist)
        break;
      case 'Rain':
        setImg(rain)
        break;
      case 'Snow' || 'Lightning':
        setImg(snow)
        break;
      default:
        break;
    }
  },[description])

  return (<>
    <div className='weather'>
      <img src={img} alt='...' />
      <p className='temperature'> {Math.ceil(temperature)}<span>°C</span></p>
      <p className='description'> {description}</p>
    </div>
    <div className='details'>
      <div className='humidity'>
        <i className='fa-solid fa-water'/>
        <div className='text'>
          <span>{humidity}%</span>
          <p>Humidity</p>
        </div>
      </div>
      <div className='wind'>
        <i className='fa-solid fa-wind'/>
        <div className='text'>
          <span>{wind.speed}km/h</span>
          <span style={{ fontSize: "18px"}}>({wind.deg}°)</span>
          <p>Wind</p>
        </div>
      </div>
    </div>
    </>
  )
}
