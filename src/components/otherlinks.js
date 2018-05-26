import React, { Component } from 'react';
import newbrunswickimg from './newbrunswick.jpg';
import rutgersmain from './rutgersmainpage.png';
import rutgerssearch from './rutgerssearch.png';
import './otherlinks.css';

const divStyle = {
	textAlign: 'center',
	margin: '0px',
	padding: '0px'
};


class OtherLinks extends Component {
	render() {
		return (


			<ol style={divStyle}>

				<div id ="linksback">

							<a href="https://search.rutgers.edu"><img src={rutgerssearch} id="searchpage"/></a>


							<a href="https://newbrunswick.rutgers.edu"><img src={newbrunswickimg} id="newbruns"/></a>

						
							<a href="https://www.rutgers.edu"><img src={rutgersmain} id="mainpage"/></a>	

				</div>									
			

			</ol>
		);
	}
}

export default OtherLinks;