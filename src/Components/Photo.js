import React, { Component } from 'react';

export default class Photo extends Component {
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
//https://farm${props.photo.farm}.staticflickr.com/${props.photo.server}/${props.photo.id}_${props.photo.secret}.jpg