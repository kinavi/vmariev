import { observer } from 'mobx-react-lite';
import { useObjorkaStore } from '../../../../mobx';
import styled from 'styled-components';
import { Field } from '../../../../components/Field';
import { translate } from '../../../../../../translator';
import { MealEntryItem } from '../../../../components/MealEntryItem';

const MealEntriesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MealEntriesList = observer(() => {
  const { mealEntries } = useObjorkaStore();
  return (
    <Field label={translate.tryTranslate('История за день')}>
      <MealEntriesListContainer>
        {mealEntries.entries.map((item) => (
          <MealEntryItem
            key={`mealEntries${item.id}`}
            value={item}
          />
        ))}
      </MealEntriesListContainer>
    </Field>
  );
});
