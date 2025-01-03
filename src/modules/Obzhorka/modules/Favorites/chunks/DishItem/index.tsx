import { observer } from 'mobx-react-lite';
import { Dish } from '../../../../mobx/models/Dish';
import { NAVIGATION } from '../../../../constants';
import { Icon } from '../../../../../../ui/components/Icon';
import { DishItemBody } from '../DishItemBody';
import { Box } from '@mui/material';
import { DishItemContainer } from './styled';

export const DishItem = observer(
  (props: { value: Dish; isReadonly?: boolean }) => {
    const {
      value: { id },
      isReadonly = false,
    } = props;

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
          <DishItemBody value={props.value} />
        </Box>
      );
    }
    return (
      <DishItemContainer to={NAVIGATION.dish(id)}>
        <DishItemBody value={props.value} />
        <Icon
          type="ChevronRight"
          color="#333"
        />
      </DishItemContainer>
    );
  }
);
