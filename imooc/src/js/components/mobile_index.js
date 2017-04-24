import React from 'react';
import {
	Tabs
} from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';

const TabPane = Tabs.TabPane;
export default class MobileIndex extends React.Component {

	render() {
		return (
			<div>
				<MobileHeader></MobileHeader>
				<Tabs>
					<TabPane key = "1" tab="头条"></TabPane>
					<TabPane key = "2" tab="社会"></TabPane>
					<TabPane key = "3" tab="国内"></TabPane>
					<TabPane key = "4" tab="国际"></TabPane>
					<TabPane key = "5" tab="娱乐"></TabPane>
					<TabPane key = "6" tab="体育"></TabPane>
					<TabPane key = "7" tab="科技"></TabPane>
					<TabPane key = "8" tab="时尚"></TabPane>
				</Tabs>
				<MobileFooter></MobileFooter>
			</div>
		);
	};
}