import React, { Component } from 'react';

export default class ResultTitle extends Component {
		// if the category or search query is not search then display it as the title
		render() {
				return (
						this.props.name ? <h2>{this.props.name}</h2> : ''
				);
		}
}