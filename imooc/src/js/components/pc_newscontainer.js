import React from 'react';
import {
	Row,
	Col
} from 'antd';
import {
	Tabs,
	Carousel
} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component {
	render() {
		const settings = {
			dots: true,
			effect: 'fade',
			autoplay: true
		};
		return (
			<div>
				<Row>
					<Col span={2}></Col>
					<Col span={20} class="container">
						<div class="leftContainer">
							<div class="carousel">
								<Carousel {...settings} >
									<div><img src="./src/images/carousel_1.jpg" alt="" /></div>
									<div><img src="./src/images/carousel_2.jpg" alt="" /></div>
									<div><img src="./src/images/carousel_3.jpg" alt="" /></div>
									<div><img src="./src/images/carousel_4.jpg" alt="" /></div>
								</Carousel>
							</div>
							<PCNewsImageBlock count={6} type="guoji" width="400px" cardTitle="国际头条" imageWidth="112px" />
						</div>
						<Tabs class="tab_news">
							<TabPane key="1" tab="头条新闻">
								<PCNewsBlock count={22} type="top" width="100%" bordered="false"/>
							</TabPane>
							<TabPane key="2" tab="社会">
								<PCNewsBlock count={22} type="shehui" width="100%" bordered="false"/>
							</TabPane>
							<TabPane key="3" tab="国内">
								<PCNewsBlock count={22} type="guonei" width="100%" bordered="false"/>
							</TabPane>
							<TabPane key="4" tab="娱乐">
								<PCNewsBlock count={22} type="yule" width="100%" bordered="false"/>
							</TabPane>
						</Tabs>	
						<div>
							<PCNewsImageBlock count={16} type="keji" width="100%" cardTitle="科技头条" imageWidth="132px" />
							<PCNewsImageBlock count={16} type="yule" width="100%" cardTitle="娱乐头条" imageWidth="132px" />
						</div>					
					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
		);
	};
}