import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import "./middle.css";
import neuron from './neuron.png'; 

const divStyle = {
	textAlign: 'center',
	margin: '10px',
	padding: '23px'
};


class Middle extends Component {

	constructor() {
		super();
		this.state = {
			transitioned: false,
		};
	}

	slideOut() {
		this.setState({
			transitioned: false,
		});
	}

	render() {

		return (
			<middle style={divStyle}>

				<ReactCSSTransitionGroup
				transitionName="slideFromLeft"
				transitionAppear={true}
				transitionAppearTimeout={2500}>

				<div id = "neuronimage">

						<a href="https://alcoholstudies.rutgers.edu/"><img src={neuron} alt="Neuron" id="neuron"/></a>

				</div>


					<div id = "randomclass" classname={"random class"}>

						<p> Department of Psychology </p>

						<p> 152 Frelinghuysen Road </p>

						<p> Piscataway, New Jersey 08854-8020 </p>


						<p> Center of Alcohol Studies </p>

						<p> 607 Allison Road </p>

						<p> Piscataway, New Jersey 08854-8001 </p>

						<p> <strong> Phone: 848/445-8885 </strong> </p>

						<p> <strong> Fax: 848/445-3500 </strong> </p>



					</div>

				</ReactCSSTransitionGroup>

			</middle>
		);
	}
}

export default Middle;