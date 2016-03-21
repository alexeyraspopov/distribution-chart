import React from 'react';
import Shape from 'd3-shape';
import MotionPath from 'MotionPath';

const BLUE = '#3eb3f6';

export default function Histogram({bins, xScale, yScale}) {
	const getX = (a) => xScale((a.x0 + a.x1) / 2);
	const getY = (a) => yScale(a.length);

	const line = Shape.line().x(getX).y(getY).curve(Shape.curveBasis)(bins);

	return (
		<g className="histogram">
			<defs>
				<pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width={4} height={4}>
					<path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" stroke="black" strokeWidth={1} />
				</pattern>
			</defs>
			<MotionPath path={line}>
				{(d) => <path d={d} stroke={BLUE} fill="url(#diagonalHatch)" strokeWidth={2} />}
			</MotionPath>
		</g>
	);
}
