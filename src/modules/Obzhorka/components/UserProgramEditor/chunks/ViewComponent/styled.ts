import styled from 'styled-components';

export const ViewComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  & .view-component {
    &__top-container {
      display: flex;
      flex-direction: column;
      padding: 16px 0px;
      gap: 20px;
      background: #ffffff;
      border: 1px dashed #06b27b;
      border-radius: 6px;
    }
    &__column-title {
      font-size: 16px;
      line-height: 19px;
    }
    &__column {
      display: flex;
      flex-direction: column;
      padding: 0px;
      gap: 5px;
      flex: 1 1;
      padding: 0 10px;
      &_center {
        justify-content: center;
        align-items: center;
      }
    }
    &__count {
      line-height: 40px;
      text-align: center;
    }
    &__row {
      display: flex;
    }
    &__calorie {
      font-size: 32px;
      color: #06b27b;
    }
    &__proteins {
      font-size: 22px;
      color: #03a9f4;
    }
    &__fats {
      font-size: 22px;
      color: #ff9800;
    }
    &__carbohydrates {
      font-size: 22px;
      color: #ffc107;
    }
    &__botton-container {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
  }
`;

export const ViewComponentPlaceholderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;
  gap: 30px;
  border: 1px dashed #06b27b;
  border-radius: 6px;

  font-size: 18px;
  line-height: 30px;
  text-align: center;
`;
