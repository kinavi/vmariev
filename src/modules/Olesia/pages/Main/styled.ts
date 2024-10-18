import styled from 'styled-components';

export const WellcomeConainer = styled.div<{ imgHeight: number }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  & .card {
    background-color: transparent;
    height: ${({ imgHeight }) => imgHeight + 'px'};
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
    &__front {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden; /* Safari */
      backface-visibility: hidden;
      & img {
        width: 100%;
        height: 100%;
      }
    }
    &__back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden; /* Safari */
      backface-visibility: hidden;
      color: white;
      transform: rotateY(180deg);
      border-radius: 6px;
    }
    &__content {
      transform: rotateY(0deg);
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.8s;
      transform-style: preserve-3d;
      &_rotate {
        transform: rotateY(180deg);
      }
    }
    &__link {
      text-decoration: none;
      color: #33c9cc;
    }
    &__text {
      color: #333;
      padding: 32px;
      overflow-x: hidden;
      overflow-y: scroll;
      background: white;
      border-radius: 6px;
      height: ${({ imgHeight }) => imgHeight + 'px'};
      transition: height 0.2s ease-in-out;
      & h1 {
        font-size: 26px;
        line-height: 30px;
        margin-bottom: 32px;
        color: #fdd504;
      }
      & p {
        font-size: 16px;
        line-height: 30px;
        margin-bottom: 22px;
      }
      &_collaps {
        height: calc(100vh - 60px);
        transition: height 0.5s ease-in-out 0.2s;
      }
    }
  }
`;
