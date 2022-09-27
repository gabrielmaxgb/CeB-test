
import styled from 'styled-components';

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  padding: .5rem 1rem;
  background-color: rgba(255,240,209,1);
  margin: .5rem;
  display: ${(props) => props.display ? "" : "none"};
`;
