import styled, { css, keyframes } from 'styled-components';
import { CoordsType, SizeType, TooltipPositionType } from './types';

const emergenceKF = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const TooltipTextContainer = styled.div<{
  position?: TooltipPositionType;
  coords: CoordsType;
  size: SizeType;
}>`
  padding: 10px;
  position: absolute;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #fff;
  white-space: nowrap;
  text-align: center;

  border-radius: 2px;
  background: rgba(0, 0, 0, 0.7);
  &:after {
    text-align: center;
    content: '';
    position: absolute;
    border: 5px solid transparent;
    width: 100%;
  }

  ${({ position, coords, size }) => {
    switch (position) {
      case 'right':
        return css`
          top: ${coords.top + coords.height / 2 - size.height / 2}px;
          margin-left: 10px;
          left: ${coords.left + coords.width}px;

          &:after {
            width: 0;
            height: 0;
            border-right: 5px solid rgba(0, 0, 0, 0.7);
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;

            left: -10px;
            top: 50%;
            transform: translate(0, -50%);
          }
        `;
      case 'up':
      default:
        return css`
          top: ${coords.top - size.height}px;
          padding-bottom: 10px;
          left: ${coords.left + coords.width / 2 - size.width / 2}px;

          &:after {
            width: 0;
            height: 0;
            border-top: 5px solid rgba(0, 0, 0, 0.7);
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;

            bottom: -10px;
            left: 50%;
            transform: translate(-50%, 0);
          }
        `;
    }
  }}
  z-index: 100000;
  animation: ${emergenceKF} 0.3s ease-out;
`;

export const Container = styled.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  padding: 0 1px;
`;
