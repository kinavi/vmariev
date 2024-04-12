import styled, { css } from 'styled-components';
import { ITheme } from '../../../../context/types';
import { ThemeableType } from '../../../../types';

export const RadioIconContainer = styled.div<
  {
    isFocus: boolean;
    isChecked: boolean;
    isDisable: boolean;
    theme: ITheme;
  } & ThemeableType
>`
  width: 40px;
  height: 40px;
  border-radius: 3px;
  padding: 10px;
  align-items: center;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  cursor: pointer;

  ${({ theme, color = 'primary' }) => css`
    &:hover {
      background: ${theme.colors.get(color)?.[80]};
    }
  `}

  ${({ isFocus, isChecked, theme, color = 'primary' }) =>
    (isFocus || isChecked) &&
    css`
      background: ${theme.colors.get(color)?.[80]};
    `}
  ${({ isDisable }) =>
    isDisable &&
    css`
      pointer-events: none;
      opacity: 0.7;
    `}
`;
