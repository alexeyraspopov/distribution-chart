import React from 'react';
import {Motion, spring} from 'react-motion';
import {fixedPoint} from 'Format';

export default function PredictionResult({prediction, xScale, yScale}) {
	const target = xScale(prediction);
	const [y1, y2] = yScale.range();

	return (
		<Motion style={{x: spring(target)}}>
			{({x}) => <line x1={fixedPoint(x)} x2={fixedPoint(x)} y1={y1} y2={y2} stroke="red" strokeWidth={1} />}
		</Motion>
	);
}
