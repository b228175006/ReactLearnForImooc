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
	constructor() {
		super();
		this.state = {
			previewVisible: false,
			previewImage: ''
		}
	};
	handleCancel() {
		this.setState({
			previewVisible: false
		});
	};
	render() {
		const props = {
			action: 'http://newsapi.gugujiankong.com/handler.ashx',
			headers: {
				"Access-Control-Allow-Origin": "*"
			},
			listType: 'picture-card',
			defaultFileList: [{
				uid: -1,
				name: 'xxx.png',
				state: 'done',
				url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
				thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
			}],
			onPreview: (file) => {
				this.setState({
					previewImage: file.url,
					previewVisible: true
				});
			}
		};
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
							<div class="clearfix">
								<Upload {...props} >
									<Icon type="plus" />
									<div className="ant-upload-text">上传照片</div>
								</Upload>
								<Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel.bind(this)}>
									<img src={this.state.previewImage} alt="预览" style={{ width: '100%' }}/>
								</Modal>
							</div>
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