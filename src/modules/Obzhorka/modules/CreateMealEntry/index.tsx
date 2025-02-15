import { observer } from 'mobx-react-lite';
import { Header } from '../../components/Header';
import { BodyWrapper, HeaderContentWrapper } from '../../styled';
import {
  Autocomplete,
  CircularProgress,
  IconButton,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { Icon } from '../../../../ui/components/Icon';
import { useNavigate } from 'react-router-dom';
import format from 'date-fns/format';
import ru from 'date-fns/locale/ru';
import en from 'date-fns/locale/en-US';
import { translate } from '../../../../translator';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Food } from '../../mobx/models/Food';
import { apiServise } from '../../../../api';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';
import { useObjorkaStore } from '../../mobx';
import { CreateMealEntryContainer } from './styled';
import { Dish } from '../../mobx/models/Dish';

enum EntryType {
  dish = 'dish',
  food = 'food',
}

interface FoodField {
  entryType: EntryType;
  foodId: number | null;
  dishId: number | null;
  weight: number;
}

export const CreateMealEntry = observer(() => {
  const {
    mealEntries: { create },
    refreshMealEntries,
  } = useObjorkaStore();
  const nav = useNavigate();
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<readonly (Food | Dish)[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFoodSelectOpen = () => {
    setOpen(true);
    (async () => {
      setLoading(true);
      const result = await apiServise.domains.objorka.foods.loadSavedFoods();
      const _food = result?.map((item) => new Food(item));
      setLoading(false);
      setOptions([..._food]);
    })();
  };

  const handleDishSelectOpen = () => {
    setOpen(true);
    (async () => {
      setLoading(true);
      const result = await apiServise.domains.objorka.dishes.loadSavedList({
        status: 'ACTIVE',
      });
      const _dishes = result?.map((item) => new Dish(item));
      setLoading(false);
      setOptions([..._dishes]);
    })();
  };

  const handleFoodSelectClose = () => {
    setOpen(false);
    setOptions([]);
  };

  const handleDishSelectClose = () => {
    setOpen(false);
    setOptions([]);
  };

  const handleClickBack = () => {
    nav(-1);
  };

  const { isSubmitting, values, setFieldValue, isValid, handleSubmit, dirty } =
    useFormik<FoodField>({
      initialValues: {
        entryType: EntryType.food,
        dishId: null,
        foodId: null,
        weight: NaN,
      },
      onSubmit: async (value) => {
        const _entryId =
          value.entryType === EntryType.food ? value.foodId : value.dishId;
        if (_entryId !== null && value.weight !== null) {
          await create({
            entryId: _entryId,
            weight: value.weight,
            entryType: value.entryType,
          });
          refreshMealEntries();
          handleClickBack();
        }
      },
      validationSchema: Yup.object().shape({
        weight: Yup.number().notOneOf([NaN]).required(),
      }),
      validateOnChange: true,
      validateOnMount: true,
    });

  return (
    <CreateMealEntryContainer
      onSubmit={(e) => {
        e.preventDefault();
        return handleSubmit();
      }}
    >
      <Header>
        <HeaderContentWrapper>
          <IconButton
            size="small"
            onClick={handleClickBack}
          >
            <Icon
              type="ChevronLeft"
              color="#333"
            />
          </IconButton>
          <div className="create-meal-entry__title-container">
            <div>
              {format(new Date(), 'dd MMMM yyyy', {
                locale: translate.lang === 'en' ? en : ru,
              })}
            </div>
            <div>
              {format(new Date(), 'HH:mm', {
                locale: translate.lang === 'en' ? en : ru,
              })}
            </div>
          </div>
          <IconButton
            size="small"
            disabled
            style={{ opacity: 0 }}
            onClick={() => {}}
          >
            <Icon
              type="ChevronRight"
              color="#333"
            />
          </IconButton>
        </HeaderContentWrapper>
      </Header>
      <BodyWrapper>
        <ToggleButtonGroup
          value={values.entryType}
          exclusive
          onChange={(
            event: React.MouseEvent<HTMLElement>,
            newAlignment: EntryType
          ) => {
            setFieldValue('foodId', null);
            setFieldValue('dishId', null);
            setFieldValue('entryType', newAlignment);
          }}
          aria-label="text alignment"
          fullWidth
        >
          <ToggleButton
            value="food"
            aria-label="left aligned"
            disabled={values.entryType === EntryType.food}
          >
            {translate.tryTranslate('Продукты')}
          </ToggleButton>
          <ToggleButton
            value="dish"
            aria-label="centered"
            disabled={values.entryType === EntryType.dish}
          >
            {translate.tryTranslate('Блюда')}
          </ToggleButton>
        </ToggleButtonGroup>
        <Autocomplete
          open={open}
          onOpen={
            values.entryType === EntryType.food
              ? handleFoodSelectOpen
              : handleDishSelectOpen
          }
          onClose={
            values.entryType === EntryType.food
              ? handleFoodSelectClose
              : handleDishSelectClose
          }
          onChange={(e, value) => {
            setFieldValue(
              values.entryType === EntryType.food ? 'foodId' : 'dishId',
              value?.id
            );
          }}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          getOptionLabel={(option) => option.title}
          getOptionKey={(option) => option.id}
          options={options}
          loading={loading}
          renderInput={(params) => (
            <TextField
              {...params}
              label={
                values.entryType === EntryType.food
                  ? translate.tryTranslate('Продукт')
                  : translate.tryTranslate('Блюдо')
              }
              slotProps={{
                input: {
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loading ? (
                        <CircularProgress
                          color="inherit"
                          size={20}
                        />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                },
              }}
            />
          )}
        />
        <TextField
          disabled={isSubmitting}
          fullWidth
          id="weight-field"
          label={
            values.entryType === EntryType.food
              ? translate.tryTranslate('Вес продукта, грам')
              : translate.tryTranslate('Вес съеденной части блюда, грам')
          }
          variant="outlined"
          value={values.weight || null}
          onChange={(e) => {
            const value = e.target.value;
            if (!value) {
              setFieldValue('weight', value);
            }
            if (!!value.match(/^\d{1,}[.]?\d{0,2}$/g)) {
              setFieldValue('weight', value);
            }
          }}
        />
        <LoadingButton
          loading={isSubmitting}
          disabled={!isValid || !dirty}
          variant="contained"
          size="large"
          type="submit"
        >
          {translate.tryTranslate('Сохранить')}
        </LoadingButton>
        {/* <AccordionStyled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">
              {translate.tryTranslate('Как правильно указывать граммовку продукта?')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {translate.tryTranslate(
                ''
              )}
            </Typography>
          </AccordionDetails>
        </AccordionStyled> */}
      </BodyWrapper>
    </CreateMealEntryContainer>
  );
});
