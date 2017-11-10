import React, { Component } from 'react';

export default class ResultTitle extends Component {

		render() {
				return (
						this.props.name ? <h2>{this.props.name}</h2> : ''
				);
		}
}