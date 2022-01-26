import './Main.css'
import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Main({fetchGame}){

    const [games, setGames] = useState([])

    useEffect(() => {
        fetch('/api/games')
        .then(resp => resp.json())
        .then((data) => setGames(data))
    }, [])

    

    return(
        <div id='container'>
            
            {games.map(game => {
                
                return(
                
                    <div key={game.id}>
                        <Link to='/details'>
                            <img className='thumbnail' onClick={(e) => fetchGame(e.target.alt)} alt={game.name} src={game.image}/>
                        </Link>
                        <p><b>{game.name}</b></p>
                    </div>
                
                )
            })}
        </div>
    )
}


export default Main