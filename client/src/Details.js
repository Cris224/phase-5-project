import './Details.css'

function Details(){
    return(
        <div className="details-container">
            <img src={game.image}/>
            <h1>{game.name}</h1>
        </div>
    )
}

export default Details