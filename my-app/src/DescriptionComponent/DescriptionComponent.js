import React from 'react';
import './DescriptionComponent.css'
 
const DescriptionComponent = () => {
    return(
        <div>
            <div class="grid-container02">
                <div class="grid-item02">
                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR4RArN8NWfMzpbXcbn75Z-iUymh5qqR7spZCSgr_o_pI2K6Pgk" className='descrip'></img>
                </div>
            </div>
            <div class="grid-container03">
                <div class="grid-item03">
                    <h1 className='head'>Title of a longer featured<br /> blog post</h1>
                    <p className='text'>Multiple lines of text that form the lede, informing<br /> new readers quickly and efficiently about what's<br />most interesting in this post's contents.</p>
                    <a href='#' className='read'>Continue reading…</a>
                </div>

            </div>
        </div>
    )
}
export default DescriptionComponent;