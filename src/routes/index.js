// import NotFoundPage from '../components/NotFoundPage';
import React from 'react';

const routesConfigs = [
    { name: "Home", path: "/", component: "IndexPage" },
    { name: "ProjectListing" , path:"/projects/list(/:page)" , component : "ProjectListing"},
    { name: "BlogListing" , path:"/blogs/list(/:page)" , component : "BlogListing"},    
    { name: "503 error" , path:"/503" , component: "ErrorPage"},
    { name:"" , path: "*" , component : "NotFoundPage"}
]

if (typeof require.ensure !== 'function') require.ensure = function (d, c) { c(require) }

const asyncLoad = function (component , callback) {
    switch (component) {
        case 'IndexPage':
            require.ensure([], require => {
                callback(null, require('../pt/pages/IndexPage').default)
            }, 'IndexPage');

        case 'ProjectListing':    
            return require.ensure([], require => {
                    callback(null, require('../pt/pages/ProjectListing').default)
                }, 'ProjectListing');

        case 'BlogListing':    
            return require.ensure([], require => {
                callback(null, require('../pt/pages/BlogListing').default)
            }, 'BlogListing');
        
        case 'ErrorPage':    
            return require.ensure([], require => {
                callback(null, require('../pt/pages/ErrorPage').default)
            }, 'ErrorPage');

        case 'NotFoundPage':    
            return require.ensure([], require => {
                    callback(null, require('../pt/pages/NotFoundPage').default)
                }, 'NotFoundPage');
            
    }
}

export { routesConfigs, asyncLoad }