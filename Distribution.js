import React from 'react';
import Scale from 'd3-scale';
import D3Array from 'd3-array';
import Histogram from 'Histogram';
import PredictionResultContainer from 'PredictionResultContainer';
import XAxis from 'XAxis';
import YAxis from 'YAxis';
import Percentiles from 'Percentiles';

const WIDTH = 650;
const HEIGHT = 400;
const MARGIN = 20;
const domain = [0, 1];
const xScale = Scale.scaleLinear().domain(domain).range([0, WIDTH]);

export default function Distribution({observations}) {
	const binsCount = D3Array.thresholdFreedmanDiaconis(observations, domain[0], domain[1]);
	const bins = D3Array.histogram().domain(domain).thresholds(binsCount)(observations);
	const yScale = Scale.scaleLinear().domain([0, D3Array.max(bins, b => b.length)]).range([HEIGHT, 0]);

	return (
		<svg width={WIDTH + MARGIN * 2} height={HEIGHT + MARGIN * 2}>
			<g transform={`translate(${MARGIN}, ${MARGIN})`}>
				<XAxis ticks={10} scale={xScale} width={WIDTH} height={HEIGHT} />
				<YAxis ticks={10} scale={yScale} width={WIDTH} height={HEIGHT} />
				<Histogram bins={bins} xScale={xScale} yScale={yScale} />
				<Percentiles observations={observations} xScale={xScale} yScale={yScale} />
				<PredictionResultContainer xScale={xScale} yScale={yScale} />
			</g>
		</svg>
	);
}
