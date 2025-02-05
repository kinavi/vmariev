import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { Header } from '../../components/Header';
import { BodyWrapper, HeaderContentWrapper } from '../../styled';
import { IconButton } from '@mui/material';
import { Icon } from '../../../../ui/components/Icon';
import { translate } from '../../../../translator';
import { useNavigate } from 'react-router-dom';
import { FoodEditor } from '../../components/FoodEditor';
import { useObjorkaStore } from '../../mobx';

const CreateFoodContainer = styled.div`
  & .create-foods {
    &__title-container {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const CreateFood = observer(() => {
  const {
    foods: { create: createProduct },
  } = useObjorkaStore();
  const nav = useNavigate();
  const goBackRedirect = () => {
    nav(-1);
  };
  return (
    <CreateFoodContainer>
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
          <div
            style={{
              marginRight: '34px',
            }}
            className="create-foods__title-container"
          >
            {translate.tryTranslate('Создание продукта')}
          </div>
        </HeaderContentWrapper>
      </Header>
      <BodyWrapper>
        <FoodEditor
          mode="editor"
          onEdit={(value) => {
            return createProduct(value).then(goBackRedirect);
          }}
        />
        {/* {status.isLoading && <Loader />} */}
        {/* {!status.isLoading && <FoodList />} */}
      </BodyWrapper>
    </CreateFoodContainer>
  );
});
