import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>Welcome to rest country</h1>
            <nav className='Menus'>
                <a href="#">Home</a>
                <a href="#">About us</a>
                <a href="#">Countries</a>
                <a href="#">Contact us</a>
                <a href="#">Log In</a>
            </nav>
            <br />
            <hr />
        </div>
    );
}

export default Header;