import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Nav } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </Nav>
        </Container>
      </Header>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
