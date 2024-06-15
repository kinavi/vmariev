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
    }
  }
`;
