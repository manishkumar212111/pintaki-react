import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload'
const defaultProps = {
    loaderClass:"",
    height : '200px',
    lazy : true
}

function LazyImage(props){
    
    const Loader = () => {
        return(
            <div className={`lds-circle ${props.loaderClass ? props.loaderClass : ''}`} style={{height : props.height ? props.height : '200px'}}><div></div></div>
        )
    }
    if(props.lazy){
        return(
            <LazyLoad class="test" key={props.alt+Math.random(0,8)} placeholder={<Loader />} once>
                <img {...props}></img>
            </LazyLoad>
        )
    }else{
        <img {...props}></img>
    }    
}

LazyImage.defaultProps = defaultProps;
export default LazyImage;