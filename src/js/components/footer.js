import React from 'react';
var footerCss = require('../../css/footer.css');

export default class ComponentFooter extends React.Component {
	switchHeader() {
		this.setState({
			miniHeader: !this.state.miniHeader
		});
	};
	constructor() {
		super();
		this.state = {
			miniHeader: false
		};
	};
	render() {
		const styleComponentFooter = {
			footer: {
				backgroundColor: '#333',
				color: '#fff',
				paddingTop: (this.state.miniHeader) ? '3px' : '15px',
				paddingBottom: (this.state.miniHeader) ? '3px' : '15px'
			}
		}
		return (
			<footer style={styleComponentFooter.footer} onClick = {this.switchHeader.bind(this)}>
				<h1>这里是页脚，一般放置版权的信息</h1>
			</footer>
		)
	}
}