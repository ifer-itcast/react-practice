/*
 * @Author: Ifer 
 * @Date: 2019-07-22 00:51:32 
 * @Last Modified by: Ifer
 * @Last Modified time: 2019-07-22 11:37:25
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from '@/components/App';

import fetchJSONP from 'fetch-jsonp';
Component.prototype.$http = fetchJSONP;
Component.prototype.baseURL = 'https://api.douban.com';
Component.prototype.apikey = '0df993c66c0c636e29ecbb5344252a4a';

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
