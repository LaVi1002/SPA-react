import React from 'react';
import './DescriptionComponent.css'
 
const DescriptionComponent = () => {
    return(
        <div>
            {/* <div className='img001'>
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRspY9a4fTovZeeXwzOnWjDBxackATsgehHStx1VRcmByybh3eP" width="80%"></img>
                <div className='img002'>
                    <h2>Title of a longer featured blog post</h2>
                    <p>Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
                    <a href="#">Continue reading…</a>
                </div>
            </div> */}
            <div className='kit'>
             <div className='kit-text'>
                <h1 className='deshead'>Title of a longer featured <br />blog post</h1>
                <p className='despara'>Multiple lines of text that form the lede, informing<br /> new readers quickly and efficiently about what's<br /> most interesting in this post's contents.</p>
                <a href="#" className='reading'>Continue reading…</a>
             </div>
          </div>
            
        </div>
    )
}
export default DescriptionComponent;