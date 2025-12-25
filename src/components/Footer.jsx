import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>You can reach out to me on these platforms</p>
        <div className="footer-links">
          <div className="socials">
            <div className="facebook">
              <a href=""><i className="fab fa-facebook pink"></i>Facebook</a>
            </div>
            <div className="twitter">
              <a href=""><i className="fab fa-twitter pink"></i>Twitter</a>
            </div>
            <div className="instagram">
              <a href=""><i className="fab fa-instagram pink"></i>Instagram</a>
            </div>
            <div className="whatsapp">
              <a href=""><i className="fab fa-whatsapp pink"></i>Whatsapp</a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <span className="text-muted">&copy; TobiSheriff</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
