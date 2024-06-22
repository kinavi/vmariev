import styled from 'styled-components';

export const ServiceCardContainer = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 14px;
  background: #2b3b3b;
  flex: 1;
  & .service-card {
    &__title {
      font-size: 20px;
    }
    &__description {
      font-size: 16px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #97989b;
    }
    &__status {
      font-size: 16px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #c49e6e;
    }
    &__link {
      color: white;
    }
  }
`;
