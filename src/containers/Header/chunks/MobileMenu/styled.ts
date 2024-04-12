import styled from 'styled-components';

export const MobileMenuContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  flex-direction: column;
  display: flex;
  & .mobile-menu {
    &__links {
      display: flex;
      flex-direction: column;
      gap: 40px;
      width: 100%;
    }
    &__link {
      color: #fff;
      text-align: center;
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      text-decoration: none;
      max-width: fit-content;
      margin: 0 auto;
      &_active {
        color: var(--Primary, #c49e6e);
      }
    }
    &__close-button {
      padding: 12px;
    }
    &__contents {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 85%;
      background: hsla(180, 16%, 20%, 1);
      padding: 40px 20px;
      gap: 60px;
    }
    &__overlayer {
      background: hsl(0deg 0% 0% / 50%);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    &__contacts {
      display: flex;
      gap: 40px;
      align-items: center;
      justify-content: center;
    }
    &__contact {
    }
  }
`;
