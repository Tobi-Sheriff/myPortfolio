import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

// Icons for features/tech (optional mapping, or just use text in pills)
const features = [
  "Movie Catalog", "Search Functionality", "Movie Recommendations",
  "User Comments", "Highlights Test Scenarios", "Test Case Implementation",
  "API Testing and Documentation", "CI/CD Implementation"
];

const technologies = [
  "HTML", "CSS & Bootstrap", "Javascript", "Nodejs", "Express",
  "PostgreSQL", "Sequelize", "Jest", "Postman", "Github Actions"
];

const TMA = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <>
      <Navbar />
      <div className="container">

        {/* Project Header */}
        <motion.div
          className="section glass-card p-5 mb-5"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="col pl-0">
            <motion.h2 variants={itemVariants} className="skill-h pink display-4 fw-bold">
              The Movie Archive
            </motion.h2>
            <motion.a
              variants={itemVariants}
              href="https://themoviearchive.tobisheriff.com.ng"
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-custom mt-2"
            >
              Visit Live Project
            </motion.a>
          </div>
          <motion.p variants={itemVariants} className="p-text mt-4 lead">
            The Movie Archive is a web application that allows users search for movies and showcase useful information about them.
          </motion.p>
        </motion.div>

        {/* Features & Technologies (Infinite Scroll Replacement) */}
        <div className="section">
          <h3 className="pink mb-4">Features</h3>
          <div className="ticker-wrap mb-5" style={{ background: 'rgba(255,255,255,0.05)', padding: '20px 0' }}>
            <motion.div
              className="ticker"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ ease: "linear", duration: 20, repeat: Infinity }}
              style={{ display: "inline-block", whiteSpace: "nowrap" }}
            >
              {[...features, ...features].map((feature, index) => (
                <span key={index} className="ticker-item">{feature} • </span>
              ))}
            </motion.div>
          </div>

          <h3 className="pink mb-4">Technologies</h3>
          <div className="ticker-wrap" style={{ background: 'rgba(255,255,255,0.05)', padding: '20px 0' }}>
            <motion.div
              className="ticker"
              animate={{ x: ["-100%", "0%"] }} // Reverse direction for variety
              transition={{ ease: "linear", duration: 25, repeat: Infinity }}
              style={{ display: "inline-block", whiteSpace: "nowrap" }}
            >
              {[...technologies, ...technologies].map((tech, index) => (
                <span key={index} className="ticker-item">{tech} • </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Screenshots Gallery */}
        <motion.div
          className="section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="pink mb-5">Screenshots</h3>
          <div className="row g-4">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <motion.div
                key={num}
                className="col-md-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={`/images/Screenshot_${num}.png`}
                  alt={`Screenshot ${num}`}
                  className="img-fluid rounded shadow-lg border border-secondary"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Github Links */}
        <motion.div
          className="section glass-card p-5 text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          <h4 className="text-white mb-4">Interested in the Code?</h4>
          <p className="text-muted mb-4">Authentication in progress...</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="https://github.com/Tobi-Sheriff/movie-archive" className="btn btn-custom">Github Backend</a>
            <a href="https://github.com/Tobi-Sheriff/movie-archive-frontend" className="btn btn-custom">Github Frontend</a>
          </div>
        </motion.div>

      </div>
      <Footer />
    </>
  );
};

export default TMA;
