import React from 'react';
import * as Array from 'd3-array';

export default function Panel({onObservationsChange, onPredictionChange}) {
	return (
		<form className="panel row">
			<button className="primary" onClick={onPredictionChange}>Get prediction</button>
			<button onClick={onObservationsChange}>Try another sample</button>
		</form>
	);
}
