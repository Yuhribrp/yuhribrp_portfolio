import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex light-bg justify-space">
      <div className="logo default">
        Yuhri Benaion
      </div>

      <ul className="flex default">
        <li className="white">
          <a href="#section2">{"< Projects />"}</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <Link to="/">Curriculum</Link>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;
