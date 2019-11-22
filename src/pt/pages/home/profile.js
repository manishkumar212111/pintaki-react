import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
	seo  : {title : "Profile Page" , pageDescription : "This is Profile Page"},
	description : "",
    chunkJs : 'Profile',
    pagination :{}
}


const contextTypes = {
    data: PropTypes.object
};

export default class Profile extends React.Component {
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
                This is Profile page
            </div>
        )
    }
}  

Profile.contextTypes = contextTypes;
Profile.defaultProps = defaultProps;
