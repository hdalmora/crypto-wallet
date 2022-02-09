import styled, { css } from 'styled-components';

const MainContainer = css`
  background: ${(props) => props.theme.dark200};
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3rem;
  color: ${(props) => props.theme.white};
`;

export const Container = styled.section`
  display: flex;

  main {
    ${MainContainer}
  }

  aside {
    width: 320px;
    height: 100vh;

    background-color: ${(props) => props.theme.dark100};

    nav {
      display: flex;
      flex-direction: column;
      padding-left: 3rem;
      padding-right: 3rem;

      > span {
        padding-top: 4rem;
        color: ${(props) => props.theme.gray100};

        strong {
          font-weight: bold;
        }
      }

      ul {
        padding-top: 4rem;

        li:not(:last-child) {
          margin-bottom: 24px;
        }
      }
    }
  }
`;
