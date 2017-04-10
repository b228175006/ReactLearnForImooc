import React from 'react';
export default class ComponentHeader extends React.Component {
	constructor() {
		super();
		this.state = {
			miniHeader: false
		};
	};

	render() {
		const styleComponentHeader = {
			header: {
				backgroundColor: '#333',
				color: '#fff',
				paddingTop: (this.state.miniHeader) ? '3px' : '15px',
				paddingBottom: (this.state.miniHeader) ? '3px' : '15px'
			}
		}
		return (
			<header style={styleComponentHeader.header} >
				<h1>这里是头部</h1>
			</header>
		)
	}
}