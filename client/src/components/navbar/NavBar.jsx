import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css"
import SearchBar from "../searchbar/SearchBar";


const NavBar = () => {
    return(
        <div >
            < NavLink to='/home'>
                <button>HOME</button>
            </ NavLink>
            < NavLink to='/form'>
                <button>FORM</button>
            </ NavLink>            
            < NavLink to='/'>
            <button>EXIT ❌</button>
            </ NavLink>                               
        </div>
    )
};

export default NavBar;