import React from 'react';
import Format from 'd3-format';
import {percentage} from 'Format';

export default function XAxis({ticks, scale, width, height}) {
	const [x1, x2] = scale.range();

	return (
		<g className="axis" transform={`translate(0, ${height})`}>
			<line x1={x1} x2={x2} y1={1} y2={1} />
			{scale.ticks(ticks).map((t) => (
				<g key={t} transform={`translate(${scale(t)}, 0)`}>
					<text y={15} children={percentage(t)} />
					<line y1={1} y2={6} />
				</g>
			))}
		</g>
	);
}
