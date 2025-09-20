import styles from "./LandingPage.module.css"
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div >
            <div >
                <h1>Discover and Learn all about F1</h1>
                <h1>You can create your own Driver</h1>
            </div>
            <div >
                <p>Explore a wide variety of Drivers and Teams of F1.</p>
                <Link to='/home'><button >LET'S GO!</button></Link>
            </div>
        </div>
    )
};

export default LandingPage;