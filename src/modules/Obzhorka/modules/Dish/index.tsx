import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Loader } from '../../../TimeManager/component/UI/Loader';
import { Header } from '../../components/Header';
import { BodyWrapper, HeaderContentWrapper } from '../../styled';
import { translate } from '../../../../translator';
import { IconButton } from '@mui/material';
import { Icon } from '../../../../ui/components/Icon';
import { DishController } from './mobx/DishController';
import { DishEditor } from '../../components/DishEditor';
import { guid } from '../../../../helpers/functions';
import { DishContainer } from './styled';

export const Dish = observer(() => {
  const [dishController] = useState(() => {
    return new DishController();
  });
  const params = useParams();
  const foodId = params.foodId;
  const [mode, setMode] = useState<'view' | 'editor'>('view');
  const { dish, status } = dishController;
  const nav = useNavigate();

  useEffect(() => {
    if (foodId && Number(foodId)) {
      dishController.onInitial(Number(foodId));
    }
  }, [foodId]);

  return (
    <DishContainer>
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
          <div className="dish__title-container">
            {translate.tryTranslate('Блюдо')}
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
          <DishEditor
            mode={mode}
            dish={
              dish
                ? {
                    title: dish?.title,
                    foods: dish.foods.map((item) => ({
                      food: item.food,
                      weight: item.weight,
                      key: guid(),
                    })),
                    status: dish.status,
                  }
                : undefined
            }
            onEdit={async (fields) => {
              await dishController.updateFood({
                title: fields.title,
                foods: fields.foods.map((item) => ({
                  foodId: item.food.id,
                  weight: item.weight,
                })),
                status: fields?.status,
              });
              setMode('view');
            }}
            onChangeStatus={(updatedFields) => {
              return dishController.updateFood({
                title: updatedFields.title,
                foods: updatedFields.foods.map((item) => ({
                  foodId: item.food.id,
                  weight: item.weight,
                })),
                status: updatedFields.status,
              });
            }}
          />
        )}
      </BodyWrapper>
    </DishContainer>
  );
});
