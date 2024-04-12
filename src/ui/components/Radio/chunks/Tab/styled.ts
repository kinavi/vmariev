import styled from 'styled-components';
import { Button } from '../../../Button';
import { ITheme } from '../../../../context/types';

export const TabContainer = styled.div<{ theme: ITheme }>`
  position: relative;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: #172b4d;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  align-self: baseline;
  & .tab {
    &__active-marker {
      height: 2px;
      width: 100%;
      background: ${({ theme }) => theme.colors.get('primary')?.origin};
      border-radius: 100px;
      position: absolute;
      bottom: -1px;
      left: 0;
    }
    &__label {
      padding: 12px 16px;
    }
  }
`;
