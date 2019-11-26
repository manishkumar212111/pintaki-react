import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
	seo  : {title : "About Page" , pageDescription : "This is About Page"},
	description : "",
    chunkJs : 'About',
    pagination :{}
}


const contextTypes = {
    data: PropTypes.object
};

export default class About extends React.Component {
    static fetchData(props, cb) {
        cb(defaultProps);
	}
    constructor(props , context){
        super(props , context);
        this.state = this.context.data || props;
    }
    render(){

        return(
          <div class="container">
            This is About Us page  
          </div>
          
        )
    }
}  

About.contextTypes = contextTypes;
About.defaultProps = defaultProps;
