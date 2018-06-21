import React, { Component } from 'react';
import './App.css';
import Header from './Layout/Header/Header';
import Navigation from './Layout/Navigation/Navigation';
import ProjectPortfolio from './ProjectPortfolio/ProjectPortfolio';
import Contact from './Contact/Contact';
import Footer from './Layout/Footer/Footer';
import About from './About/About';
import Modals from './Layout/UI/Modals/Modals';

class App extends Component {
  
  state = {
    projectData: []
}

  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <section className="portfolio" id="portfolio">
          <div className="container">
            <h2 className="text-center text-uppercase text-secondary mb-0">Portfolio</h2>
            <hr className="star-dark mb-5" />
            <div className="row">
              <ProjectPortfolio />
            </div>

          </div>
        </section>

        <section className="bg-primary text-white mb-0" id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
