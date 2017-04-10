import React from 'react';
var footerCss = require('../../css/footer.css');

export default class ComponentFooter extends React.Component {
	render() {
		console.log(footerCss);
		return (
			<footer className={footerCss.miniFooter}>
				<h1>这里是页脚，一般放置版权的信息</h1>
			</footer>
		)
	}
}