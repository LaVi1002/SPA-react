import React from 'react';
import './GridComponent.css';

const GridComponet = () => {
    return(
        <div class="grid-container04">
            <div class="grid-item04">
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR4RArN8NWfMzpbXcbn75Z-iUymh5qqR7spZCSgr_o_pI2K6Pgk" className='grd1'></img>
                <h3 className='frst'>Featured post</h3>
                <p className='date1'>Nov 12</p>
                <p className='content1'>This is a wider car with supporting text below as<br />a neutral lead-in to additional content</p>
                <a href="#" className='link1'>Continue reading...</a>
            </div>
            <div class="grid-item05">
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR4RArN8NWfMzpbXcbn75Z-iUymh5qqR7spZCSgr_o_pI2K6Pgk" className='grd2'></img>
                <h3 className='sec'>Post title</h3>
                <p className='date2'>Nov 11</p>
                <p className='content2'>This is a wider car with supporting text below as<br />a neutral lead-in to additional content</p>
                <a href="#" className='link2'>Continue reading...</a>
            </div>
        </div>
    )
}
export default GridComponet;