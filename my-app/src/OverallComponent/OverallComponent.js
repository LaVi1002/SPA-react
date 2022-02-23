import React from 'react';
import ReviewComponent from '../ReviewComponent/ReviewComponent';
import OptionComponent from '../OptionComponent/OptionComponent';
import DescriptionComponent from '../DescriptionComponent/DescriptionComponent';
import GridComponet from '../GridComponent/GridComponent';
import AnotherBlogComponent from '../AnotherBlogComponent/AnotherBlogComponent';
import NewFeatureComponent from '../NewFeatureComponent/NewFeatureComponent';
import FooterComponent from '../FooterComponet/FooterComponent';
import SampleBlogComponent from '../SampleBlogComponent/SampleBlogComponent';

const OverallComponent = () => {
    return(
        <>
        <ReviewComponent />
        <OptionComponent />
        <DescriptionComponent />
        <GridComponet />
        <SampleBlogComponent />
        <AnotherBlogComponent />
        <NewFeatureComponent />
        <FooterComponent />
        </>
        

    )
}
export default OverallComponent;