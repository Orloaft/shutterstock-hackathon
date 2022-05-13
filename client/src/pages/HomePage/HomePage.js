import React from 'react';
import './HomePage.scss';
import navbartop from '../../assets/images/navbartop.png';
import navbarside from '../../assets/images/sidenavbar.png'
import hero from '../../assets/images/hero.png';
import body from '../../assets/images/body.png';
import holder from '../../assets/images/inspire_placeholder.jpg'
import {Link} from 'react-router-dom';

function HomePage(props) {
    return (
        <>
            <header className='navbar'>
            <img className='navbar__top' src={navbartop} />
            <img />
            <nav className='navbar__left-container'>
            <img className='navbar__left' src={navbarside}/>
            </nav>
            </header>
            <main>
            <img className='hero' src={hero} />
            <article className='inspire'>
                <h2 className='inspire__title'>Featured Creators</h2>
                <div className='inspire__container'>
                    <img className='inspire__img' src={holder} />
                    <img className='inspire__img' src={holder}/>
                    <img className='inspire__img' src={holder}/>
                </div>
                <Link to='/inspiration'>
                <button className='inspire__button'>Get Inspired</button>
                </Link>
            </article>
            <img className='main' src={body}/>

            </main>

        </>
    );
}

export default HomePage;