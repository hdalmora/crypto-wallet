import styled from 'styled-components';

export const Container = styled.span`
  display: flex;

  .isActive {
    border: 1px solid ${(props) => props.theme.purple200};
  }

  a {
    display: flex;
    align-items: center;

    width: 226px;
    height: 57px;
    cursor: pointer;

    background-color: ${(props) => props.theme.gray300};
    border-radius: 4px;
    border: 1px solid transparent;

    transition: border 0.4s linear;

    &:hover {
      border: 1px solid ${(props) => props.theme.purple200};
    }

    > span {
      color: ${(props) => props.theme.gray200};
      font-weight: bold;
      padding-left: 1.5rem;
    }
  }
`;
