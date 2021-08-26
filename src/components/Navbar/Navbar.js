import './Navbar.css'
import { Button } from 'react-bootstrap';
 const Navbar = ({ buttonclicked }) => {
    const clicked = () => {
        buttonclicked(true);
    }

    return (


        <nav className="NavbarItems">

            <img className="example-class" src="./img5.png" alt="nothing" />
            <h1 className="navbar-logo">LetsGrowMore</h1>
            <Button className="nav-button" onClick={clicked}>Get Users</Button>
             
        </nav>
    )
}
export default Navbar;