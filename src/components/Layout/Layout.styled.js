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
