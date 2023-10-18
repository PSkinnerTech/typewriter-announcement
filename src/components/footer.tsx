import { FaGithub, FaTwitter, FaLinkedin, FaVideo } from "react-icons/fa";

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
      <a
        href="https://www.loom.com/share/a8335a5cbbb841868c4624ca2d27c2cd?sid=ef5d1544-d36f-44c2-925c-d72d8d94f1a0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaVideo size={30} />
      </a>
    </div>
  );
};

export default Footer;
