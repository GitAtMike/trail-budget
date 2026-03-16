import { Link } from "react-router-dom"
import './Home.css'

function Home(){
    return(
        <div className="home-hero">
            <h1>Plan your hike.</h1>
            <h2>Know your cost.</h2>
            <p>TrailBudget helps you estimate gas, food, permits, and gear before you hit the trail.</p>
            <Link to="/new-trip" className="hero-button">Start Planning</Link>
        </div>
    )
}

export default Home