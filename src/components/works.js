import React, { Component } from 'react';

const divStyle = {
	textAlign: 'center',
	margin: '20px',
	padding: '25px'
};

class Works extends Component {
	render() {
		return (
			<works style={divStyle}>

				<h1> Publications </h1>

				<li> <a href="http://www.rci.rutgers.edu/~tomie/Publications/Selected%20Recent%20Publications%202018.html"> Selected Recent Publications </a></li>

				<li> <a href="http://www.rci.rutgers.edu/~tomie/Publications/Publications%20August%202008.html"> Publications </a></li>

				<p> Awards/Honors </p>

				<li> <a href="http://www.rci.rutgers.edu/~tomie/US%20Military%20Awards.html"> US Army Military Awards, State of New Jersey Awards </a></li>

			</works>
		);
	}
}

export default Works;