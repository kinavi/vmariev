import styled from "styled-components";

export const GiftCardModalContainer = styled.div`
  & .gift-card-modal {
    &__overlayer {
      position: fixed;
      height: 100vh;
      width: 100vw;
      background: #00000099;
      z-index: 0;
      top: 0;
      left: 0;
      opacity: 0;
      transition: opacity 200ms ease-in-out;
    }
  }
`;
