import React from 'react';

const NoResults = () => {
		//returns the not-found li item for searches with zero results
		return (
				<li className="not-found" >
						<h3>No Results Found</h3>
						<p>You search did not return any results. Please try again.</p>
				</li>
		);
}
export default NoResults;