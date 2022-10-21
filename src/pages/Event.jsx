import { Fragment } from 'react';
import SingleEvent from '../component/SingleEvent';
import Footer from '../component/Footer';
import SingleEventV2 from '../component/SingleEventV2';

function Event(){
    return(
        <Fragment>
            <SingleEventV2/>
            <Footer/>
        </Fragment>
    )
}

export default Event