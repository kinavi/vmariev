import { observer } from 'mobx-react-lite';
import { Dish } from '../../../../mobx/models/Dish';
import { Box, Typography } from '@mui/material';
import { translate } from '../../../../../../translator';

export const DishItemBody = observer((props: { value: Dish }) => {
  const {
    value: { title, foods },
  } = props;
  const _proteins = foods.reduce((acc, item) => {
    return acc + (item.food.proteins * item.weight) / 100;
  }, 0);
  const _fats = foods.reduce((acc, item) => {
    return acc + (item.food.fats * item.weight) / 100;
  }, 0);
  const _carbohydrates = foods.reduce((acc, item) => {
    return acc + (item.food.carbohydrates * item.weight) / 100;
  }, 0);
  return (
    <Box
      flexGrow="1"
      alignItems="center"
    >
      <Typography
        fontSize="20px"
        lineHeight="24px"
      >
        {title}
      </Typography>
      <Box
        display="flex"
        flexGrow="1"
        gap="4px"
        marginTop="8px"
        justifyContent="space-between"
      >
        <div>
          {translate.tryTranslate('Бел')}. {_proteins.toFixed(2)}{' '}
          {translate.tryTranslate('г')}
        </div>
        <div>
          {translate.tryTranslate('Жир')}. {_fats.toFixed(2)}{' '}
          {translate.tryTranslate('г')}
        </div>
        <div>
          {translate.tryTranslate('Угл')}. {_carbohydrates.toFixed(2)}{' '}
          {translate.tryTranslate('г')}
        </div>
      </Box>
    </Box>
  );
});
