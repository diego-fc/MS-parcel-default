import React from 'react'

import history from '../../service/history';

function Index() {
	function secondPage() {
		history.push("/abramge/signin")
	}
	return (
		<div>
			<h1>Second Page</h1>
			<button onClick={() => secondPage()} >
				First Page where
			</button>
		</div>
	)
}

export default Index
