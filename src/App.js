import React from 'react';
// import logo from './logo.svg';
import PortfolioLinks from './components/Portfolio'
import RenderIFrame from './components/RenderIFrame'
import './App.css';

// Imported stylesheet
import "./styles/all.css";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      debug:true,
    }
  }

  render() {

    const portfolioLinks = [
    {
      title: 'New York City',
      img: require('./assets/img/state_ny.png'),
      caption: ''
    },
    {
      title: 'Boston',
      img: require('./assets/img/state_mass.png'),
      caption: '(Coming Soon)'
    },
    {
      title: 'Chicago',
      img: require('./assets/img/state_il.png'),
      caption: '(Coming Soon)'
    },
    {
      title: 'Atlanta',
      img: require('./assets/img/state_georgia.png'),
      caption: '(Coming Soon)'
    },
    {
      title: 'San Francisco',
      img: require('./assets/img/state_cal.png'),
      caption: '(Coming Soon)'
    },
    {
      title: 'Denver',
      img: require('./assets/img/state_col.png'),
      caption: '(Coming Soon)'
    },
    {
      title: 'Miami',
      img: require('./assets/img/state_florida.png'),
      caption: '(Coming Soon)'
    }
  ]

    return (
    <div className="App">
      <nav id="mainNav" className={ (this.state.debug) ? "customMainNav navbar navbar-expand-lg navbar-dark" : "navbar navbar-expand-lg navbar-dark fixed-top"}>
        <div className={ (this.state.debug) ? "customNavContainer container" : "container"}>
          <a className="navbar-brand js-scroll-trigger" href="#page-top">Crime Watch</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu<i className="fa fa-bars"></i></button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className={ (this.state.debug) ? "navbar-nav text-uppercase ml-auto" : "navbar-nav text-uppercase ml-auto"}>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Locations</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#team">Team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>


  <header className="masthead">
    <div className="container" style={style1}>
      <div className="intro-text">
        <div className="intro-lead-in">Welcome To Crime Watch!</div>
        <div className="intro-heading text-uppercase">Start Monitoring Crime Near You</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
      </div>
    </div>
  </header>


  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">Interactive Data Visualizations using real Crime Data.</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-database fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Highest Quality Data</h4>
          <p className="text-muted">We aggregated and cleaned the largest data sets available for crime within New York City including all datasets available from NYC Open Data. Extensive data cleaning and data processing was done to lay the groundwork for our project using best practices.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Responsive Design</h4>
          <p className="text-muted">Our team has used the latest and most state of the art technologies available to create a seamless user experience and provide all the functionalities necessary to truly visualize Crime Data.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-map fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Interactive Map</h4>
          <p className="text-muted">Using our state of the art interactive map, you can visualize crime data in ways which have never been done before.  Visualize crime by type of crime committed, time of day, day of the week, or even by race.</p>
        </div>
      </div>
    </div>
  </section>

  <div className="cartoWindow">
    <RenderIFrame />
      <PortfolioLinks links={portfolioLinks} debug={this.state.debug}></PortfolioLinks>
  </div>


  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">Our project focuses on leveraging temporal and spatial aspects of police crime reports
to create an informative visualisation tool about the distribution of crime throughout NYC
over time. Our dashboard will provide users a method to see what kind of crimes occur
in the city based on location and time. While we are focusing on visualizing crime rates,
a well-designed solution could also help citizens, police, fire departments and
emergency medical services with optimizing the positioning of essential services and
informing safe routes throughout the city.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4></h4>
                  <h4 className="subheading">What is the problem you are trying to tackle?</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">In a densely populated city like New York, there will inevitably be criminal elements that
congregate, usually concentrated to operate in particular regions. For residents and
visitors, knowing what are the highest risk areas is an ongoing concern and for public
services it is a necessity.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>February 2020</h4>
                  <h4 className="subheading">Project Start</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Problem Definition, Background Research, Data Collection and Identifying tooling/libraries.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>March 2020</h4>
                  <h4 className="subheading">Refining and Building</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Data cleansing and pre-processing, building initial visualization with sample data, final structure outlined.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>April 2020</h4>
                  <h4 className="subheading">Transition to Full Service</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Finalization of data visualizations and integration into a highly-responsive web app.  Highly Extensible design for continuation of project for additional cities with seamless integration. </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>More
                  <br/>To
                  <br/>Come!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>


  <section className="bg-light page-section" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 className="section-subheading text-muted">This project would not have been possible without the dedication of all of our team members to the mission of making an impact on crime and safety in all neighborhoods globally.  Our mission is to utilize the latest technology available to work towards making the world a safer place for everyone.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="https://ca.slack-edge.com/T02THST8H-UMDG4E9S7-5f03805a2264-512" alt=""/>
            <h4>Masud Ahmed</h4>
            <p className="text-muted">Full-Stack Engineer</p>
            {!this.state.debug && <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
            }
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="https://ca.slack-edge.com/T02THST8H-UMDG4MVNX-6b72cae92afd-512" alt=""/>
            <h4>Kieran Taylor</h4>
            <p className="text-muted">Data Visualizations Engineer</p>
            {!this.state.debug && <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
            }
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="https://ca.slack-edge.com/T02THST8H-UMDG4CMV1-27f875e7faa5-512" alt=""/>
            <h4>Ryan Kim</h4>
            <p className="text-muted">Lead Data Engineer</p>
            {!this.state.debug && <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
            }
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted"></p>
        </div>
      </div>
    </div>
  </section>


  <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt=""/>
          </a>
        </div>
      </div>
    </div>
  </section>


  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted">For state of the art crime data science and visualizations.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>


  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; CrimeWatch 2020</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#something">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="#something">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
  }
}

let imgUrl = './assets/img/map-image.png'
let style1 = {
        backgroundImage: 'url(' + imgUrl + ')',
        backgroundSize: 'cover',
        overflow: 'hidden',
}

export default App;
