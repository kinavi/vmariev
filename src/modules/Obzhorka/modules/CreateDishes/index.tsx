import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { Header } from '../../components/Header';
import { BodyWrapper, HeaderContentWrapper } from '../../styled';
import { Box, IconButton, Typography } from '@mui/material';
import { Icon } from '../../../../ui/components/Icon';
import { translate } from '../../../../translator';
import { useNavigate } from 'react-router-dom';
import { useObjorkaStore } from '../../mobx';
import { DishEditor } from '../../components/DishEditor';

const CreateDishesContainer = styled.div`
  & .create-foods {
    &__title-container {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const CreateDishes = observer(() => {
  const {
    dishes: { create },
  } = useObjorkaStore();
  const nav = useNavigate();
  const goBackRedirect = () => {
    nav(-1);
  };
  return (
    <CreateDishesContainer>
      <Header>
        <HeaderContentWrapper>
          <IconButton
            size="small"
            onClick={goBackRedirect}
          >
            <Icon
              type="ChevronLeft"
              color="#333"
            />
          </IconButton>
          <Box
            marginRight={'34px'}
            className="create-foods__title-container"
          >
            {translate.tryTranslate('Создание блюда')}
          </Box>
        </HeaderContentWrapper>
      </Header>
      <BodyWrapper>
        <DishEditor
          mode="editor"
          onEdit={(value) => {
            return create(value).then(goBackRedirect);
          }}
        />
      </BodyWrapper>
    </CreateDishesContainer>
  );
});
