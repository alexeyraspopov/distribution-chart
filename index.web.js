import React from 'react';
import ReactDOM from 'react-dom';
import ReactPerf from 'react/lib/ReactDefaultPerf';
import PanelContainer from 'PanelContainer';
import InfoContainer from 'InfoContainer';

ReactDOM.render((
	<article className="row">
			<InfoContainer />
			<PanelContainer />
	</article>
), document.querySelector('main'));

window.Perf = ReactPerf;
window.React = React;
