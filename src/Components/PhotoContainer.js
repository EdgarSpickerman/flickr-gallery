import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Photo from './Photo';
import ResultTitle from './ResultTitle';
import NoResults from './NoResults';

export default class PhotoContainer extends Component {

		notFound = <li className="not-found" ><h3>No Results Found</h3><p>You search did not return any results. Please try again.</p></li>;

		render() {
				return (
						<div className="photo-container">

								{this.props.isLoading ? <h2>Loading...</h2> : ''}

								{this.props.photos.length ? <ResultTitle name={this.props.name} /> : ''}

								<ul>

										{this.props.photos ? this.props.photos.map(photo => <Photo key={photo.id} data={photo} />) : ''}

										{this.props.isLoading || this.props.name === undefined ? '' : <NoResults />}
								</ul>
						</div>
				);
		}
}

PhotoContainer.propTypes = {
		isLoading: PropTypes.bool.isRequired,
		name: PropTypes.string,
		photos: PropTypes.array.isRequired
};