import React, { Component } from 'react';

export default class Photo extends Component {
		//get the properties of photo to create the photo src url
		id = this.props.data.id;
		farm = this.props.data.farm;
		server = this.props.data.server;
		secret = this.props.data.secret;
		render() {
				return (
						<li>
								<img src={`https://farm${this.farm}.staticflickr.com/${this.server}/${this.id}_${this.secret}.jpg`} alt="" />
						</li>
				);
		}
}