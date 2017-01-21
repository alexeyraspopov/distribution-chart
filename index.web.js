import React from 'react';
import ReactDOM from 'react-dom';
import DistributionContainer from 'DistributionContainer';
import PanelContainer from 'PanelContainer';
import InfoContainer from 'InfoContainer';

ReactDOM.render((
	<article className="row">
		<DistributionContainer />
		<section className="column justified">
			<InfoContainer />
			<PanelContainer />
		</section>
	</article>
), document.querySelector('main'));
