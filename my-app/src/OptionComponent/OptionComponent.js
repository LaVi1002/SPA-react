import React from "react";
import './OptionComponent.css'

const OptionComponent = () => {
    return(
        <div className="list">
            <hr></hr>
        <ul className="options">
                <li className="lst"><a href="#Technology">Technology</a></li>
                <li className="lst"><a href="#Design">Design</a></li>
                <li className="lst"><a href="#Culture">Culture</a></li>
                <li className="lst"><a href="#Business">Business</a></li>
                <li className="lst"><a href="#Politics">Politics</a></li>
                <li className="lst"><a href="#Opinion">Opinion</a></li>
                <li className="lst"><a href="#Science">Science</a></li>
                <li className="lst"><a href="#Health">Health</a></li>
                <li className="lst"><a href="#Style">Style</a></li>
                <li className="lst"><a href="#Travel">Travel</a></li>
                </ul>
        </div>
    )
}
export default OptionComponent;