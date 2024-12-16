import { UserProgram } from '../../../../mobx/models/UserProgram';
import {
  ViewComponentContainer,
  ViewComponentPlaceholderContainer,
} from './styled';
import { translate } from '../../../../../../translator';
import { observer } from 'mobx-react-lite';
import { Button } from '@mui/material';
import { GOAL_OPTIONS, PHYSICAL_ACTIVITY } from '../EditorComponent/constants';

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
                {Math.round(
                  (program.ratioProteins / 100) * program.caloriesNormPerDay
                ) +
                  ' ' +
                  translate.tryTranslate('ккал')}
              </div>
              <div>{program.ratioProteins + ' %'}</div>
            </div>
            <div className="view-component__column view-component__column_center">
              <div className="view-component__column-title">
                {translate.tryTranslate('Жиры')}
              </div>
              <div className="view-component__count view-component__fats">
                {Math.round(
                  (program.ratioFats / 100) * program.caloriesNormPerDay
                ) +
                  ' ' +
                  translate.tryTranslate('ккал')}
              </div>
              <div>{program.ratioFats + ' %'}</div>
            </div>
            <div className="view-component__column view-component__column_center">
              <div className="view-component__column-title">
                {translate.tryTranslate('Углеводы')}
              </div>
              <div className="view-component__count view-component__carbohydrates">
                {Math.round(
                  (program.ratioCarbohydrates / 100) *
                    program.caloriesNormPerDay
                ) +
                  ' ' +
                  translate.tryTranslate('ккал')}
              </div>
              <div>{program.ratioCarbohydrates + ' %'}</div>
            </div>
          </div>
        </div>
        <div className="view-component__botton-container">
          <div className="view-component__row">
            <div className="view-component__column">
              <div>{translate.tryTranslate('Пол')}</div>
              <div className="view-component__column-content">
                {translate.tryTranslate(
                  program.sex === 'MALE' ? 'Мужской' : 'Женский'
                )}
              </div>
            </div>
            <div className="view-component__column">
              <div>{translate.tryTranslate('Возраст, года')}</div>
              <div className="view-component__column-content">
                {program.age}
              </div>
            </div>
          </div>
          <div className="view-component__row">
            <div className="view-component__column">
              <div>{translate.tryTranslate('Вес, кг')}</div>
              <div className="view-component__column-content">
                {program.weight}
              </div>
            </div>
            <div className="view-component__column">
              <div>{translate.tryTranslate('Рост, см')}</div>
              <div className="view-component__column-content">
                {program.height}
              </div>
            </div>
          </div>
          <div className="view-component__row">
            <div className="view-component__column">
              <div>{translate.tryTranslate('Активность')}</div>
              <div className="view-component__column-content">
                {program.isExcludeActivity
                  ? translate.tryTranslate('Без учета активности')
                  : translate.tryTranslate(
                      PHYSICAL_ACTIVITY.find(
                        (item) => item.value === program.physicalActivity
                      )?.label || ''
                    )}
              </div>
            </div>
          </div>
          <div className="view-component__row">
            <div className="view-component__column">
              <div>{translate.tryTranslate('Цель')}</div>
              <div className="view-component__column-content">
                {translate.tryTranslate(
                  GOAL_OPTIONS.find((item) => item.value === program.goal)
                    ?.label || ''
                )}
              </div>
            </div>
          </div>
        </div>
      </ViewComponentContainer>
    );
  }
);
