import React from 'react';
import Container from 'flux/lib/FluxContainer';
import Info from 'Info';
import ObservationsStore from 'ObservationsStore';
import PredictionStore from 'PredictionStore';

class InfoContainer extends React.Component {
	static getStores() {
		return [ObservationsStore, PredictionStore];
	}

	static calculateState() {
		return {
			observations: ObservationsStore.at('observations'),
			prediction: PredictionStore.getState(),
		};
	}

	render() {
		const {prediction, observations} = this.state;

		return (
			<Info prediction={prediction}
				average={observations[Math.floor(observations.length * 0.5)]}
				total={observations.length} />
		);
	}
}

export default Container.create(InfoContainer);
