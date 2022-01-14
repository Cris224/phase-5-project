import { useState } from 'react'

function Login(){

    const [name, setName] = useState('')
    const [username, setUserName] = useState('')

    return (
        <div id='login'>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log(name, username)}}>
                <input placeholder='Name' onChange={(e) => setName(e.target.value)}></input>
                <input placeholder='Username' onChange={(e) => setUserName(e.target.value)}></input>
                <button type='submit'>X</button>
            </form>
        </div>
    )
}

export default Login