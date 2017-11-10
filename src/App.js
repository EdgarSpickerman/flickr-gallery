import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLayout from './Components/MainLayout';
import ErrorLayout from './Components/ErrorLayout';
import SearchLayout from './Components/SearchLayout';

export default class App extends Component {
  render() {
				return (
						<BrowserRouter>
								<Switch>
										<Route exact path={`/`} component={MainLayout} />
										<Route exact path={`/art`} component={MainLayout} />
										<Route exact path={`/Inspiring`} component={MainLayout} />
										<Route exact path={`/computers`} component={MainLayout} />
										<Route exact path={`/search`} component={SearchLayout} />
										<Route exact path={`/search/:query`} component={SearchLayout} />
										<Route component={ErrorLayout} />
								</Switch>
						</BrowserRouter>
    );
  }
}