import styled from 'styled-components';

export const MapsContainer = styled.div`
  width: 100%;
  & .maps {
    &__toolbar {
      position: absolute;
      top: 0;
      left: 0;
    }
    &__title {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 16px;
      text-align: center;
      box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.15);
      font-size: 18px;
    }
  }
`;
