import React from 'react'

import history from '../../service/history';

function Index() {
	function secondPage() {
		history.push("/abramge/signup")
	}
	return (
		<div>
			<h1>First Page</h1>
			<button onClick={() => secondPage()} >
			First Page where
			</button>
		</div>
	)
}

export default Index
