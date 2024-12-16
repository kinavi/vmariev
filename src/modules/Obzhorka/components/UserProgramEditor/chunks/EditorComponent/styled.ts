import styled from 'styled-components';

export const EditorComponentContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  & .editor-component {
    &__proteins-slider {
      & .MuiSlider-track {
        border: 1px solid #03a9f4;
        background-color: #03a9f4;
      }
      & .MuiSlider-thumb {
        background-color: #03a9f4;
        &.Mui-active {
          box-shadow: 0px 0px 0px 8px rgba(3, 168, 244, 0.16);
        }
      }
      & .MuiSlider-rail {
        background-color: #03a9f4;
        opacity: 0.38;
      }
    }
    &__fats-slider {
      & .MuiSlider-track {
        border: 1px solid #ff9800;
        background-color: #ff9800;
      }
      & .MuiSlider-thumb {
        background-color: #ff9800;
        &.Mui-active {
          box-shadow: 0px 0px 0px 8px rgba(255, 152, 0, 0.16);
        }
      }
      & .MuiSlider-rail {
        background-color: #ff9800;
        opacity: 0.38;
      }
    }
    &__carbohydrates-slider {
      & .MuiSlider-track {
        border: 1px solid #ffc107;
        background-color: #ffc107;
      }
      & .MuiSlider-thumb {
        background-color: #ffc107;
        &.Mui-active {
          box-shadow: 0px 0px 0px 8px rgba(255, 193, 7, 0, 0.16);
        }
      }
      & .MuiSlider-rail {
        background-color: #ffc107;
        opacity: 0.38;
      }
    }
    &__checkbox-wrapper {
      margin-bottom: 10px;
    }
  }
`;
