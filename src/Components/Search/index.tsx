import "./styles.css"


export const Search = () => {
return (
    <div className="search">
        <i className="fa-solid fa-location-dot" />
        <input type="text" placeholder="Enter location" />
        <button className="fa-solid fa-magnifying-glass"></button>
    </div>
    )
}
