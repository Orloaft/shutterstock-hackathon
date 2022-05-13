import React from 'react';

function ImgDetail() {
    return (
        <div>
            <h3>Download this image</h3>
            <img className='detail__image'/>
            <details>
                <h4 className='detail__title'>Image size / Format</h4>
                    <div className='detail__container'>
                        <p>size info goes here</p>
                    </div>
                <h4 className='detail__title'>Creator</h4>
                <img className='detail__avatar'/> 
                <p>creator name</p>


            </details>
            
        </div>
    );
}

export default ImgDetail;