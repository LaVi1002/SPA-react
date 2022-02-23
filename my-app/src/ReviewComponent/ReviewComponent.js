import React from "react";
import './ReviewComponent.css';
import { GrSearch } from "react-icons/gr";

const ReviewComponent = () => {
    return(
        <div class="grid-container01">
            <div class="grid-item01">
                <button className="sub">SUBSCRIBE</button>
            </div>
            <div class="grid-item01">
                <p className="blog">Blog</p>
            </div>
            <div class="grid-item01">
                <button className="src"><GrSearch /></button>
                <button className="sign">SIGN UP</button>
            </div>
            <hr className="horizontal"/>
        </div>
    )
}
export default ReviewComponent;