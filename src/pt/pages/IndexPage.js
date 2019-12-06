// 'use strict';

import React from 'react';
import Tabin from '../components/widgets/Tabin';
import {FooterMenuMobile} from '../../data/menu';
import Card from '../components/widgets/Card';
import API from '../utils/Api';
import CLink from '../components/elements/CLink';
import Simmer from '../components/elements/Simmer';
import PropTypes from 'prop-types';
import CardList from '../components/widgets/CardList';
import GoogleLogin from '../components/widgets/GoogleLogin';

const defaultProps = {
	activeIndex : 0,
	shimmer : true,
	seo  : {},
	blogs : {},
	projects : {},
	chunkJs : 'IndexPage'
}
var getData = (res) => {
	let o = {
		activeIndex : 0,
		seo : res.data.seo ? res.data.seo : defaultProps.seo,
		projects : res.data.projects ? res.data.projects : defaultProps.projects,
		shimmer : false,
		blogs : res.data.blogs ? res.data.blogs : defaultProps.blogs,
		chunkJs : 'IndexPage'
	};
	return o;
}

var getAPIResponse = (props ,cb) => {
	API.getApi('HomeAPI' , {} , false).then((res) =>{
		try{
			if(res.status === 200 && res.data){
			cb(getData(res));
			}
			else{
				console.log("API ERROR AT HOMEPAGE");
				cb({error : true, errorResp : "Invalid Response" });
			}
		} catch(e) {
			console.log("API ERROR AT HOMEPAGE");
			cb({error : true, errorResp : "Exception" });
		}
	})
}
const contextTypes = {
    data: PropTypes.object
};
export default class IndexPage extends React.Component {	
	static fetchData(props, cb) {
        // getApiResponse(props, function(res) {
        //     cb(res);  
		// });
		// cb({title: "testing"})
		API.getApi('HomeAPI' , {} , false).then((res) =>{
			try{
				if(res.status === 200 && res.data){
					cb(getData(res));
				}
			 
				else {
					console.log("API ERROR AT HOMEPAGE");
					cb({error : true});
				}
			} catch (e){
				console.log("API ERROR AT HOMEPAGE");
				cb({error : true});
		
			}
		})
	}
	
	constructor(props , context){
		super(props , context);
		this.state = this.context.data || defaultProps;
		this.handleTabinClick = this.handleTabinClick.bind(this);
		this.fetchData = this.fetchData.bind(this);
	}
	componentDidMount(){
		if(window.__INITIAL_STATE__ == null)
			this.fetchData(this.props);
		else
			this.setState(window.__INITIAL_STATE__);
		
		window.__INITIAL_STATE__ = null;
	}

	handleTabinClick(index , $selector){
		this.setState({ activeIndex : index })
	}

	fetchData(props){
		let self = this;
		this.setState({ shimmer : true });
		getAPIResponse(props , (res) => {
			self.setState(res);
		})
	}

	render(){
		if(this.state.shimmer){
			return(<Simmer />)
		}

		const getContentList = (items) =>{
			let h = [];
			items.items && items.items.map((item) => {
				h.push(<Card 
					items = {item}
					innerClass = "setimagewidth"
				/>)
			})
			return h;
		}
		const homeContainer = () =>{
			return(
				<section className="content-box">
						<CardList 
							items={this.state.projects} 
							title= "Our Projects"
							viewAllLink = "/projects/list"
						/>
						<CardList 
							items={this.state.blogs}
							title= "Our Blogs"
							viewAllLink = "/blogs/list"
						/>
				</section>
			);
		}		

		return(
			<div class="main">
				{homeContainer()}
				<GoogleLogin />		
			</div>
			
		);
	}  
}

IndexPage.contextTypes = contextTypes;
IndexPage.defaultProps = defaultProps;