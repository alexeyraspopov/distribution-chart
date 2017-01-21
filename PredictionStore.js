import ReduceStore from 'flux/lib/FluxReduceStore';
import Dispatcher from 'Dispatcher';
import * as Random from 'd3-random';

const predictionGenerator = Random.randomNormal(0.5, 0.15);

class PredictionStore extends ReduceStore {
	getInitialState() {
		return predictionGenerator();
	}

	reduce(state, action) {
		switch (action.type) {
		case 'PREDICTION_CHANGED':
			return predictionGenerator();
		default:
			return state;
		}
	}
}

export default new PredictionStore(Dispatcher);
