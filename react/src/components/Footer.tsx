import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="light-bg flex justify-space">
      <span className="default">© {year} @Yuhribrp</span>
      <ul className="flex">
        <li>
          <a href="https://www.linkedin.com/in/yuhribrp" className="white"  target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </li>
        <li>
          <a href="https://github.com/Yuhribrp" className="white"  target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Yuhribrp" className="white"  target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
