import React from 'react';
import './HomePage.scss';
import navbartop from '../../assets/images/navbartop.png';
import navbarside from '../../assets/images/sidenavbar.png'

function HomePage(props) {
    return (
        <div>
            <img className='navbar__top' src={navbartop} />
            <img />
            <img className='navbar__left' src={navbarside}/>

        </div>
    );
}

export default HomePage;