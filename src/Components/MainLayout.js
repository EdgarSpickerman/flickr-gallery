import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../config';

import Navigation from './Navigation';
import PhotoContainer from './PhotoContainer';

export default class MainLayout extends Component {

		state = {
				isLoading:true,
				photos: []
		}

		//when the router mountes this mainLayout component it performs a getRequest
		componentDidMount() {
				this.getPhotos(this.props.match.path.slice(1)||'fruits');
		}

		//when the mainLayout Component recieves new props that are different performs a get request
		//set the loading state and photos to showcase a loading screen
		componentWillReceiveProps(nextProps) {
				if (this.props.match.path !== nextProps.match.path) {
						this.setState({ photos: [], isLoading: true });
						this.getPhotos(nextProps.match.path.slice(1));
				}
		}

		//performs the get request updates state on a successful call
		getPhotos = query => {
				axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=16&format=json&nojsoncallback=1`)
						.then(res => this.setState({ photos: res.data.photos.photo, isLoading: false }))
						.catch(err => {
								this.setState({ photos: [], isLoading: false });
								console.log('error', err);
						});
		}

		render() {
				return (
						<div className="container">
								<Navigation />
								<PhotoContainer photos={this.state.photos} name={this.props.match.path.slice(1)||'featured'} isLoading={this.state.isLoading} />
						</div>
				);
		}
}