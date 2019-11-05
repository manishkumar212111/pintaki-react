import axios from 'axios';
import confAPI from '../configs/confAPI';
import configs from '../configs/configs';

import querystring from 'querystring';

const API  = {
    getUrl : function(key, options,direct) {
		let apiUrl;
		if(direct){
			apiUrl = confAPI[key].url;
		} else{
			let apiBaseUrl = configs.apiBaseUrl;
			apiUrl = apiBaseUrl + confAPI[key].url;
		}
		return {url: apiUrl, qs: querystring.stringify(options)};
    },
    
    getApi : function(apiKey , options , direct) {
        let o = this.getUrl(apiKey , options , direct);
        return axios.get(o.url + '&' +  o.qs).then(res => {
          if (res.status == 200) {
              
              return res.data;
          }
      })
      .catch((error) => {
          console.error("API ERR: ", new Date().toString(), error.code, error.toString(), url + '&' +  qs);
          return {error:true, errMsg: error.toString(), errorResp: error};
        });    
    },

    POSTAPI : function(apiKey , options , direct) {
        let o = this.getUrl(apiKey, options, direct);
		let conf = {
            headers: { 
                'Content-Type': 'application/json'
            }}
		return axios.post(o.url,JSON.stringify(options) , conf)
	  		.then(res => {
	  			if (res.status == 200) {
		    		return res.data;
			    }
			})
			.catch((error) => {
	        	console.error(error);
				return {error:true, errMsg:error.toString(), errorResp: error};
	      	});
    }
}

export default API;