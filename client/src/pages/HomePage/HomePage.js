import React from 'react';
import './HomePage.scss';
import hero from '../../assets/images/hero.png';
import body from '../../assets/images/body.png';
import {Link} from 'react-router-dom';
import turtleCreation from '../../assets/images/sebastian-turtle.gif';
import appNyc from '../../assets/images/app_nyc.png';
import memories from '../../assets/images/memories.jpg';

function HomePage(props) {

    const imgList = [turtleCreation, appNyc, memories]
    return (
        <>
            <main>
            <img className='hero' src={hero} />
            <article className='inspire'>
                <h2 className='inspire__title'>Featured Creators</h2>
                <div className='inspire__container'>
                    {imgList.map((img)=>{
                        return (
                        <div className='inspire__img-container'>
                            <img className='inspire__img' src={img}/>
                        </div>
                        )
                    })}
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