import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="header section">
          <span className="myName">SALAMI SHERIFF OLUWATOBILOBA</span>
          <p className="p-text">
            I am an enthusiastic programmer and a gamer who wants to know more.
            I have always been fascinated by tech and the wonderful things that can be achieved with it.
            I have embarked on a journey in learning more about programming and spreading this same fascination to others by building interesting, exciting websites and apps.
          </p>
          <button className="btn">Creator Journey</button>
        </div>

        <div className="skill-sets" id="skill-sets">
          <div className="col pl-0">
            <h3 className="skill-h pink">Skill-Set</h3>
          </div>

          <div className="row">
            <div className="col shadow p-3 mb-3 rounded">
              <i className="fab fa-js fa-2x pink"><span className="white">Javascript</span></i>
            </div>
            <div className="col shadow p-3 mb-3 rounded">
              <i className="fab fa-html5 fa-2x pink"><span className="white">HTML</span></i>
            </div>
            <div className="col shadow p-3 mb-3 rounded">
              <i className="fab fa-css3 fa-2x pink"><span className="white">CSS</span></i>
            </div>
          </div>

          <div className="row">
            <div className="col shadow p-3 mb-3 rounded">
              <i className="fab fa-node-js fa-2x pink"><span className="white">NodeJS</span></i>
            </div>
            <div className="col shadow p-3 mb-3 rounded">
              <i><span className="white">Express js</span></i>
            </div>
            <div className="col shadow p-3 mb-3 rounded">
              <i className="fas fa-database fa-2x pink"><span className="white">Postgres</span></i>
            </div>
          </div>

          <div className="row section">
            <div className="col shadow p-3 mb-3 rounded">
              <i><span className="white">Sequelize</span></i>
            </div>
            <div className="col shadow p-3 mb-3 rounded">
              <i><span className="white">Mongoose</span></i>
            </div>
            <div className="col shadow p-3 mb-3 rounded">
              <i className="fas fa-database fa-2x pink"><span className="white">MongoDB</span></i>
            </div>
          </div>
        </div>

        <div className="section" id="projects">
          <div className="col pl-0">
            <h3 className="skill-h pink">Projects</h3>
          </div>
          <h3 className="white">The Movie Archive</h3>
          <p className="p-text">
            The Movie Archive is a web application that allows users search for movies and and it showcase useful information about a movie.
          </p>
          <span>User Authentication is coming...</span>
          <p>
            <Link to="/tma">View details</Link>
          </p>
        </div>

        <div className="contact" id="contact">
          <h3 className="pink mb-4">Connect with me</h3>
          <form className="form-group" action="mailto:sheriffsalami@gmail.com" method="post" encType="text/plain">
            <input type="email" placeholder="Email" className="form-control mb-4" />
            <input type="text" placeholder="Message" className="form-control mb-4" />
            <button className="btn">Stay Connected</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
