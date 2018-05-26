import React, { Component } from 'react';
import './miscellaneous.css';
import tail from './tailoftheraccoon.jpeg';

const divStyle = {
	textAlign: 'center',
	margin: '20px',
	padding: '25px'
};

class Miscellaneous extends Component {
	render() {
		return (
			<misc style={divStyle}>

				<div id="raccoonimage" classname="raccoon">
					<a href="https://www.tailoftheraccoon.com"><img src={tail} alt="tailboy" id="tail"/></a>
				</div>

				<h2> Email </h2>

				<a href="mailto:tomie@rci.rutgers.edu">tomie@psych.rutgers.edu</a>

				<br/>

				<p> Educational Website </p>


				<a href="https://tailoftheraccoon.com">Information on Loss of Self Control and Drug Addiction </a>


				<br/>


				<h2>Dr. Tomie's Scientific Short Stories: </h2>
				<p>"The Tail of the Raccoon, Secrets of Addiction" </p>
				<p>"The Tail of the Raccoon, Part II: Touching the Invisible" </p>
				<p>"Tail of the Raccoon, Part III: Departures" </p>

				<a href="https://www.facebook.com/tailoftheraccoon"> Our Facebook Group</a>

				<br/>

				<h2> Information for Veterans: </h2>

				<p> University College Community Veteran Services- Mentors and Mentees </p>

				<a href="https://veterans.rutgers.edu/education-benefits/how-use-your-benefits-rutgers"> Veterans Education Benefit - Undergraduate Registrar New Brunswick </a>

			</misc>
		);
	}
}

export default Miscellaneous;