import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { MealEntry } from '../../mobx/models/MealEntry';
import { translate } from '../../../../translator';
import { MealEntryItemContainer } from './styled';

export const MealEntryItem = observer((props: { value: MealEntry }) => {
  const {
    value: { titel, entryType, totalCalories, totalProteinsСalories },
  } = props;
  return (
    <MealEntryItemContainer>
      <div>
        {entryType === 'dish'
          ? translate.tryTranslate('Блюдо')
          : translate.tryTranslate('Продукт')}
      </div>
      <div className="meal-entry-item__title">{titel}</div>
      <div>{`${translate.tryTranslate('Каллориев')} ${totalCalories}`}</div>
    </MealEntryItemContainer>
  );
});
