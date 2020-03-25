import React from 'react';

import MainSidebar from './components/MainSidebar';
import Header from './components/Header';
import MainCards from './components/MainCards';
import MainChart from './components/MainChart';
import MainRanking from './components/MainRanking';
import MainAdv from './components/MainAdv';

import './dashboard.css';

function App() {

	return (
		<React.Fragment>
				<MainSidebar />
				<div className="main-container">
					<Header />
					<MainCards />
					<MainChart />
					<MainRanking />
					<MainAdv />
				</div>
		</React.Fragment>
	);
}

export default App;
