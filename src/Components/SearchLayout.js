import React, { Component } from 'react';
import apiKey from '../config';
import axios from 'axios';

import Navigation from './Navigation';
import SearchForm from './SearchForm';
import PhotoContainer from './PhotoContainer';

export default class SearchLayout extends Component {
		state = {
				isLoading: false,
				photos: []
		}

		//when the router mountes this searchLayout component it performs a getRequest
		//if the route is a query route it performs the get request
		componentDidMount() {
				if (this.props.match.params.query) {
						this.getPhotos(this.props.match.params.query);
				} 
		}

			//when the searchLayout Component recieves new props that are different performs a get request
		//set the loading state and photos to showcase a loading screen
		componentWillReceiveProps(nextProps) {
				this.setState({ photos: [], isLoading: true });
				if (nextProps.match.path.toLowerCase() === '/search') {
						this.setState({isLoading: false});
				} else if (this.props.match.params.query !== nextProps.match.params.query) {
						this.getPhotos(nextProps.match.params.query);
				}
		}

		//performs the get request updates state on a successful call
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