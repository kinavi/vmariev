import styled from 'styled-components';
import { ButtonPropsType } from './types';
import { RotateKeyframe } from './style/animations';
import { ResetButtonStyle } from './style/ResetButtonStyle';
import { ButtonFillPattern } from './style/ButtonFillPattern';
import { ButtonOutlinePattern } from './style/ButtonOutlinePattern';
import { ButtonGhostPattern } from './style/ButtonGhostPattern';
import { NonePattern } from './style/NonePattern';
import { ITheme } from '../../context/types';

type ButtonStyledType = {
  theme: ITheme;
  color: NonNullable<ButtonPropsType['color']>;
  pattern: NonNullable<ButtonPropsType['pattern']>;
};

export const ButtonStyled = styled.button<ButtonStyledType>`
  ${ResetButtonStyle};
  display: flex;
  max-width: fit-content;

  &.button {
    &_loading {
      align-items: center;
      justify-content: center;
    }
    &_disable {
    }
    &_success {
    }
    &_is-full-wight {
      width: 100%;
    }
    &_size {
      &-none {
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        min-width: auto;
      }
      &-s:not(.button_link) {
        padding: 2px 16px;
        min-width: 100px;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
      }
      &-m:not(.button_link) {
        padding: 4px 16px;
        min-width: 100px;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
      }
      &-l:not(.button_link) {
        padding: 5px 16px;
        font-weight: 500;
        font-size: 15px;
        line-height: 20px;
        min-width: 120px;
      }
      &-xl:not(.button_link) {
        padding: 8px 16px;
        font-weight: 500;
        font-size: 15px;
        line-height: 22px;
        min-width: 140px;
        &.button_loading svg {
          width: 22px;
          height: 22px;
        }
      }
    }
  }

  &:hover {
    cursor: pointer;
  }
  & .button__icon_loading {
    animation: ${RotateKeyframe} 0.3s ease-out infinite;
  }

  ${({ pattern, theme, color }) => {
    switch (pattern) {
      case 'fill':
        return ButtonFillPattern(theme, color);
      case 'outline':
        return ButtonOutlinePattern(theme, color);
      case 'ghost':
        return ButtonGhostPattern(theme, color);
      default:
        return NonePattern;
    }
  }}
`;
