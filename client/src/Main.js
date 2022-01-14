import './Main.css'
import React from 'react'
import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

function Main(){

    const [games, setGames] = useState([])

    useEffect(() => {
        fetch('/games')
        .then(resp => resp.json())
        .then((data) => setGames(data))
    }, [])



    return(
        <div id='container'>
            hfbgvkfujdhbvi
            <div className='card'>
            {/* {games.forEach(game => {
                
            }); */}
            {games.map(game => {
                
                return(
                
                    <div key={game.id}>
                        <img alt={game.name} src={game.image}/>
                        <p><b>{game.name}</b></p>
                    </div>
                
                )
            })}</div>
        </div>
    )
}


export default Main