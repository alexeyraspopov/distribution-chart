import React from 'react';
import {Motion, spring} from 'react-motion';
import {precisePercentage} from 'Format';

const BLUE = '#3eb3f6';
const ORANGE = '#ff702c';

export default function Info({prediction, average, total}) {
	return (
		<section className="infoContainer">
			<div className="column">
				<Motion style={{x: spring(prediction)}}>
					{({x}) => <output>{precisePercentage(x)}</output>}
				</Motion>
				<label style={{color: 'red'}}>Your prediction</label>
			</div>
			<div className="column">
				<Motion style={{x: spring(average)}}>
					{({x}) => <output>{precisePercentage(x)}</output>}
				</Motion>
				<label style={{color: ORANGE}}>Average prediction</label>
			</div>
			<div className="column">
				<output>{total.toLocaleString('en-US')}</output>
				<label style={{color: BLUE}}>Total number of predictions</label>
			</div>
		</section>
	);
}
