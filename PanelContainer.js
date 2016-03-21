import React from 'react';
import Panel from 'Panel';
import Dispatcher from 'Dispatcher';

export default class PanelContainer extends React.Component {
	changeObservations(event) {
		event.preventDefault();
		Dispatcher.dispatch({type: 'OBSERVATIONS_CHANGED'});
	}

	changePrediction(event) {
		event.preventDefault();
		Dispatcher.dispatch({type: 'PREDICTION_CHANGED'});
	}

	render() {
		return <Panel
			onObservationsChange={(event) => this.changeObservations(event)}
			onPredictionChange={(event) => this.changePrediction(event)} />;
	}
}
