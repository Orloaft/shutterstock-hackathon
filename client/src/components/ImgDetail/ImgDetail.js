import React from 'react';

function ImgDetail({handleClick}) {
    return (
        <div>
            <h3>Download this image</h3>
            <img className='detail__image'/>
            <div>
                <h4 className='detail__title'>Image size / Format</h4>
                    <div className='detail__container'>
                        <p>size info goes here</p>
                    </div>
                    <div>
                        <p>Item Id: 2124865324</p>
                        <p>Creator: creator name</p>
                        <a href='https://www.shutterstock.com/pricing'>View our pricing and subscription plans</a>
                    </div>
                    <div className='detail__buttons-container'>
                        <button>Download</button>
                        <button onClick={handleClick}>Cancel</button>

                    </div>

            </div>
            
        </div>
    );
}

export default ImgDetail;