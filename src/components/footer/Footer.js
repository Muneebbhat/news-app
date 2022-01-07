import React from "react";
import FooterBottom from "./footerComponents/FooterBottom";
import FooterTop from "./footerComponents/FooterTop";

const Footer = () => {
  return (
    <footer id="footer" className="herald-site-footer herald-slide">
      <FooterTop />

      <FooterBottom />
    </footer>
  );
};

export default Footer;
