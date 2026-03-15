import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar(){
    return(
        <nav>
            <span>TrailBudget</span>
            <Link to="/">Home</Link>
            <Link to="/new-trip">Plan a Trip</Link>
            <Link to="/saved-trips">Saved Trips</Link>
        </nav>
    )
}

export default Navbar