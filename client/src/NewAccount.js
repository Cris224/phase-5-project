import { useState } from 'react'

function NewAccount(){

    const [name, setName] = useState('')
    const [username, setUserName] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            // name: name,
            username: username,
        }
        fetch('/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userData)
        }).then(resp => resp.json())
        .then((data) => console.log(data))
    }

    return (
        <div id='new-account'>
            <form onSubmit={handleSubmit}>
                {/* <input placeholder='Name' onChange={(e) => setName(e.target.value)}></input> */}
                <input placeholder='Username' onChange={(e) => setUserName(e.target.value)}></input>
                <button type='submit'>X</button>
            </form>
        </div>
    )
}


export default NewAccount