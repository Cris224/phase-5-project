import { useState } from "react"

function NewReview({gameId, userId, setReviews, reviews}){

    

    const [comment, setComment] = useState('')
    const [rating, setRating] = useState(0)

    const handleSubmit = () => {
        
        const formData = {
            user_id: userId,
            game_id: gameId,
            comment: comment,
            rating: rating,
        }
        fetch('/api/reviews', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }).then(resp => resp.json())
        .then((data) => setReviews(data, ...reviews))
    }


    return(
        <div className="new-comment-form">
            <form onSubmit={handleSubmit}>
                <input placeholder="Comment" onChange={(e) => setComment(e.target.value)}/>
                <input placeholder="Rating" onChange={(e) => setRating(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewReview