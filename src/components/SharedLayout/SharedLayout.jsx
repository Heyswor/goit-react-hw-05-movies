import { Outlet } from 'react-router-dom';
import { Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies" end>
            Movies
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
