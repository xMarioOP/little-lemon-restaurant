import {Link} from 'react-router-dom';
import HamburgerImg from  '../icons_assets/🦆 icon _hamburger menu.svg';
import MainLogoImg from  '../icons_assets/Logo.svg';
import React, {useState} from 'react';
function Nav() {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenuClick = () =>{
        setOpenMenu(!openMenu);
    }
    const handleMouseLeave = () => {
        openMenu && setOpenMenu(false);
    };
    return (
        <nav className = "navbar container-responsive-padding">
            <Link to="/">
                <img src={MainLogoImg} alt='Main Logo'></img>
            </Link>
            <button className='hamburgerMenu button' onClick={handleMenuClick} aria-label="Toggle menu">
                <img src={HamburgerImg} alt="Hamburger Menu" />
            </button>
            <ul className={`navLinks ${openMenu ? "visible" : ""}`} onMouseLeave={handleMouseLeave}>
                <li>
                    <Link to = '/'>Home</Link>
                </li>
                <li>
                    <Link to = '/'>About</Link>
                </li>
                <li>
                    <Link to = '/'>Menu</Link>
                </li>
                <li>
                    <Link to = '/booking'>Reservations</Link>
                </li>
                <li>
                    <Link to = '/'>Order Online</Link>
                </li>
                <li>
                    <Link to = '/'>Login</Link>
                </li>
            </ul>
        </nav>

    );
}

export default Nav;