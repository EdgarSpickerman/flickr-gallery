import React, { Component } from 'react';

import Navigation from './Navigation';

export default class ErrorLayout extends Component {
		render() {
				return (
						<div className="container">
								<Navigation />
								<h2>The Page you requested cannot be found!!!</h2>
								<p>Please click on the navigation bar above to be redirected to a category or page.</p>
						</div>
				);
		}
}