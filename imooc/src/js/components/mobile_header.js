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
	Checkbox
} from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MobileHeader extends React.Component {
	constructor() {
		super();
		this.state = {
			current: "top",
			modalVisible: false,
			action: 'login',
			hasLogined: false,
			userNickName: '',
			userid: 0
		}
	};
	setModalVisible(value) {
		this.setState({
			modalVisible: value
		});
	};
	handleClick(e) {
		if (e.key == "register") {
			this.setState({
				current: 'register'
			});
			this.setModalVisible(true);
		} else {
			this.setState({
				current: e.key
			});
		}
	};
	handleSubmit(e) {
		e.preventDefault();
		//fetch
		var myFetchOptions = {
			method: 'GET'
		};
		var formData = this.props.form.getFieldsValue();
		console.log(formData);
		var url = "http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=" + formData.userName + "&password=" + formData.password + "&r_userName=" + formData.r_userName + "&r_password=" + formData.r_password + "&r_confirmPassword=" + formData.r_confirmPassword;
		fetch(url, myFetchOptions).then(response => response.json()).then(json => {
			this.setState({
				userNickName: json.NickName,
				userid: json.UserId
			});
		});
		message.success('请求成功！');
		this.setModalVisible(false);
	};
	login() {
		this.setModalVisible(true);
	};
	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		const userShow = this.state.hasLogined ?
			<Link>
				<Icon type="inbox" />
			</Link> :
			<Icon type="setting" onClick = {this.login.bind(this)}/>
		return (
			<div id="mobileheader">
				<header>
					<img src="./src/images/logo.png" alt="logo"/>
					<span>ReactNews</span>
					{userShow}
				</header>
				<Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel={()=>this.setModalVisible(false)} onOk={()=>this.setModalVisible(false)} okText="关闭">
							<Tabs type = "card">
								<TabPane tab="注册" key="2">
									<Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
										<FormItem label="账号">
											{getFieldDecorator('r_userName')(
												<Input placeholder="请输入您的账号" />
												)}
										</FormItem>
										<FormItem label="密码">
											{getFieldDecorator('r_password')(
												<Input type="password"  placeholder="请输入您的密码" />
												)}
										</FormItem>
										<FormItem label="确认密码">
											{getFieldDecorator('r_confirmPassword')(
												<Input type="password" placeholder="请再次输入您的密码" />
												)}
										</FormItem>
										<Button type="primary" htmlType="submit">注册</Button>
									</Form>
								</TabPane>
							</Tabs>
						</Modal>
			</div>
		);
	};
}
export default MobileHeader = Form.create()(MobileHeader);