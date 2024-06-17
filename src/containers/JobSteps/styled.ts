import styled from 'styled-components';

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  & .steps {
    &__count-step {
      width: 40px;
      height: 40px;
      background: #c49e6e;
      border-radius: 50px;
      padding: 10px 7px;

      color: #fff;
      text-align: center;
      font-family: Roboto;
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px;
    }
    &__step {
      display: flex;
      flex-direction: row;
      justify-content: end;

      gap: 20px;
      &:nth-child(2n + 1) {
        flex-direction: row-reverse;
        justify-content: start;
        & .steps__text-container {
          align-items: end;
          text-align: end;
        }
      }
      &:last-child {
        & .steps__line {
          display: none;
        }
      }
      & .steps__text-container {
        align-items: start;
        text-align: start;
      }
      @media screen and (max-width: 756px) {
        flex-direction: row;
        & .steps {
          &__text-container {
            width: auto;
            align-items: start;
            text-align: start;
          }
          &__text {
            font-size: 16px;
          }
        }

        &:nth-child(2n + 1) {
          flex-direction: row;
          justify-content: end;

          & .steps__text-container {
            align-items: start;
            text-align: start;
          }
        }
      }
      @media screen and (max-width: 400px) {
        & .steps {
          &__text-container {
            padding: 5px 0px;
          }
          &__text {
          }
        }
      }
    }

    &__steps {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    &__line {
      flex: 1 1;
      border-left: 2px dotted #c49e6e;
      width: 1px;
    }
    &__count-container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
    }
    &__text {
      color: var(--gray, #7d7d7d);
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px; /* 166.667% */
    }
    &__text-container {
      display: flex;
      /* width: 620px; */
      padding: 5px 20px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 20px;
      width: calc((100% - 80px) / 2);
    }
    &__title {
      color: var(--Primary, #c49e6e);
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;
      color: white;
    }
    &__result {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-self: center;
      color: var(--Text---default, #34353a);
      font-family: Roboto;
      font-size: 26px;
      font-style: normal;
      font-weight: 300;
      line-height: 40px; /* 153.846% */
      align-items: center;
      margin-top: 10px;
      text-align: center;
    }
    &__happy-count {
      color: var(--Primary, #b95e1a);
      font-family: Roboto;
      font-size: 28px;
      font-style: normal;
      font-weight: 500;
      line-height: 40px; /* 142.857% */
      text-transform: uppercase;
      &::after {
        content: ' ';
      }
    }
  }
`;
