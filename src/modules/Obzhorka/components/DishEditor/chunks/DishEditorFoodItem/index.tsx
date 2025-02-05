import { observer } from 'mobx-react-lite';
import { Food } from '../../../../mobx/models/Food';
import { Box, IconButton } from '@mui/material';
import { FoodItem } from '../../../../modules/Favorites/chunks/FoodItem';
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import { translate } from '../../../../../../translator';

const DishEditorFoodItemContainer = styled.div`
  display: flex;
  background: white;
`;

export const DishEditorFoodItem = observer(
  (props: {
    value: { food: Food; weight: number; key: string };
    onRemove?: (key: string) => void;
  }) => {
    const { onRemove } = props;
    return (
      <DishEditorFoodItemContainer>
        <FoodItem
          isReadonly
          value={props.value.food}
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap="8px"
          padding="16px"
          alignItems="center"
        >
          <Box fontSize="22px">{props.value.weight}</Box>
          <Box>{translate.tryTranslate('грамм')}</Box>
        </Box>
        {onRemove && (
          <IconButton
            aria-label="delete"
            onClick={() => {
              onRemove(props.value.key);
            }}
          >
            <DeleteIcon />
          </IconButton>
        )}
      </DishEditorFoodItemContainer>
    );
  }
);
