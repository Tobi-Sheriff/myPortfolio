import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const TMA = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="section">
          <div className="col pl-0">
            <h2 className="skill-h pink">The Movie Archive
              <span style={{ fontSize: '15px' }}><a href="https://themoviearchive.tobisheriff.com.ng">Project link</a></span>
            </h2>
          </div>
          <p className="p-text">
            The Movie Archive is a web application that allows users search for movies and and it showcase useful information about a movie.
          </p>

          <h3 className="pink" style={{ fontSize: '25px' }}>Features</h3>
          <marquee behavior="scroll" direction="left" height="50">
            <span>Movie Catalog</span>
            <span>Search Functionality</span>
            <span>Movie Recommendations</span>
            <span>User Comments</span>

            <span>Hightlights Test Scenarios</span>
            <span>Test Case Implementation</span>
            <span>API Testing and Documentation</span>
            <span>CI/CD Implementation</span>
          </marquee>

          <h3 className="pink" style={{ fontSize: '25px' }}>Technologies</h3>
          <marquee behavior="scroll" direction="left" height="50">
            <span>HTML</span>
            <span>CSS & Bootstrap</span>
            <span>Javascript</span>
            <span>Nodejs</span>
            <span>Express</span>
            <span>PostgreSQL</span>
            <span>Sequelize</span>
            <span>Jest</span>
            <span>Postman</span>
            <span>Github Actions</span>
          </marquee>
        </div>

        <div className="section">
          <h3>Screenshots</h3>
          <img src="/images/Screenshot_1.png" alt="" width="800px" style={{ marginBottom: '30px', border: '1px solid grey' }} />
          <img src="/images/Screenshot_2.png" alt="" width="800px" style={{ marginBottom: '30px', border: '1px solid grey' }} />
          <img src="/images/Screenshot_3.png" alt="" width="800px" style={{ marginBottom: '30px', border: '1px solid grey' }} />
          <img src="/images/Screenshot_4.png" alt="" width="800px" style={{ marginBottom: '30px', border: '1px solid grey' }} />
          <img src="/images/Screenshot_5.png" alt="" width="800px" style={{ marginBottom: '30px', border: '1px solid grey' }} />
          <img src="/images/Screenshot_6.png" alt="" width="800px" style={{ marginBottom: '30px', border: '1px solid grey' }} />
          <img src="/images/Screenshot_7.png" alt="" width="800px" style={{ marginBottom: '30px', border: '1px solid grey' }} />

        </div>

        <h4>Github links</h4>
        <p>Authentication in progress...</p>

        <a href="https://github.com/Tobi-Sheriff/movie-archive">Github Backend link</a>
        <br />
        <a href="https://github.com/Tobi-Sheriff/movie-archive-frontend">Github Frontend link</a>
      </div>
      <Footer />
    </>
  );
};

export default TMA;
