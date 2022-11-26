import React from 'react'
import "./styles.css"

type SearchProps = {
    onSearch: (location:string) => void
    onInputFocus: () => void
}

export const Search = ({onSearch, onInputFocus}: SearchProps) => {
const [location, setLocation] = React.useState('')

const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.code === "Enter" && onSearch(location)
}
return (
    <div className="search">
        <i className="fa-solid fa-location-dot" />
        <input type="text" placeholder="Enter location" value={location}
            onChange={ (e:React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
            onKeyDown={onEnter}
            onFocus={onInputFocus}
        />
        <button onClick={() => onSearch(location)} className="fa-solid fa-magnifying-glass"></button>
    </div>
    )
}
