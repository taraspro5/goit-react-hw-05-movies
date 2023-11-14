import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Nav } from './Layout.styled';
import { Suspense } from 'react';

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
        <Suspense fallback={'LOADING PAGE...'}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
