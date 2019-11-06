// 'use strict';

import React from 'react';
import Tabin from '../components/widgets/Tabin';
import {FooterMenuMobile} from '../../data/menu';
import Card from '../components/widgets/Card';
import API from '../utils/Api';
import CLink from '../components/elements/CLink';
import Simmer from '../components/elements/Simmer';
import PropTypes from 'prop-types';

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
		if(res.status === 200 && res.data){
			
			cb(getData(res));
		}
		else{
			console.log("API ERROR AT HOMEPAGE");
			cb({error : true});
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
			if(res.status === 200 && res.data){
				cb(getData(res));
			}
			else {
				console.log("API ERROR AT HOMEPAGE");
				cb({error : true});
			}
		})
	}
	
	constructor(props){
		super(props);
		this.state = defaultProps;
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
				/>)
			})
			return h;
		}
		const homeContainer = () =>{
			return(
				<div class="tab-content" id="pills-tabContent">
					<div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
						<section class="content-box">
							<div class="header-inner">
								<h4>New Projects <CLink default= {true} href="/projects/list" className="theme-btn">View All</CLink></h4>
							</div>
							{getContentList({items : this.state.projects})}
							<div class="header-inner">
								<h4>Blogs <CLink default= {true} href="/blogs/list" className="theme-btn">View All</CLink></h4>
							</div>
							{getContentList({items : this.state.blogs})}

						</section>
					</div>
				</div>
			);
		}		

		const container = (index , type) => {
			switch(type){
				case 'home':
					return(homeContainer())
				case 'info':
					return(<div>this is info</div>)
				case 'wishlist':
					return(<div>this is wishlist</div>)
				case 'profile':
					return(<div>this is profile</div>)
			}
		}
		return(
			<div class="main">
				{container(this.state.activeIndex , FooterMenuMobile[this.state.activeIndex].pageName)}
				<Tabin items={FooterMenuMobile } index ={this.state.activeIndex} handleTabinClick = {this.handleTabinClick}/>	
			</div>
			
		);
	}  
}

IndexPage.contextTypes = contextTypes;
IndexPage.defaultProps = defaultProps;