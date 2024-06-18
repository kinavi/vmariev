import React from 'react';
import { StepsContainer } from './styled';
import DATA from '../../INITIAL_DATA.json';
import { BlockHeader } from '../../components/BlockHeader';
import { observer } from 'mobx-react-lite';
import { translate } from '../../translator';

const JobStep = (props: { title: string; text?: string; index: number }) => {
  return (
    <div className="steps__step">
      <div className="steps__count-container">
        <div className="steps__count-step">
          {props.index < 9 ? `0${props.index + 1}` : props.index + 1}
        </div>
        <div className="steps__line"></div>
      </div>
      <div className="steps__text-container">
        <div className="steps__title">{props.title}</div>
        {props.text && <div className="steps__text">{props.text}</div>}
      </div>
    </div>
  );
};

export const JobSteps = observer(() => {
  return (
    <StepsContainer id="how-i-work">
      <BlockHeader title={translate.tryTranslate('Как я работаю')} />
      <div className="steps__steps">
        {DATA.steps.map((item, index) => (
          <JobStep
            key={`step${item.titel}`}
            index={index}
            title={translate.tryTranslate(item.titel)}
            text={translate.tryTranslate(item.text)}
          />
        ))}
      </div>
    </StepsContainer>
  );
});
