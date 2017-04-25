import React from 'react';
import {
	Tabs,
	Carousel
} from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import MobileList from './mobile_list';
const TabPane = Tabs.TabPane;
export default class MobileIndex extends React.Component {

	render() {
		const settings = {
			dots: true,
			effect: 'fade',
			autoplay: true
		};
		return (
			<div>
				<MobileHeader></MobileHeader>
				<Tabs>
					<TabPane key = "1" tab="头条">
						<div class="carousel">
							<Carousel {...settings} >
								<div><img src="./src/images/carousel_1.jpg" alt="" /></div>
								<div><img src="./src/images/carousel_2.jpg" alt="" /></div>
								<div><img src="./src/images/carousel_3.jpg" alt="" /></div>
								<div><img src="./src/images/carousel_4.jpg" alt="" /></div>
							</Carousel>
						</div>
						<MobileList count={20} type="top"/>
					</TabPane>
					<TabPane key = "2" tab="社会">
						<MobileList count={20} type="shehui"/>
					</TabPane>
					<TabPane key = "3" tab="国内">
						<MobileList count={20} type="guonei"/>
					</TabPane>
					<TabPane key = "4" tab="国际">
						<MobileList count={20} type="guoji"/>
					</TabPane>
					<TabPane key = "5" tab="娱乐">
						<MobileList count={20} type="yule"/>
					</TabPane>
					<TabPane key = "6" tab="体育">
						<MobileList count={20} type="tiyu"/>
					</TabPane>
					<TabPane key = "7" tab="科技">
						<MobileList count={20} type="keji"/>
					</TabPane>
					<TabPane key = "8" tab="时尚">
						<MobileList count={20} type="shishang"/>
					</TabPane>
				</Tabs>
				<MobileFooter></MobileFooter>
			</div>
		);
	};
}