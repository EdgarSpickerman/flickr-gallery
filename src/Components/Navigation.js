import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
		render() {
				return (
						<nav className="main-nav">
								<ul>
										<li><NavLink to='/art'>Art</NavLink></li>
										<li><NavLink to='/Inspiring'>Inspiring</NavLink></li>
										<li><NavLink to='/computers'>Computers</NavLink></li>
										<li><NavLink to='/search'>Search</NavLink></li>
								</ul>
						</nav>);
		}
}