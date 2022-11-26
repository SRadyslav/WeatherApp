import React from 'react'
import './styles.css'
import clear from '../../assets/clear.png'
import { Wind } from '../../App';

type WeatherProps = {
  temperature: number;
  description: string;
  humidity: number;
  wind: Wind;
}

export const Weather = ({temperature, description, humidity, wind}: WeatherProps) => {
  return (<>
    <div className='weather'>
      <img src={clear} alt='...' />
      <p className='temperature'> {temperature}<span>°C</span></p>
      <p className='description'> {description}</p>
    </div>
    <div className='details'>
      <div className='humidity'>
        <i className='fa-solid fa-water'/>
        <div className='text'>
          <span>{humidity}</span>
          <p>Humidity</p>
        </div>
      </div>
      <div className='wind'>
        <i className='fa-solid fa-wind'/>
        <div className='text'>
          <span>{wind.speed}km/h({wind.deg}°)</span>
          <p>Wind</p>
        </div>
      </div>
    </div>
    </>
  )
}
