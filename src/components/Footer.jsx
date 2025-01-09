import {Link} from 'react-router-dom';
import footerImg from '../icons_assets/restaurantfood.jpg'
function Footer() {
    return (
        <footer className='footer container-responsive-padding'>
            <img src = {footerImg} alt= "Restraunt Food"></img>
            <ul>
                <li id='footerHeader'>Navigation</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/">Order Online</Link></li>
                <li><Link to="/">Login</Link></li>
            </ul>
            <ul>
                <li id='footerHeader'>Contact</li>
                <li><Link to="/">Address</Link></li>
                <li><Link to="/">Phone Number</Link></li>
                <li><Link to="/">Email</Link></li>
            </ul>
            <ul>
                <li id='footerHeader'>Social Media Links</li>
                <li><Link to="/">Instagram</Link></li>
                <li><Link to="/">Facebook</Link></li>
                <li><Link to="/">menu</Link></li>
            </ul>
        </footer>
    )
}

export default Footer;