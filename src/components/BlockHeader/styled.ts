import styled from 'styled-components';

export const BlockHeaderContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  & .header {
    &__title {
      color: #fff;
      font-family: Roboto;
      font-size: 36px;
      font-style: normal;
      font-weight: 400;
      line-height: 50px;
    }
  }
`;
