import React from 'react';
import {Motion, spring} from 'react-motion';
import {fixedPoint} from 'Format';

const ORANGE = '#ff702c';
const TICKS = [0.25, 0.5, 0.75];
const LABELS = ['LOW MED', 'MED', 'HIGH MED'];

export default function Percentiles({observations, xScale, yScale}) {
	const [y1, y2] = yScale.range();

	return (
		<g>
			{TICKS.map((t) => observations[Math.floor(t * observations.length)]).map((p, i) => (
				<Motion key={i} style={{x: spring(xScale(p))}}>
					{({x}) => (
						<g transform={`translate(${fixedPoint(x)}, 0)`}>
							<text y={-5} fontSize={8} 
								fontFamily="monospace" textAnchor="middle" children={LABELS[i]}
								fill={ORANGE} stroke={ORANGE} />
							<line y1={y1} y2={y2} stroke={ORANGE} strokeWidth={2} />
						</g>
					)}
				</Motion>
			))}
		</g>
	);
}
