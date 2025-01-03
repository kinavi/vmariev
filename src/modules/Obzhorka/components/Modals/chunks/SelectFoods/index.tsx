import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { ChatHeader, Modal } from '../../../../../../ui/components/Modal';
import { useObjorkaStore } from '../../../../mobx';
import { translate } from '../../../../../../translator';
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { apiServise } from '../../../../../../api';
import { Food } from '../../../../mobx/models/Food';
import { guid } from '../../../../../../helpers/functions';

export const SelectFoodsContainer = styled(Modal)`
  background: white;
  width: 100%;
  max-width: none;
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SelectFoods = observer(() => {
  const {
    modal: {
      onCloseLastModal,
      modals: {
        selectFoods: { payload },
      },
    },
  } = useObjorkaStore();
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<readonly Food[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
  const [weight, setWeight] = useState<string>('');

  const handleOpen = () => {
    setOpen(true);
    (async () => {
      setLoading(true);
      const result = await apiServise.domains.objorka.foods.loadSavedFoods();
      const _food = result?.map((item) => new Food(item));
      setLoading(false);
      setOptions([..._food]);
    })();
  };

  const handleClose = () => {
    setOpen(false);
    setOptions([]);
  };

  return (
    <SelectFoodsContainer>
      <ChatHeader
        onClose={onCloseLastModal}
        pattern="white"
        title={translate.tryTranslate('Выберите продукты')}
      />
      <Box
        padding="0 16px 28px"
        display="flex"
        flexDirection="column"
        gap="16px"
      >
        <Autocomplete
          open={open}
          onOpen={handleOpen}
          onClose={handleClose}
          onChange={(e, value) => {
            setSelectedFood(value);
          }}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          getOptionLabel={(option) => option.title}
          getOptionKey={(option) => option.id}
          options={options}
          loading={loading}
          renderInput={(params) => (
            <TextField
              {...params}
              label={translate.tryTranslate('Продукт')}
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
          fullWidth
          id="dish-title-field"
          label={translate.tryTranslate('Вес, грамм')}
          variant="outlined"
          value={weight}
          onChange={(e) => {
            const value = e.target.value;
            if (!value) {
              setWeight(value);
            }
            if (!!value.match(/^\d{1,}[.]?\d{0,2}$/g)) {
              setWeight(value);
            }
          }}
        />
        <Button
          disabled={!selectedFood || !Number(weight)}
          sx={{
            marginTop: '16px',
          }}
          variant="contained"
          size="large"
          onClick={() => {
            if (selectedFood && Number(weight)) {
              payload.onSubmit({
                food: selectedFood,
                weight: Number(weight),
                key: guid(),
              });
            }
          }}
        >
          {translate.tryTranslate('Добавить')}
        </Button>
      </Box>
    </SelectFoodsContainer>
  );
});
