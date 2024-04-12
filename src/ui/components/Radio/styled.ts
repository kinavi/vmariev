import styled, { css } from 'styled-components';

const RadioDisablePattern = css`
  pointer-events: none;
  opacity: 0.7;
`;

export const RadioContainer = styled.div<{
  isDisable?: boolean;
  gap: number;
  direction?: 'column' | 'row';
}>`
  ${({ isDisable }) => (isDisable ? RadioDisablePattern : '')}

  display: flex;
  flex-direction: ${({ direction }) => `${direction}`};
  gap: ${({ gap }) => `${gap}px`};

  & .radio-item__input {
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    height: 1px;
    opacity: 0;
    z-index: -1;
  }
`;
