import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style: none;
  li {
    &:before {
      content: "\\2022";
      color: red;
      font-weight: bold;
      display: inline-block;
      width: 1em;
    }
  }
`;