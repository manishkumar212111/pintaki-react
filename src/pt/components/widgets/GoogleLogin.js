import React, { Component } from 'react';
import configs from '../../configs/configs'; 

const defaultProps = {
    showButton : true
}

class GoogleLogin extends Component {
    constructor(props){
        super(props);
        this.state = props;
        this.prepareLoginButton = this.prepareLoginButton.bind(this);
        this.googleSDK = this.googleSDK.bind(this);
        this.closeCallBack = this.closeCallBack.bind(this);
    }

    componentDidMount() {
        this.googleSDK();
        console.log('sfsfd');
    }
    closeCallBack() {
        this.setState({
            showButton : false
        })
    }

    prepareLoginButton(self){
 
    console.log(this.refs.googleLoginBtn);
 
    this.auth2.attachClickHandler(this.refs.googleLoginBtn, {},
        (googleUser) => {
 
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        
        }, (error) => {
            self.setState({
                message : "try again"
            }) 
            alert(JSON.stringify(error, undefined, 2));
        });
    }
 
    googleSDK(){
        console.log(configs.google_client_id);
        let self = this;
        window['googleSDKLoaded'] = () => {
          window['gapi'].load('auth2', () => {
            self.auth2 = window['gapi'].auth2.init({
              client_id: configs.google_client_id,
              cookiepolicy: 'single_host_origin',
              scope: 'profile email'
            });
            self.prepareLoginButton(self);
          });
        }
     
        (function(d, s, id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement(s); js.id = id;
          js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'google-jssdk'));
     
    }
   
    render() {
        if(!this.state.showButton)
            return "";
        return (
            <div className="overlay login-screen">  
                <div className="popup">
                    {/* <h2 className="text-left"></h2> */}
                    <span onClick={() => this.closeCallBack()} class="close">&times;</span>                    
                    <div className="content">
                        <div className="col-md-8 m-auto ">
                            <button className="loginBtn loginBtn--google" ref="googleLoginBtn">
                                Login with Google
                            </button>
                            {this.state.message && <span className="error">{this.state.message}</span>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
GoogleLogin.defaultProps = defaultProps;
export default GoogleLogin;


/* https://oauth2.googleapis.com/tokeninfo?id_token=

usersTable : (id , name , email , mobile , password , remember_digest , is_logged_in, status , role )
*/