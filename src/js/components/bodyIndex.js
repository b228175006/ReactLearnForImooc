import React from 'react';
import ReactDOM from 'react-dom';
import ReactMixin from 'react-mixin';
import BodyChild from './bodyChild';
import MixinLog from './mixins.js';
export default class BodyIndex extends React.Component {

	componentWillMount() {
		// console.log("页面将要加载时的函数")
	}
	componentDidMount() {
		// console.log("页面加载完成后执行的函数")
	}
	constructor() {
		super(); //调用基类的所有初始化方法
		this.state = {
			userName: 'Bili',
			age: 20
		};
	}
	changeAgeInfo() {
		this.setState({
			age: 50
		});
		// var mySubmitButton = document.getElementById('mySubmitButton');
		// ReactDOM.findDOMNode(mySubmitButton).style.color = 'red';
		this.refs.submitBtn.style.color = 'red';
		MixinLog.log();
	}
	handleChildValueChange(event) {
		this.setState({
			age: event.target.value
		});
	}

	render() {

		setTimeout(() => {
			this.setState({
				userName: 'Imooc'
			});
		}, 4000);

		var usreName = 'Bili';
		var boolInput = true;
		return (
			<div>
				<h2>这里是页面主体内容</h2>
				<p>{usreName==''?'用户还没登录':'用户名:'+usreName}</p>
				<p><input type="button" value={usreName} disabled={boolInput}/></p>
				{/*注释*/}
				<p>{this.state.userName} {this.props.userId}</p>
				<p>{this.state.age}</p>
				<input id='mySubmitButton' ref="submitBtn" type="button" value="changeAge" onClick={this.changeAgeInfo.bind(this)}/>
				<BodyChild {...this.props} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
			</div>
		)
	}
}
ReactMixin(BodyIndex.prototype, MixinLog);