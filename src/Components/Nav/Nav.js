import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to='/'>
        <h3>Home</h3>
      </Link>
      <ul>
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/shop'>
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
