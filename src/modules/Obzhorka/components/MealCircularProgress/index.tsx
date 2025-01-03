import { observer } from 'mobx-react-lite';
import CircularProgress from '../CircularProgress';
import styled from 'styled-components';
import React from 'react';

type MealCircularProgressPropsType = {
  progress: number;
  strokeWidth: number;
  color: string;
  size: number;
  label: string;
  content: string;
  className?: string;
  hint?: string;
};

const MealCircularProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  & .meal-circular-progress {
    &__label {
      line-height: 24px;
      font-size: 20px;
      text-align: center;
    }
    &__hint {
      font-size: 14px;
      line-height: 20px;
      text-align: center;
    }
  }
`;

export const MealCircularProgress = observer(
  (props: MealCircularProgressPropsType) => {
    const {
      color,
      progress,
      size,
      strokeWidth,
      label,
      content,
      className,
      hint,
    } = props;
    return (
      <MealCircularProgressContainer className={className}>
        <CircularProgress
          progress={progress}
          strokeWidth={strokeWidth}
          color={color}
          size={size}
        >
          {content}
        </CircularProgress>
        <div className="meal-circular-progress__label">{label}</div>
        {hint && <div className="meal-circular-progress__hint">{hint}</div>}
      </MealCircularProgressContainer>
    );
  }
);
