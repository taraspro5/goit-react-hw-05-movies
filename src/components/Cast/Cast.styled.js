import styled from 'styled-components';

export const CastWrapper = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 20px;
  margin-top: 10px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const CastNothing = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
