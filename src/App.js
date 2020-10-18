import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

// components
import Header from './components/layout/Header.js';
import Footer from './components/layout/Footer.js';

// routing
import Main from './components/Main.js'
import About from './components/pages/About.js'
import Works from './components/pages/Works.js'

// sass
import './App.scss';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />

       
              <Route exact path="/" component={Main} />
              <Route path="/works" component={Works} />
              <Route path="/about" component={About} />
       

        <Footer />

      </div>
    </Router>
  );
}

export default App;
