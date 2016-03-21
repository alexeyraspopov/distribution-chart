import React from 'react';
import ReactDOM from 'react-dom';
import ReactPerf from 'react/lib/ReactDefaultPerf';
import DistributionContainer from 'DistributionContainer';
import PanelContainer from 'PanelContainer';
import InfoContainer from 'InfoContainer';

ReactDOM.render((
	<article className="row">
		<section className="column">
			<DistributionContainer />
		</section>
		<section className="column justified">
			<InfoContainer />
			<PanelContainer />
		</section>
	</article>
), document.querySelector('main'));

window.Perf = ReactPerf;
window.React = React;
