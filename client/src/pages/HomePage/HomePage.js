import React from 'react';
import './HomePage.scss';
import navbartop from '../../assets/images/navbartop.png';
import navbarside from '../../assets/images/sidenavbar.png'
import hero from '../../assets/images/hero.png';
import body from '../../assets/images/body.png';
import holder from '../../assets/images/inspire_placeholder.jpg'

function HomePage(props) {
    return (
        <>
            <img className='navbar__top' src={navbartop} />
            <img />
            <img className='navbar__left' src={navbarside}/>
            <main>
            <img className='hero' src='{hero}' />
            <article className='inspired'>
                <h2>Creations</h2>
                <div>
                    <img className='inspire__img' src='holder' />
                    <img className='inspire__img' src='holder'/>
                    <img className='inspire__img' src='holder'/>
                    <button>Get Inspired</button>
                </div>

            </article>

            </main>

        </>
    );
}

export default HomePage;