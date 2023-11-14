import styled from 'styled-components';

export const CommentsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 10px;
`;

export const Comment = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const NoComment = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
