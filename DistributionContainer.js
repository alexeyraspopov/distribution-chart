import React from 'react';
import Container from 'flux/lib/FluxContainer';
import Distribution from 'Distribution';
import ObservationsStore from 'ObservationsStore';
import Scale from 'd3-scale';
import D3Array from 'd3-array';

class DistributionContainer extends React.Component {
	static getStores() {
		return [ObservationsStore];
	}

	static calculateState() {
		return {
			observations: ObservationsStore.at('observations'),
		};
	}

	render() {
		return <Distribution
			observations={this.state.observations} />;
	}
}

export default Container.create(DistributionContainer);
