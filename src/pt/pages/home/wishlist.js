import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
	seo  : {title : "WishList Page" , pageDescription : "This is WishList Page"},
	description : "",
    chunkJs : 'WishList',
    pagination :{}
}


const contextTypes = {
    data: PropTypes.object
};

export default class WishList extends React.Component {
    static fetchData(props, cb) {
        cb(defaultProps);
	}
    
    constructor(props , context){
        super(props , context);
        this.state = this.context.data || props;
    }

    render(){

        
        
        return(
            <div>
                This is WishList page
            </div>
        )
    }
}  

WishList.contextTypes = contextTypes;
WishList.defaultProps = defaultProps;
