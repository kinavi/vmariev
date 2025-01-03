import { observer } from 'mobx-react-lite';

import { useStore } from '../../../../mobx';
import { ReviewReaderContainer } from './styled';

export const ReviewReader = observer(() => {
  const {
    modals: {
      onCloseLastModal,
      modals: {
        reviewReader: {
          payload: { name, text },
        },
      },
    },
  } = useStore();
  return (
    <ReviewReaderContainer onClose={onCloseLastModal}>
      <div className="review-reader__name">{name}</div>
      <div className="review-reader__text">{text}</div>
    </ReviewReaderContainer>
  );
});
