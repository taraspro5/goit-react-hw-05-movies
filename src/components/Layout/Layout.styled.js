import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 15px;
  margin-right: 15px;
`;

export const Link = styled(NavLink)`
  &.active {
    color: orange;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

export const Header = styled.header`
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
