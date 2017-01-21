import React from 'react';
import {Motion, spring} from 'react-motion';
import * as Interpolate from 'd3-interpolate';

export default class MotionPath extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			interpolate: () => this.props.path,
			direction: 1,
			style: {x: 0},
		};
		this.interpolateChild = (value) => this.props.children(this.state.interpolate(value.x));
	}

	componentWillReceiveProps(nextProps) {
		let interpolate;

		if (!this.shouldComponentUpdate(nextProps)) {
			return;
		}

		if (this.state.direction === 1) {
			interpolate = Interpolate.interpolateString(this.props.path, nextProps.path);
		} else {
			interpolate = Interpolate.interpolateString(nextProps.path, this.props.path);
		}

		this.setState({
			interpolate,
			direction: 1 - this.state.direction,
			style: {x: spring(this.state.direction)},
		});
	}

	shouldComponentUpdate(nextProps) {
		return this.props.path !== nextProps.path;
	}

	render() {
		return <Motion style={this.state.style} children={this.interpolateChild} />;
	}
}
