import React, { Component } from 'react';
import './App.css';
import './assets/css/freelancer.min.css';
import './assets/css/bootstrap.css';
import './assets/css/bootstrap-grid.css';
import './assets/font-awesome/css/font-awesome.css';
import './assets/scss/_footer.scss';
import './assets/scss/_bootstrap-overrides.scss';
import './assets/scss/_contact.scss';
import './assets/scss/_global.scss';
import './assets/scss/_masthead.scss';
import './assets/scss/_mixins.scss';
import './assets/scss/_navbar.scss';
import './assets/scss/_portfolio.scss';
import './assets/scss/_variables.scss';
import './assets/scss/freelancer.scss';
import Header from './Layout/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
            <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
          <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Portfolio</a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Header />

        <section className="portfolio" id="portfolio">
          <div className="container">
            <h2 className="text-center text-uppercase text-secondary mb-0">Portfolio</h2>
            <hr className="star-dark mb-5" />
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
                  <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                      <i className="fa fa-search-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={require("./images/portfolio/cabin.png")} alt="" />
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-2">
                  <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                      <i className="fa fa-search-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={require("./images/portfolio/cake.png")} alt="" />
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-3">
                  <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                      <i className="fa fa-search-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={require("./images/portfolio/circus.png")} alt="" />
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-4">
                  <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                      <i className="fa fa-search-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={require("./images/portfolio/game.png")} alt="" />
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-5">
                  <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                      <i className="fa fa-search-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={require("./images/portfolio/safe.png")} alt="" />
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
                  <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                      <i className="fa fa-search-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={require("./images/portfolio/submarine.png")} alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>


        <section className="bg-primary text-white mb-0" id="about">
          <div className="container">
            <h2 className="text-center text-uppercase text-white">About</h2>
            <hr className="star-light mb-5" />
            <div className="row">
              <div className="col-lg-4 ml-auto">
                <p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization.</p>
              </div>
              <div className="col-lg-4 mr-auto">
                <p className="lead">Whether you're a student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, this template is the perfect starting point!</p>
              </div>
            </div>
            <div className="text-center mt-4">
              <a className="btn btn-xl btn-outline-light" href="/">
                <i className="fa fa-download mr-2"></i>
                Download Now!
          </a>
            </div>
          </div>
        </section>


        <section id="contact">
          <div className="container">
            <h2 className="text-center text-uppercase text-secondary mb-0">Contact Me</h2>
            <hr className="star-dark mb-5" />
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <form name="sentMessage" id="contactForm" >
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Name</label>
                      <input className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Email Address</label>
                      <input className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Phone Number</label>
                      <input className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Message</label>
                      <textarea className="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <br />
                  <div id="success"></div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Location</h4>
                <p className="lead mb-0">2215 John Daniel Drive
              <br />Clark, MO 65243</p>
              </div>
              <div className="col-md-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Around the Web</h4>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="/">
                      <i className="fa fa-fw fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="/">
                      <i className="fa fa-fw fa-google-plus"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="/">
                      <i className="fa fa-fw fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="/">
                      <i className="fa fa-fw fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="/">
                      <i className="fa fa-fw fa-dribbble"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h4 className="text-uppercase mb-4">About Freelancer</h4>
                <p className="lead mb-0">Freelance is a free to use, open source Bootstrap theme created by
              <a href="http://startbootstrap.com">Start Bootstrap</a>.</p>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright py-4 text-center text-white">
          <div className="container">
            <small>Copyright &copy; Your Website 2018</small>
          </div>
        </div>

        <div className="scroll-to-top d-lg-none position-fixed ">
          <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
            <i className="fa fa-chevron-up"></i>
          </a>
        </div>


        <div className="portfolio-modal mfp-hide" id="portfolio-modal-1">
          <div className="portfolio-modal-dialog bg-white">
            <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="/">
              <i className="fa fa-3x fa-times"></i>
            </a>
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                  <hr className="star-dark mb-5" />
                  <img className="img-fluid mb-5" src={require("./images/portfolio/cabin.png")} alt="" />
                  <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                  <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="/">
                    <i className="fa fa-close"></i>
                    Close Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="portfolio-modal mfp-hide" id="portfolio-modal-2">
          <div className="portfolio-modal-dialog bg-white">
            <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="/">
              <i className="fa fa-3x fa-times"></i>
            </a>
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                  <hr className="star-dark mb-5" />
                  <img className="img-fluid mb-5" src={require("./images/portfolio/cake.png")} alt="" />
                  <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                  <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="/">
                    <i className="fa fa-close"></i>
                    Close Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="portfolio-modal mfp-hide" id="portfolio-modal-3">
          <div className="portfolio-modal-dialog bg-white">
            <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="/">
              <i className="fa fa-3x fa-times"></i>
            </a>
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                  <hr className="star-dark mb-5" />
                  <img className="img-fluid mb-5" src={require("./images/portfolio/circus.png")} alt="" />
                  <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                  <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="/">
                    <i className="fa fa-close"></i>
                    Close Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-modal mfp-hide" id="portfolio-modal-4">
          <div className="portfolio-modal-dialog bg-white">
            <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="/">
              <i className="fa fa-3x fa-times"></i>
            </a>
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                  <hr className="star-dark mb-5" />
                  <img className="img-fluid mb-5" src={require("./images/portfolio/game.png")} alt="" />
                  <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                  <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="/">
                    <i className="fa fa-close"></i>
                    Close Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="portfolio-modal mfp-hide" id="portfolio-modal-5">
          <div className="portfolio-modal-dialog bg-white">
            <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="/">
              <i className="fa fa-3x fa-times"></i>
            </a>
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                  <hr className="star-dark mb-5" />
                  <img className="img-fluid mb-5" src={require("./images/portfolio/safe.png")} alt="" />
                  <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                  <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="/">
                    <i className="fa fa-close"></i>
                    Close Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="portfolio-modal mfp-hide" id="portfolio-modal-6">
          <div className="portfolio-modal-dialog bg-white">
            <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="/">
              <i className="fa fa-3x fa-times"></i>
            </a>
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                  <hr className="star-dark mb-5" />
                  <img className="img-fluid mb-5" src={require("./images/portfolio/submarine.png")} alt="" />
                  <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                  <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="/">
                    <i className="fa fa-close"></i>
                    Close Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default App;
