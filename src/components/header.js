import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const divStyle = {
	textAlign: 'align-center',
	margin: '20px',
	padding: '25px'
};

class Header extends Component {

	constructor() {
		super();
		this.state = {
			visibleHeader: false,
		};
	}

	onFadeIn() {
		this.setState({
			visibleHeader: true,
		});
	}

	onFadeOut() {
		this.setState({
			visibleHeader: false,
		});
	}


	render() {
		return (
			<header style={divStyle}>

			<ReactCSSTransitionGroup
			transitionName="slideFromTop"
			transitionAppear={true}
			transitionAppearTimeout={1500}>

				<div className={"boytoy"}>

					<div className="something">
						<h2>Arthur Tomie</h2>
						<p>Department of Psychology, Associate Professor</p>
						<p>Center of Alcohol Studies, Adjunct Associate Professor</p>
					</div>

				</div>

			<br/>

			</ReactCSSTransitionGroup>

			<ReactCSSTransitionGroup
			transitionName="fade"
			transitionAppear={true}
			transitionAppearTimeout={4000}>

				<div className={"bio"}>
					<p> This is my bio </p>
				</div>
			</ReactCSSTransitionGroup>

			</header>
		);
	}
}

export default Header;