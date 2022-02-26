import React from 'react';
import './DescriptionComponent.css' 
const DescriptionComponent = () => {
    return(
            <div className='kit'>
             <div className='kit-text'>
                <h1 className='deshead'>Title of a longer featured <br />blog post</h1>
                {/* <DescriptionChildComponent title=">Multiple lines of text that form the lede, informing<br /> new readers quickly and efficiently about what's<br /> most interesting in this post's contents" /> */}
                <p className='despara'>Multiple lines of text that form the lede, informing<br /> new readers quickly and efficiently about what's<br /> most interesting in this post's contents.</p>
                <a href="#" className='reading'>Continue reading…</a>
             </div>
          </div>
    
    )
}
export default DescriptionComponent;