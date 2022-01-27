import './Bottom.css'
import {Link} from 'react-router-dom'

function Bottom(){
    return(
        <>
            <footer id='btm'>
                <Link to='/about'>
                    About
                </Link>
            </footer>
        </>
    )
}

export default Bottom