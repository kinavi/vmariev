import styled from 'styled-components';
import { ITheme } from '../../../../context/types';

export const ClassicButtonContainer = styled.div<{ theme: ITheme }>`
  position: relative;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: inherit;
  background: ${({ theme }) => theme.colors.get('primary')?.origin};
  &.tab_checked {
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25) inset;
  }
`;
