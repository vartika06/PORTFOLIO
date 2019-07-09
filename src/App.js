import React, { Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import SideSection from './components/SideSection';
import Introduction from './components/Introduction';
import About from './components/About';
import Education from './components/Education';
import Work from './components/Work';

const App = () => {
	return (
		<Router>
			<Fragment>
				<SideSection />
				<Route exact path="/" component={Introduction} />
				<About />
				<Education />
				<Work />
			</Fragment>
		</Router>
	);
};

export default App;
