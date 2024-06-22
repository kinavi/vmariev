import { withModals } from './hocs/withModals';
import { ReviewReader } from './chunks/ReviewReader';

export const Modals = withModals({
  reviewReader: ReviewReader,
});
