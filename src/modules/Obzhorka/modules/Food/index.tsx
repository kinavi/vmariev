import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { Loader } from '../../../TimeManager/component/UI/Loader';
import { Header } from '../../components/Header';
import { BodyWrapper, HeaderContentWrapper } from '../../styled';
import { translate } from '../../../../translator';
import { IconButton } from '@mui/material';
import { Icon } from '../../../../ui/components/Icon';
import { FoodEditor } from '../../components/FoodEditor';
import { FoodController } from './mobx/FoodController';

const FoodContainer = styled.div`
  & .food {
    &__title-container {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Food = observer(() => {
  const [foodController] = useState(() => {
    return new FoodController();
  });
  const params = useParams();
  const foodId = params.foodId;
  const [mode, setMode] = useState<'view' | 'editor'>('view');
  const { food, status } = foodController;
  const nav = useNavigate();

  useEffect(() => {
    if (foodId && Number(foodId)) {
      foodController.onInitial(Number(foodId));
    }
  }, [foodId, foodController]);

  return (
    <FoodContainer>
      <Header>
        <HeaderContentWrapper>
          <IconButton
            size="small"
            onClick={() => {
              if (mode === 'editor') {
                setMode('view');
              } else {
                nav(-1);
              }
            }}
          >
            <Icon
              type="ChevronLeft"
              color="#333"
            />
          </IconButton>
          <div className="food__title-container">
            {translate.tryTranslate('Продукт')}
          </div>
          <IconButton
            style={{ opacity: mode === 'editor' ? 0 : 1 }}
            size="small"
            onClick={() => setMode('editor')}
            disabled={mode === 'editor'}
          >
            <Icon
              type="Pen"
              color="#06B27B"
            />
          </IconButton>
        </HeaderContentWrapper>
      </Header>
      <BodyWrapper>
        {status.isLoading && <Loader />}
        {!status.isLoading && (
          <FoodEditor
            mode={mode}
            food={
              food
                ? {
                    carbohydrates: food?.carbohydrates,
                    fats: food?.fats,
                    proteins: food?.proteins,
                    title: food?.title,
                  }
                : undefined
            }
            onEdit={async (fields) => {
              await foodController.updateFood(fields);
              setMode('view');
            }}
          />
        )}
      </BodyWrapper>
    </FoodContainer>
  );
});
