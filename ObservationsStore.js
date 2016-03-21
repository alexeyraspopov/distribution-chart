import MapStore from 'flux/lib/FluxMapStore';
import {Map} from 'immutable';
import Dispatcher from 'Dispatcher';
import Random from 'd3-random'; 
import Array from 'd3-array';

const predictionGenerator = Random.randomNormal(0.5, 0.15);

function getRandomObservations() {
	return Array.range(1000).map(predictionGenerator).sort();
}

class ObservationsStore extends MapStore {
	getInitialState() {
		return new Map({
			observations: getRandomObservations(),
		});
	}

	reduce(state, action) {
		switch (action.type) {
		case 'OBSERVATIONS_CHANGED':
			return state.set('observations', getRandomObservations());
		default:
			return state;
		}
	}
}

export default new ObservationsStore(Dispatcher);
