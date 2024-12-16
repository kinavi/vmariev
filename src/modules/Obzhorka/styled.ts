import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html body {
        background: #F9F9F9;
        color: #333333;
    }
`;

export const BodyWrapper = styled.div`
  padding: 32px 16px;
`;

export const HeaderContentWrapper = styled.div`
  display: flex;
  padding: 17px 11px;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
`;
