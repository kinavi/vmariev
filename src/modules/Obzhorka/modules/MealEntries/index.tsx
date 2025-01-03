import { observer } from 'mobx-react-lite';
import { Header } from '../../components/Header';
import { Button, IconButton } from '@mui/material';
import { Icon } from '../../../../ui/components/Icon';
import { BodyWrapper, HeaderContentWrapper } from '../../styled';
import { MealCircularProgress } from '../../components/MealCircularProgress';
import { useObjorkaStore } from '../../mobx';
import { translate } from '../../../../translator';
import { MealEntriesContainer } from './styled';
import { Link } from 'react-router-dom';
import { NAVIGATION } from '../../constants';
import { MealEntriesList } from './chunks/MealEntriesList';
import format from 'date-fns/format';
import ru from 'date-fns/locale/ru';
import en from 'date-fns/locale/en-US';

function calcProgress(value: number, maxCount: number) {
  if (value >= maxCount) {
    return 100;
  }
  const result = Math.round((value / maxCount) * 100);
  return result;
}

export const MealEntries = observer(() => {
  const { mealEntries, userProgram } = useObjorkaStore();
  if (!userProgram) {
    return null;
  }
  return (
    <MealEntriesContainer>
      <Header>
        <HeaderContentWrapper>
          <IconButton
            size="small"
            onClick={() => mealEntries.setPreventDay()}
          >
            <Icon
              type="ChevronLeft"
              color="#333"
            />
          </IconButton>
          <div className="meal-entries__date-container">
            <div>
              {format(mealEntries.targetDate, 'dd MMMM yyyy', {
                locale: translate.lang === 'en' ? en : ru,
              })}
            </div>
            <div>
              {format(mealEntries.targetDate, 'HH:mm', {
                locale: translate.lang === 'en' ? en : ru,
              })}
            </div>
          </div>
          <IconButton
            size="small"
            onClick={() => mealEntries.setNextDate()}
          >
            <Icon
              type="ChevronRight"
              color="#333"
            />
          </IconButton>
        </HeaderContentWrapper>
      </Header>
      <BodyWrapper>
        <MealCircularProgress
          color="#06B27B"
          size={160}
          strokeWidth={10}
          content={mealEntries.currentEatenCalories.toFixed(2)}
          label={userProgram.caloriesNormPerDayToString}
          progress={calcProgress(
            mealEntries.currentEatenCalories,
            userProgram.caloriesNormPerDay
          )}
        />
        <div className="meal-entries__row">
          <MealCircularProgress
            color="#03A9F4"
            size={100}
            strokeWidth={5}
            content={mealEntries.currentEatenProteins.toFixed(2)}
            label={userProgram.proteinsNormPerDayToString}
            progress={calcProgress(
              mealEntries.currentEatenProteins,
              userProgram.proteinsNormPerDay
            )}
            hint={translate.tryTranslate('Белки')}
          />
          <MealCircularProgress
            color="#FF9800"
            size={100}
            strokeWidth={5}
            content={mealEntries.currentEatenFats.toFixed(2)}
            label={userProgram.fatsNormPerDayToString}
            progress={calcProgress(
              mealEntries.currentEatenFats,
              userProgram.fatsNormPerDay
            )}
            hint={translate.tryTranslate('Жиры')}
          />
          <MealCircularProgress
            color="#FFC107"
            size={100}
            strokeWidth={5}
            content={mealEntries.currentEatenCarbohydrates.toFixed(2)}
            label={userProgram.carbohydratesNormPerDayToString}
            progress={calcProgress(
              mealEntries.currentEatenCarbohydrates,
              userProgram.carbohydratesNormPerDay
            )}
            hint={translate.tryTranslate('Углеводы')}
          />
        </div>
        <Button
          variant="outlined"
          size="large"
          type="submit"
          component={Link}
          to={NAVIGATION.createMealEntry}
        >
          {translate.tryTranslate('Внести запись')}
        </Button>
        <MealEntriesList />
      </BodyWrapper>
    </MealEntriesContainer>
  );
});
