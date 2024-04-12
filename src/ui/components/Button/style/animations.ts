import { keyframes } from 'styled-components';

export const RotateKeyframe = keyframes`
  from {
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;
