import React from 'react';
import './GridComponent.css';

const GridComponet = () => {
    return(
        <div class="grid-container04">
            <div class="grid-item04">
                <img src="https://media.istockphoto.com/photos/fossli-provincial-park-vancouver-island-picture-id1285518457?b=1&k=20&m=1285518457&s=170667a&w=0&h=-H_svcT6VwzmbP-UDbw5nl5E44EVxC9AvfTR1briFiw=" className='grd1'></img>
                <h2 className='frst'>Featured post</h2>
                <p className='date1'>Nov 12</p>
                <p className='content1'>This is a wider car with supporting text below as<br />a neutral lead-in to additional content</p>
                <a href="#" className='link1'>Continue reading...</a>
            </div>
            <div class="grid-item05">
                <img src="https://media.istockphoto.com/photos/fossli-provincial-park-vancouver-island-picture-id1285518457?b=1&k=20&m=1285518457&s=170667a&w=0&h=-H_svcT6VwzmbP-UDbw5nl5E44EVxC9AvfTR1briFiw=" className='grd2'></img>
                <h2 className='sec'>Post title</h2>
                <p className='date2'>Nov 11</p>
                <p className='content2'>This is a wider car with supporting text below as<br />a neutral lead-in to additional content</p>
                <a href="#" className='link2'>Continue reading...</a>
            </div>
        </div>
    )
}
export default GridComponet;