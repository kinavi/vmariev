import React from 'react';
import styled from 'styled-components';

const ChatFooterWrapperStyled = styled.div`
  background: #ffffff;
  padding: 14px 16px;
  display: flex;
  flex-shrink: 0;
  & > * {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const ChatFooterWrapper = ({
  children,
}: {
  children: JSX.Element | JSX.Element[] | number | string;
}) => <ChatFooterWrapperStyled>{children}</ChatFooterWrapperStyled>;
