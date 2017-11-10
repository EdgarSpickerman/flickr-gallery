import React, { Component } from 'react';
import apiKey from '../config';
import axios from 'axios';

import Navigation from './Navigation';
import SearchForm from './SearchForm';
import PhotoContainer from './PhotoContainer';

export default class SearchLayout extends Component {
		state = {
				isLoading: true,
				photos: []
		}

		componentDidMount() {
				if (this.props.match.params.query) {
						this.getPhotos(this.props.match.params.query);
				} else {
						this.setState({ photos: [], isLoading: false });
				}
		}

		componentWillReceiveProps(nextProps) {
				this.setState({ photos: [], isLoading: true })
				if (nextProps.match.path.toLowerCase() === '/search') {
						this.setState({isLoading: false});
				} else if (this.props.match.params.query !== nextProps.match.params.query) {
						this.getPhotos(nextProps.match.params.query);
				}
		}

		getPhotos = query => {
				axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=16&format=json&nojsoncallback=1`)
						.then(res => this.setState({ photos: res.data.photos.photo, isLoading: false }))
						.catch(err => console.log('error', err));
		}

		render() {
				return (
						<div className="container">
								<SearchForm history={this.props.history} handleData={this.getPhotos} />
								<Navigation />
								<PhotoContainer photos={this.state.photos} name={this.props.match.params.query} isLoading={this.state.isLoading} />
						</div>
				);
		}
}