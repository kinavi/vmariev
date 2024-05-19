import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header<{ isScrolled: boolean }>`
  padding: 30px 60px;
  position: sticky;
  top: 0;
  left: 0;
  background: #1c2727;
  transition: padding 0.5s 0.2s;

  z-index: 10000;

  & .header {
    &__logo-container {
      flex-shrink: 0;
    }
    &__logo {
      color: var(--Primary, #c49e6e);
      font-family: Roboto;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: 40px;
    }
    &__position {
      color: #fff;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
    &__link {
      text-align: right;
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      color: #fff;
      text-transform: none;
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
      white-space: nowrap;
      text-decoration: none;
      &_active {
        color: var(--Primary, #c49e6e);
      }
    }
    &__links-container {
      display: flex;
      gap: 60px;
      align-items: center;
      min-width: 0;
    }
    &__wrapper {
      max-width: 1320px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      gap: 20px;
      align-items: center;
    }
    &__menu-button {
      padding: 12px;
      z-index: 1;
      position: relative;
      display: none;
      @media only screen and (max-width: 1024px) {
        display: block;
      }
    }
    &__mobile-menu {
    }
    &__drop-down {
      display: block;
      @media only screen and (max-width: 1024px) {
        display: none;
      }
      & img {
        width: 30px;
        height: 30px;
      }
    }
  }
  ${({ isScrolled }) =>
    isScrolled &&
    css`
      padding: 16px 60px;
      .header {
        &__logo {
        }
        &__position {
        }
      }
    `}

  @media only screen and (max-width: 1024px) {
    padding: 30px 40px;
    ${({ isScrolled }) =>
      isScrolled &&
      css`
        padding: 16px 40px;
        .header {
          &__logo {
          }
          &__position {
          }
        }
      `}
    .header {
      &__logo {
      }
      &__position {
      }
      &__menu-button {
        display: block;
      }
      &__links-container {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 756px) {
    padding: 30px 25px;
    ${({ isScrolled }) =>
      isScrolled &&
      css`
        padding: 16px 25px;
        .header {
          &__logo {
          }
          &__position {
          }
        }
      `}
    .header {
      &__logo {
      }
      &__position {
      }
      &__menu-button {
        display: block;
      }
      &__links-container {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 420px) {
    padding: 20px 20px;
    ${({ isScrolled }) =>
      isScrolled &&
      css`
        padding: 16px 20px;
        .header {
          &__logo {
          }
          &__position {
          }
        }
      `}
    .header {
      &__logo {
        font-size: 24px;
      }
      &__position {
        font-size: 14px;
      }
      &__menu-button {
        display: block;
      }
      &__links-container {
        display: none;
      }
    }
  }
`;
