import React, {Fragment}  from 'react';
import CLink from '../elements/CLink';
import {menuMobile ,menuDesktop} from '../../../data/menu'
import LazyImage from '../elements/LazyImage';
// import detect from '../../utils/detect'
export default class MobiHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { expandMenu : false}
        this.handleNavigationClick = this.handleNavigationClick.bind(this)
    }
    
    handleNavigationClick(){
        this.setState({
            expandMenu : !this.state.expandMenu
        });
    }

    render(){ 
        const mobileMenus = (items) =>{
            let h = [];
            {items && items.map((item) => {
                h.push(<li className="nav-item">
                    <CLink className={item.class} default={true} href={item.link}>{item.title}</CLink>
                </li>)
            })}
            return h;
        }
        // const getItemList = (items) => {
        //     let h = [];
        //     {items && items.map((item) => {
        //         h.push(<li>
        //             <div className="inner-cricle">
        //                 <CLink href={item.link} default={true}>
        //                     <img src={item.imagePath} />
        //                     <h5>{item.title}</h5>
        //                 </CLink>
        //             </div>

        //         </li>)
        //     })}
        //     return h;
        // }
        return(
                <header>
                    <nav className="navbar navbar-dark bg-primary">
                        <CLink className="navbar-brand" default={true} href="/"> <LazyImage src="/images/logo.png" /></CLink>
                        <button onClick={() => this.handleNavigationClick()} className="navbar-toggler" type="button">
                            <span className="navbar-toggler-icon"></span>
                        </button>
            
                        {this.state.expandMenu && <div className=" navbar-collapse">
                            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                {mobileMenus(menuMobile)}
                            </ul>
            
                        </div>}
                    </nav>
                    <div className="searchbar">
                        <input type="text" className="form-control" placeholder="Search" />
                        <i className="fa fa-search" aria-hidden="true"></i>
            
                    </div>
                {/* <div className="inner-box">
                    <ul>
                        {getItemList(menuMobile)}  
                    </ul>
                </div> */}
            </header>

        );}
}

export class DesktopHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { expandMenu : false}
    }
    
    render(){ 
        const desktopMenus = (items) =>{
            let h = [];
            {items && items.map((item) => {
                h.push(<li className="nav-item">
                    <CLink className={item.class} default={item.default} href={item.link}>{item.title}</CLink>
                </li>)
            })}
            return h;
        }
        
        return(

            <header>
                <div className="container">


                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <CLink className="navbar-brand" href="/" default={true}> <img src="images/logo.png" /></CLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>


                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                {desktopMenus(menuDesktop)}
                            </ul>

                        </div>
                        <div className="searchbar">
                            <input type="text" className="form-control" placeholder="Search" />
                            <i className="fa fa-search" aria-hidden="true"></i>

                        </div>
                    </nav>
                </div>
            </header>

        );}
}
