import { withModals } from './hocs/withModals';
import { SelectFoods } from './chunks/SelectFoods';

export const Modals = withModals({
  selectFoods: SelectFoods,
});
