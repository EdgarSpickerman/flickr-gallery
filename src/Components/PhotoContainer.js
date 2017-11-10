import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Photo from './Photo';
import ResultTitle from './ResultTitle';
import NoResults from './NoResults';

export default class PhotoContainer extends Component {

		render() {
				return (
						<div className="photo-container">
								{/* if the application is in a loading state display the loading message*/}
								{this.props.isLoading ? <h2>Loading...</h2> : ''}

								{/* if more than zero photos then display category/search query as name */}
								{this.props.photos.length ? <ResultTitle name={this.props.name} /> : ''}

								<ul>
										{/* iterates thru the photo array passed down to create photo components*/}
										{this.props.photos ? this.props.photos.map(photo => <Photo key={photo.id} data={photo} />) : ''}

										{/*No Results are displayed when there is zero photos,the app isnt loading, and the app isnt on the search page*/}
										{this.props.photos.length || this.props.isLoading || this.props.name === undefined ? '' : <NoResults />}
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