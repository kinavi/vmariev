import { UserProgram } from '../../../../mobx/models/UserProgram';
import {
  ViewComponentContainer,
  ViewComponentPlaceholderContainer,
} from './styled';
import { translate } from '../../../../../../translator';
import { observer } from 'mobx-react-lite';
import { Button } from '@mui/material';
import { GOAL_OPTIONS, PHYSICAL_ACTIVITY } from '../EditorComponent/constants';
import { Field } from '../../../Field';

export const ViewComponent = observer(
  (props: { program: UserProgram | null; onOpenEditor: () => void }) => {
    const { program, onOpenEditor } = props;
    if (program === null) {
      return (
        <ViewComponentPlaceholderContainer>
          <div>
            {translate.tryTranslate(
              'Для контроля питания нужно настроить программу питания в вашем профиле'
            )}
          </div>
          <Button
            variant="outlined"
            size="large"
            onClick={onOpenEditor}
          >
            {translate.tryTranslate('Настроить программу')}
          </Button>
        </ViewComponentPlaceholderContainer>
      );
    }
    return (
      <ViewComponentContainer>
        <div className="view-component__top-container">
          <div className="view-component__column view-component__column_center">
            <div className="view-component__column-title">
              {translate.tryTranslate('Дневная норма')}
            </div>
            <div className="view-component__count view-component__calorie">
              {program.caloriesNormPerDay +
                ' ' +
                translate.tryTranslate('ккал')}
            </div>
          </div>
          <div className="view-component__row">
            <div className="view-component__column view-component__column_center">
              <div className="view-component__column-title">
                {translate.tryTranslate('Белки')}
              </div>
              <div className="view-component__count view-component__proteins">
                {program.proteinsNormPerDayToString}
              </div>
              <div>{program.ratioProteins + ' %'}</div>
            </div>
            <div className="view-component__column view-component__column_center">
              <div className="view-component__column-title">
                {translate.tryTranslate('Жиры')}
              </div>
              <div className="view-component__count view-component__fats">
                {program.fatsNormPerDayToString}
              </div>
              <div>{program.ratioFats + ' %'}</div>
            </div>
            <div className="view-component__column view-component__column_center">
              <div className="view-component__column-title">
                {translate.tryTranslate('Углеводы')}
              </div>
              <div className="view-component__count view-component__carbohydrates">
                {program.carbohydratesNormPerDayToString}
              </div>
              <div>{program.ratioCarbohydrates + ' %'}</div>
            </div>
          </div>
        </div>
        <div className="view-component__botton-container">
          <div className="view-component__row">
            <Field
              className="view-component__column"
              label={translate.tryTranslate('Пол')}
            >
              {translate.tryTranslate(
                program.sex === 'MALE' ? 'Мужской' : 'Женский'
              )}
            </Field>
            <Field
              className="view-component__column"
              label={translate.tryTranslate('Возраст, года')}
            >
              {program.age}
            </Field>
          </div>
          <div className="view-component__row">
            <Field
              className="view-component__column"
              label={translate.tryTranslate('Вес, кг')}
            >
              {program.weight}
            </Field>
            <Field
              className="view-component__column"
              label={translate.tryTranslate('Рост, см')}
            >
              {program.height}
            </Field>
          </div>
          <div className="view-component__row">
            <Field
              className="view-component__column"
              label={translate.tryTranslate('Активность')}
            >
              {program.isExcludeActivity
                ? translate.tryTranslate('Без учета активности')
                : translate.tryTranslate(
                    PHYSICAL_ACTIVITY.find(
                      (item) => item.value === program.physicalActivity
                    )?.label || ''
                  )}
            </Field>
          </div>
          <div className="view-component__row">
            <Field
              className="view-component__column"
              label={translate.tryTranslate('Цель')}
            >
              {translate.tryTranslate(
                GOAL_OPTIONS.find((item) => item.value === program.goal)
                  ?.label || ''
              )}
            </Field>
          </div>
        </div>
      </ViewComponentContainer>
    );
  }
);
