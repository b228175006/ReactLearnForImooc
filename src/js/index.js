var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyIndex';

// import 'antd/dist/antd.css';

class Index extends React.Component {
	render() {
		return (
			<div>
				<ComponentHeader/>
				<BodyIndex userId='123'/>
				<ComponentFooter/>
			</div>

		)
	}
}