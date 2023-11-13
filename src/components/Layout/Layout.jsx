import { Outlet } from 'react-router-dom';
import { Container, Link } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Outlet />
    </Container>
  );
};
