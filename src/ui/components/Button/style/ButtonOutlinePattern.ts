import { css } from 'styled-components';
import { ITheme } from '../../../context/types';
import { ButtonPropsType } from '../types';

export const ButtonOutlinePattern = (
  theme: ITheme,
  color: NonNullable<ButtonPropsType['color']>
) => css`
  color: ${theme.colors.get(color)?.origin};
  min-width: 100px;
  text-align: center;
  border: 1px solid ${theme.colors.get(color)?.origin};
  border-radius: 50px;
  align-items: center;
  justify-content: center;

  & svg {
    fill: ${theme.colors.get(color)?.origin};
  }

  &:hover:not(:disabled) {
    background: ${theme.colors.get(color)?.[20]};
    border: 1px solid ${theme.colors.get(color)?.[70]};
    color: ${theme.colors.get(color)?.origin};
    & svg {
      fill: ${theme.colors.get(color)?.origin};
    }
  }

  &:focus:not(:disabled) {
    background: ${theme.colors.get(color)?.[80]};
    border: 1px solid ${theme.colors.get(color)?.[70]};

    color: ${theme.colors.get(color)?.[50]};
    & svg {
      fill: ${theme.colors.get(color)?.[50]};
    }
  }

  &:active:not(:disabled) {
    background: ${theme.colors.get(color)?.[80]};
    border: 1px solid ${theme.colors.get(color)?.[70]};

    color: ${theme.colors.get(color)?.[50]};
    & svg {
      fill: ${theme.colors.get(color)?.[50]};
    }
  }

  &:disabled {
    background: ${theme.colors.get('text')?.[90]};
    color: ${theme.colors.get('text')?.[70]};
    border: 1px solid ${theme.colors.get('text')?.[80]};

    cursor: not-allowed;
    & svg {
      fill: ${theme.colors.get('text')?.[70]};
    }
  }

  &.button_loading {
    border: 1px solid ${theme.colors.get(color)?.[70]};
    background: ${theme.colors.get(color)?.[90]};
    color: ${theme.colors.get(color)?.[70]};
    cursor: not-allowed;
    & svg {
      fill: ${theme.colors.get(color)?.[70]};
    }
  }

  &.button_success {
    border: 1px solid ${theme.colors.get(color)?.[70]};
    background: ${theme.colors.get(color)?.[90]};
    color: ${theme.colors.get(color)?.[70]};
    cursor: not-allowed;
    & svg {
      fill: ${theme.colors.get(color)?.[70]};
    }
  }
`;
