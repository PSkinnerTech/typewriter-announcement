import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <a
        href="https://github.com/PSkinnerTech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={30} />
      </a>
      <a
        href="https://twitter.com/PSkinnerTech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size={30} />
      </a>
      <a
        href="https://linkedin.com/in/patrickaskinner"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={30} />
      </a>
    </div>
  );
};

export default Footer;
