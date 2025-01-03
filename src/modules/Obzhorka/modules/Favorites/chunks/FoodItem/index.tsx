import { observer } from 'mobx-react-lite';
import { Food } from '../../../../mobx/models/Food';
import { NAVIGATION } from '../../../../constants';
import { translate } from '../../../../../../translator';
import { Icon } from '../../../../../../ui/components/Icon';
import { FoodItemContainer } from './styled';
import { Box, Typography } from '@mui/material';

export const FoodItem = observer(
  (props: { value: Food; isReadonly?: boolean }) => {
    const { value, isReadonly = false } = props;

    if (isReadonly) {
      return (
        <Box
          display="flex"
          flexDirection="row"
          gap="30px"
          padding="16px"
          bgcolor="#ffffff"
          borderRadius="6px"
          color="#333"
          flexGrow={1}
        >
          <Box
            flexGrow="1"
            alignItems="center"
          >
            <Typography
              fontSize="20px"
              lineHeight="24px"
            >
              {value.title}
            </Typography>
            <Box
              display="flex"
              flexGrow="1"
              marginTop="8px"
              justifyContent="space-between"
            >
              <div>
                {translate.tryTranslate('Бел')}. {value.proteins}{' '}
                {translate.tryTranslate('г')}
              </div>
              <div>
                {translate.tryTranslate('Жир')}. {value.fats}{' '}
                {translate.tryTranslate('г')}
              </div>
              <div>
                {translate.tryTranslate('Угл')}. {value.carbohydrates}{' '}
                {translate.tryTranslate('г')}
              </div>
            </Box>
          </Box>
        </Box>
      );
    }

    return (
      <FoodItemContainer to={NAVIGATION.food(value.id)}>
        <div className="food__content">
          <div className="food__title">{value.title}</div>
          <div className="food__row">
            <div>
              {translate.tryTranslate('Бел')}. {value.proteins}{' '}
              {translate.tryTranslate('г')}
            </div>
            <div>
              {translate.tryTranslate('Жир')}. {value.fats}{' '}
              {translate.tryTranslate('г')}
            </div>
            <div>
              {translate.tryTranslate('Угл')}. {value.carbohydrates}{' '}
              {translate.tryTranslate('г')}
            </div>
          </div>
        </div>
        <Icon
          type="ChevronRight"
          color="#333"
        />
      </FoodItemContainer>
    );
  }
);
