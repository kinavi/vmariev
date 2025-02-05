import { observer } from 'mobx-react-lite';
import { MealEntry } from '../../mobx/models/MealEntry';
import { translate } from '../../../../translator';
import { MealEntryItemContainer } from './styled';

export const MealEntryItem = observer((props: { value: MealEntry }) => {
  const {
    value: { titel, entryType, totalCalories },
  } = props;
  return (
    <MealEntryItemContainer>
      <div>
        {entryType === 'dish'
          ? translate.tryTranslate('Блюдо')
          : translate.tryTranslate('Продукт')}
      </div>
      <div className="meal-entry-item__title">{titel}</div>
      <div>{`${translate.tryTranslate('Каллориев')} ${totalCalories.toFixed(
        2
      )}`}</div>
    </MealEntryItemContainer>
  );
});
