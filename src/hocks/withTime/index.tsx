import { useState } from 'react';
import { WithTimerType } from './types';
import Timer from '../../components/Timer/Timer';
import styled from 'styled-components';

const TimerContainer = styled.div`
  min-width: 0;
  & > * {
    margin-bottom: 50px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const withTimer: WithTimerType = (Component) => (props) => {
  const { dataOpen, className, label } = props;
  const [canShow, setCanShow] = useState(false);
  if (canShow) {
    return <Component />;
  } else {
    return (
      <TimerContainer className={className}>
        <Timer
          onAfterTime={() => setCanShow(true)}
          initialDate={dataOpen}
        />
        {label}
      </TimerContainer>
    );
  }
};
