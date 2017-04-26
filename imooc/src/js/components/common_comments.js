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
import {
	Router,
	Route,
	Link,
	browserHistory
} from 'react-router';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class CommonComments extends React.Component {
	constructor() {
		super();
		this.state = {
			comments: ''
		}
	};
	componentDidMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey, myFetchOptions)
			.then(response => response.json())
			.then(json => {
				this.setState({
					comments: json
				});
			});
	};
	handleSubmit(e) {
		e.preventDefault();
		var myFetchOptions = {
			method: 'GET'
		};
		var formData = this.props.form.getFieldsValue();
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formData.remark, myFetchOptions).then(response => response.json()).then(json => {
			this.componentDidMount();
		})
	};
	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		const {
			comments
		} = this.state;
		const commentsList = comments.length ? comments.map((comment, index) => (
			<Card key={index} title={comment.UserName} extra={<a href="#">发表于 {comment.datetime}</a>}>
				<p>{comment.Comments}</p>
			</Card>
		)) : '没有加载到评论！';
		return (

			<div className="comment">
				<Row>
					<Col span={24}>
						{commentsList}
						<Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
							<FormItem label="您的评论：">
								{getFieldDecorator('remark')(
									<Input placeholder="随便写点啥吧！"  type="textarea"/>
									)}
							</FormItem>
							<Button type="primary" htmlType="submit">提交评论</Button>
						</Form>
					</Col>
				</Row>
			</div>
		);
	}
}
export default CommonComments = Form.create()(CommonComments);