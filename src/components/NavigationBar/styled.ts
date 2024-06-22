import styled from 'styled-components';

export const NavigationBarContainer = styled.div`
  & .navigation-bar {
    &__nav-links {
      position: fixed;
      left: 0;
      top: 0;
      height: 100vh;
      padding: 10px;
      background: #2b3b3b;
      display: flex;
      flex-direction: column;
      gap: 20px;
      z-index: 100;
      @media only screen and (max-width: 756px) {
        top: auto;
        bottom: 0;
        width: 100vw;
        height: auto;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
