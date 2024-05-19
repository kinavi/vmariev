import styled from 'styled-components';

export const MenuContainer = styled.div<{
  direction?: 'right' | 'left';
  minWidth?: number;
}>`
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  position: absolute;
  padding: 3px 0;
  z-index: 10;
  ${({ minWidth }) => minWidth && `width: ${minWidth}px;`}
  ${({ direction }) => `${direction}: 0;`}
  ${({ minWidth }) => minWidth && `min-width: ${minWidth}px;`}
  & .menu {
    &__options {
      padding: 6px 10px;
      width: 100%;
      border-radius: 0;
      &:hover {
        background: #dae9ff;
      }
    }
    &__search-input {
      border-top: none;
      border-left: none;
      border-right: none;
      border-radius: 0;
      border-color: #e8eaee;
      padding: 6px 10px;
      margin-bottom: 3px;
    }
    &__loader {
      padding: 4px 0;
    }
    &__placeholder {
      padding: 6px 10px;
    }
  }
`;
