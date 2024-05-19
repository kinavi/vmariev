import styled, { css } from 'styled-components';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { OutClickWrapper } from '../OutClickWrapper';

export const DropDownWrapper = styled(OutClickWrapper)`
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconStyled = styled(Icon)`
  margin-left: 6px;
`;

export const ButtonStyled = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: auto;
  padding: 5px 0;

  ${({ pattern }) => {
    switch (pattern) {
      // case 'primary':
      // case 'red':
      // case 'green':
      //   return css`
      //     & .drop-down {
      //       &__icon {
      //         & svg {
      //           fill: white;
      //         }
      //       }
      //     }
      //   `;
      // case 'link-secondary': {
      //   return css`
      //     & .drop-down {
      //       &__icon {
      //         & svg {
      //           fill: #748094;
      //         }
      //       }
      //     }
      //   `;
      // }
      default:
        return css`
          & .drop-down {
            &__icon {
              & svg {
                /* fill: #216fdb; */
              }
            }
          }
        `;
    }
  }}
`;

export const Container = styled.div`
  position: relative;
  & .drop-down {
    &__icon {
    }
    &__context {
      display: flex;
      min-width: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  &.drop-down {
    &_open {
      & .drop-down {
        &__icon {
          transform: rotateX(180deg);
        }
      }
    }
  }
`;

export const Menu = styled.div<{
  minWidth?: number;
  isFullWight?: boolean;
  direction?: 'left' | 'right' | 'left-up' | 'right-up';
}>`
  position: absolute;
  width: ${({ isFullWight }) => (isFullWight ? '100%' : 'auto')};
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  padding: 3px 0;
  display: flex;
  min-width: ${({ minWidth }) => minWidth || 210}px;
  flex-direction: column;
  z-index: 10;
  ${({ direction }) => {
    switch (direction) {
      case 'left':
        return 'left: 0px;';
      case 'left-up':
        return 'left: 0px; bottom: 100%;';
      case 'right-up':
        return `right: 0px; bottom: 100%;`;
      default:
        return 'right: 0px;';
    }
  }}
`;
