import styled from 'styled-components';

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  & .custom-field {
    &__content {
      font-size: 22px;
    }
    &__label {
    }
  }
`;
