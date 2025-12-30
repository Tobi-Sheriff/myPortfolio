import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <>
      <Navbar />
      <div className="container">

        {/* Hero Section */}
        <motion.div
          className="header section text-center text-lg-start"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants} className="display-4 fw-bold mb-4">
            SALAMI SHERIFF <span className="pink">OLUWATOBILOBA</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="lead mb-5" style={{ maxWidth: '800px' }}>
            I am an enthusiastic programmer and a gamer who wants to know more.
            I have always been fascinated by tech and the wonderful things that can be achieved with it.
            I have embarked on a journey in learning more about programming and spreading this same fascination to others by building interesting, exciting websites and apps.
          </motion.p>
          <motion.button variants={itemVariants} className="btn btn-custom">
            Creator Journey
          </motion.button>
        </motion.div>

        {/* Skills Section */}
        <div className="skill-sets section" id="skill-sets">
          <motion.h3
            className="skill-h pink mb-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Skill-Set
          </motion.h3>

          <div className="row g-4">
            {['Javascript', 'HTML', 'CSS', 'NodeJS', 'Express js', 'Postgres', 'Sequelize', 'Mongoose', 'MongoDB'].map((skill, index) => (
              <motion.div
                key={index}
                className="col-md-4 col-sm-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="glass-card p-4 text-center h-100 d-flex flex-column align-items-center justify-content-center">
                  {/* Icons logic can be refined, using a generic icon for now if specific mapped icon is complex */}
                  <i className={`fab fa-${skill.toLowerCase().replace(' ', '')} fa-3x pink mb-3`}></i>
                  {/* Fallback for icons that don't match fontawesome names exactly would be needed in a real scenario, keeping simple for migration */}
                  <span className="text-white fs-5">{skill}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="section" id="projects">
          <motion.h3
            className="skill-h pink mb-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h3>

          <motion.div
            className="glass-card p-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="row align-items-center">
              <div className="col-md-6">
                <h3 className="text-white">The Movie Archive</h3>
                <p className="p-text my-4">
                  The Movie Archive is a web application that allows users to search for movies and showcases useful information about them.
                </p>
                <p className="text-muted fst-italic mb-4">User Authentication is coming...</p>
                <Link to="/tma">
                  <button className="btn btn-custom">View Details</button>
                </Link>
              </div>
              <div className="col-md-6 text-center">
                {/* Placeholder for project image if available, or just an icon */}
                <i className="fas fa-film fa-5x text-secondary opacity-50"></i>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Section */}
        <div className="contact section" id="contact">
          <motion.h3
            className="pink mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Connect with me
          </motion.h3>

          <motion.form
            className="form-group mx-auto glass-card p-5"
            style={{ maxWidth: '600px' }}
            action="mailto:sheriffsalami@gmail.com"
            method="post"
            encType="text/plain"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <input type="email" placeholder="Your Email" className="form-control mb-4 bg-transparent text-white border-secondary" style={{ height: '50px' }} />
            <textarea placeholder="Your Message" className="form-control mb-4 bg-transparent text-white border-secondary" rows="5"></textarea>
            <button className="btn btn-custom w-100">Send Message</button>
          </motion.form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
