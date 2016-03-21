import React from 'react';
import {TransitionMotion, spring} from 'react-motion';
import {fixedPoint} from 'Format';

export default function YAxis({ticks, scale, width, height}) {
	const styles = scale.ticks(ticks).map((t) => ({
		key: String(t),
		data: t,
		style: {
			x: spring(scale(t)),
			opacity: spring(1),
		},
	}));

	return (
		<TransitionMotion styles={styles} willLeave={willLeave} willEnter={willEnter}>
			{(styles) => (
				<g className="axis">
					{styles.map(({key, data, style}) => (
						<g key={key}
							transform={`translate(0, ${fixedPoint(style.x)})`}
							opacity={fixedPoint(style.opacity)}>

							<text x={-10} y={2} children={data} />
							<line x2={width} strokeOpacity={0.2} strokeDasharray="1" />
						</g>
					))}
				</g>
			)}
		</TransitionMotion>
	);
}

function willLeave({style}) {
	return {x: style.x, opacity: spring(0)};
}

function willEnter({style}) {
	return {x: style.x.val, opacity: 0};
}
