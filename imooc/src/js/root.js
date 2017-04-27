import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';

import PCIndex from './components/pc_index';
import PCNewsDetails from './components/pc_news_details';
import PCUserConter from './components/pc_usercenter';
import MobileIndex from './components/mobile_index';
import MobileNewsDetails from './components/mobile_news_details';
import MobileUserConter from './components/mobile_usercenter';

import {
	Router,
	Route,
	hashHistory
} from 'react-router';
import {
	Button
} from 'antd';

export default class Root extends React.Component {
	render() {
		return (
			<div>
				<MediaQuery query="(min-device-width:1224px)">
					<Router history = {hashHistory}>
						<Route path="/" component = {PCIndex}></Route>
						<Route path="/details/:uniquekey" component = {PCNewsDetails}></Route>
						<Route path="/usercenter" component = {PCUserConter}></Route>
					</Router>
				</MediaQuery>
				<MediaQuery query="(max-device-width:1224px)">
					<Router history = {hashHistory}>
						<Route path="/" component = {MobileIndex}></Route>
						<Route path="/details/:uniquekey" component = {MobileNewsDetails}></Route>
						<Route path="/usercenter" component = {MobileUserConter}></Route>
					</Router>
				</MediaQuery>
			</div>
		);
	}
}

ReactDOM.render(<Root/>, document.getElementById('mainContainer'));