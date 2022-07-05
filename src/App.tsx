import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
	const [headerText, setHeaderText] = useState(true);

	return (
		<div className='App'>
			<Nav />
			<Header textVisible={headerText} />
			<Skills />
			<Projects setHeaderText={setHeaderText} />
			<About />
			<Contact />
		</div>
	);
}

export default App;
