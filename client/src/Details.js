import './Details.css'
import {useEffect, useState} from 'react'
import NewReview from './NewReview'

function Details({gameObj, users, user}){

    
    const [reviews, setReviews] = useState(gameObj.reviews)
    const [ratings, setRatings] = useState([])


    let total = 0;
    for(let i = 0; i < ratings.length; i++) {
    total += ratings[i];
    }
    let avg = parseFloat(total / ratings.length).toFixed(0)

    

    return(
    
        <div className='details-page'>
        <div className="details-container">
            <h1 className='head'>Information</h1>
            <img className='image' src={gameObj.image}/>
            <h1 className='title'><span>Title:</span> {gameObj.name}</h1>
            <h2 className='release'><span>Release Date:</span> {gameObj.release_date}</h2>
            <h2 className='platforms'><span>Platforms:</span> {gameObj.platforms}</h2>
            <h3 className='overview'><span>Overview:</span> {gameObj.description}</h3>
            <h3 className='score'><span>User Score:</span> {avg}%</h3>
            <h3 className='score'><span>Critic Score:</span> {gameObj.critic_score}%</h3>
        </div>
        <div className='reviews-container'>
            <h1 className='head'>Reviews</h1>
            {reviews.map(review =>{

                const userObj = users.filter(user => user.id === review.user_id)
                ratings.push(review.rating)
                const date = new Date(review.created_at)
               
                return(
                    <div key={review.id} className='reviews'>
                        <h1 className='user'>{userObj[0].username}</h1>
                        <p className='date'> {date.toLocaleDateString()}</p>
                        <p className='com'>{review.comment}</p>
                        <p className='rate'>Rating: {review.rating}/100</p>
                    </div>
                )
            })}
        </div>
        <NewReview gameId={gameObj.id} userId={user.id} setReviews={setReviews} reviews={reviews}/>
        </div>
        
    )
}



export default Details