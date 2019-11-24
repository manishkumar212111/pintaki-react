const globals = {
    setCookie(cname, cvalue, exdays, sessionCookieFlag, encodeFlag) {//to remove cookie, cvalue="",exdays=-1
        if (cname !== undefined && cvalue !== undefined && typeof cvalue !== 'function') {
            if (typeof cvalue === 'object')
                cvalue = JSON.stringify(cvalue);
            var domain = false;
            var d = new Date();
            d.setTime(d.getTime() + ((exdays || 30) * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();

            document.cookie = `${cname}=${cvalue};${sessionCookieFlag ? '' : `${expires};`}`
        }
    },
    getCookie(key) {
        try {
            if(document.cookie){
                let data = document.cookie.split(';');
                if(data.length > 0){
                    for(var i in data){
                        if(data[i].indexOf(key+'=') !== -1){
                            return data[i].split('=')[1];
                        }
                    }
                }
            }
            return '';
        } catch (e) {
            console.log("ERR: Globals.getcookie: ", e.toString());
        }
        return "";
    },

}

export default globals;
