import React from 'react';
import Container from 'flux/lib/FluxContainer';
import PredictionResult from 'PredictionResult';
import PredictionStore from 'PredictionStore';

class PredictionResultContainer extends React.Component {
	static getStores() {
		return [PredictionStore];
	}

	static calculateState(xScale, yScale) {
		return {
			prediction: PredictionStore.getState(),
		}
	}

	render() {
		return <PredictionResult
			prediction={this.state.prediction}
			xScale={this.props.xScale}
			yScale={this.props.yScale} />;
	}
}

export default Container.create(PredictionResultContainer, {withProps: true});
