import React from 'react';
import {
	Row,
	Col,
	Menu,
	Icon,
	Tabs,
	message,
	Input,
	Form,
	Modal,
	Button,
	Checkbox,
	notification,
	Card,
	Upload
} from 'antd';
import {
	Router,
	Route,
	Link,
	browserHistory
} from 'react-router';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

class PCUserConter extends React.Component {
	render() {
		return (
			<div>
				<PCHeader />
				<Row>
					<Col span={2}></Col>
					<Col span={20}>
					<Tabs tabPosition="left" type="card">
						<TabPane tab="我的收藏列表" key="1">
							
						</TabPane>
						<TabPane tab="我的评论列表" key="2">
							
						</TabPane>
						<TabPane tab="我的个人信息" key="3">
							
						</TabPane>
					</Tabs>
					</Col>
					<Col span={2}></Col>
				</Row>
				<PCFooter />

			</div>

		);
	};
}
export default PCUserConter = Form.create()(PCUserConter);