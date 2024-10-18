import { withTimer } from '../../../../hocks/withTime';
import { Wellcome } from '../Main';
import { TimerPageContainer } from './styled';

const ContentWithTimer = withTimer(Wellcome);

export const TimerPage = (props: { dateOpen: string }) => {
  return (
    <TimerPageContainer>
      <ContentWithTimer dataOpen={props.dateOpen} />
    </TimerPageContainer>
  );
};
