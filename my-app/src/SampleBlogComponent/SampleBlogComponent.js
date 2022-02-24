import React from "react";
import './SampleBlogComponent.css';
import {AiFillGithub} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';

const SampleBlogComponent = () => {
    return(
        <div class="grid-container06">
        <div class="grid-item06">
            <h2 className="samplehead01">From the firehose</h2>
            <hr className="hr"></hr>
            <h2 className="post">Sample blog post</h2>
            <p className="date3">April 1, 2020 by<a href="https://mui.com/" className="olive">Olivier</a></p>
            <p className="paragraph01">This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js.</p>
            <p className="paragraph02">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
            <p className="paragraph03">Curabitur blandit tempus porttitor. <b>Nullam quis risus eget urna mollis </b>ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            <p className="paragraph04">Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            <br /><h2 className="samplehead02">Heading</h2>
            <p className="paragraph05">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p className="paragraph06">Sub-heading 1</p>
            <p className="paragraph07">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <p className="paragraph08">Sub-heading 2</p>
            <p className="paragraph09">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <ul className="bullets">
                <li className="list01">Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                <li className="list01">Donec id elit non mi porta gravida at eget metus.</li>
                <li className="list01">Nulla vitae elit libero, a pharetra augue.</li>
            </ul>
            <p className="paragraph10">Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
            <ol className="numbers">
                <li className="list02">Vestibulum id ligula porta felis euismod semper.</li>
                <li className="list02">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                <li className="list02">Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
            </ol>
            <p className="paragraph11">Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
        </div>
        <div class="grid-item07">
            <h3 className="samplehead03">About</h3>
            <p className="paragraph12">Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
        </div>
        <div class="grid-item08">
            <h3 className="samplehead04">Archives</h3>
            <a href="#">March 2020</a><br></br>
            <a href="#">February 2020</a><br></br>
            <a href="#">January 2020</a><br></br>
            <a href="#">November 2020</a><br></br>
            <a href="#">Octomber 2020</a><br></br>
            <a href="#">September 2020</a><br></br>
            <a href="#">August 2020</a><br></br>
            <a href="#">June 2020</a><br></br>
            <a href="#">July 2020</a><br></br>
            <a href="#">May 2020</a><br></br>
            <a href="#">April 2020</a><br></br>
            <br></br>
            <h3 className="samplehead05">Social</h3>
            <a href="#" className="icns"><AiFillGithub /><span>GitHub</span></a><br></br>
            <a href="#" className="icns"><AiOutlineTwitter /><span>Twitter</span></a><br></br>
            <a href="#" className="icns"><AiFillFacebook /><span>FaceBook</span></a><br></br>
        </div>
    </div>
    )
}
export default SampleBlogComponent;