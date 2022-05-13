import React from 'react';
import './HomePage.scss';
import hero from '../../assets/images/hero.png';
import body from '../../assets/images/body.png';
import holder from '../../assets/images/inspire_placeholder.jpg'
import {Link} from 'react-router-dom';

function HomePage(props) {
    return (
        <>
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