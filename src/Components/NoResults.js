import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NoResults extends Component {

		render() {
				return (
						<li className="not-found" >
								<h3>No Results Found</h3>
								<p>You search did not return any results. Please try again.</p>
						</li>
				);
		}
}

NoResults.propTypes = {
};