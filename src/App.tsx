import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
// import Projects from './components/Projects/Projects';
// import About from './components/About/About';

function App() {
	return (
		<div className='App'>
			<Header />
			<Skills />
			{/* <Projects />
			<About /> */}
		</div>
	);
}

export default App;
