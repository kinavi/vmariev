import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
  Typography,
} from '@mui/material';
import { UserProgram } from '../../../../mobx/models/UserProgram';
import { useFormik } from 'formik';
import { translate } from '../../../../../../translator';
import { number, object } from 'yup';
import { EditorComponentContainer } from './styled';
import { GOAL_OPTIONS, PHYSICAL_ACTIVITY, SEX_OPTIONS } from './constants';
import { LoadingButton } from '@mui/lab';
import { observer } from 'mobx-react-lite';
import { PFC_BY_GOAL } from '../../../../constants';

type UserProgramFiledType = {
  sex: 'MALE' | 'FEMALE';
  age: number;
  weight: number;
  height: number;
  physicalActivity: 'LOW' | 'LIGHT' | 'MIDDLE' | 'HIGH' | 'EXTREME';
  goal: 'MASS_GAIN' | 'NORMAL' | 'WEIGHT_LOSS';
  ratioCarbohydrates: number;
  ratioFats: number;
  ratioProteins: number;
  isExcludeActivity: boolean;
};

export const EditorComponent = observer(
  (props: {
    mode: 'editor';
    program: UserProgram | null;
    onSubmit: (value: UserProgramFiledType) => Promise<void>;
  }) => {
    const { program, onSubmit } = props;
    const { values, handleSubmit, setFieldValue, isSubmitting, isValid } =
      useFormik({
        initialValues: {
          sex: program?.sex || 'MALE',
          age: program?.age || '',
          weight: program?.weight || '',
          height: program?.height || '',
          physicalActivity: program?.physicalActivity || 'LOW',
          goal: program?.goal || 'NORMAL',
          ratioCarbohydrates: program?.ratioCarbohydrates || 0,
          ratioFats: program?.ratioFats || 0,
          ratioProteins: program?.ratioProteins || 0,
          isExcludeActivity: !!program?.isExcludeActivity,
        },
        onSubmit: async (values) => {
          await onSubmit({
            age: Number(values.age),
            goal: values.goal,
            height: Number(values.height),
            weight: Number(values.weight),
            physicalActivity: values.physicalActivity,
            sex: values.sex,
            ratioCarbohydrates: Number(values.ratioCarbohydrates),
            ratioFats: Number(values.ratioFats),
            ratioProteins: Number(values.ratioProteins),
            isExcludeActivity: values.isExcludeActivity,
          });
        },
        validationSchema: object({
          // sex: string().required(),
          age: number().required(),
          weight: number().required(),
          height: number().required(),
        }),
      });
    const { max: maxProteins, min: minProteins } =
      PFC_BY_GOAL[values.goal].proteins;
    const { max: maxFats, min: minFats } = PFC_BY_GOAL[values.goal].fats;
    const { max: maxCarbohydrates, min: minCarbohydrates } =
      PFC_BY_GOAL[values.goal].carbohydrates;
    const isDisableForm =
      isValid &&
      values.ratioProteins + values.ratioFats + values.ratioCarbohydrates ===
        100;
    return (
      <EditorComponentContainer
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="sex-select">
            {translate.tryTranslate('Ваш пол')}
          </InputLabel>
          <Select
            disabled={isSubmitting}
            labelId="sex-select"
            id="sex-select"
            label={translate.tryTranslate('Ваш пол')}
            value={values.sex}
            onChange={(e) => {
              console.log('e.target.value', e.target.value);
              setFieldValue('sex', e.target.value);
            }}
          >
            {SEX_OPTIONS.map((item) => (
              <MenuItem
                key={item.value}
                value={item.value}
              >
                {translate.tryTranslate(item.label)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          disabled={isSubmitting}
          fullWidth
          id="age-field"
          label={translate.tryTranslate('Ваш возраст, года')}
          variant="outlined"
          value={values.age || null}
          onChange={(e) => {
            const value = e.target.value.replace(/[^\d]*/g, '');
            setFieldValue('age', value);
          }}
        />
        <TextField
          disabled={isSubmitting}
          fullWidth
          id="weight-field"
          label={translate.tryTranslate('Ваш вес, кг')}
          variant="outlined"
          value={values.weight || null}
          onChange={(e) => {
            const value = e.target.value.replace(/[^\d]*/g, '');
            setFieldValue('weight', value);
          }}
        />
        <TextField
          disabled={isSubmitting}
          fullWidth
          id="height-field"
          label={translate.tryTranslate('Ваш рост, см')}
          variant="outlined"
          value={values.height || null}
          onChange={(e) => {
            const value = e.target.value.replace(/[^\d]*/g, '');
            setFieldValue('height', value);
          }}
        />
        <div>
          <FormControlLabel
            className="editor-component__checkbox-wrapper"
            control={
              <Checkbox
                defaultChecked
                checked={values.isExcludeActivity}
                onChange={(event) =>
                  setFieldValue('isExcludeActivity', event.target.checked)
                }
              />
            }
            label="Без учета активности"
          />
          <FormControl fullWidth>
            <InputLabel id="physical-activity-select">
              {translate.tryTranslate('Физическая активность/Тренировки')}
            </InputLabel>
            <Select
              disabled={values.isExcludeActivity || isSubmitting}
              labelId="physical-activity-select"
              id="physical-activity-select"
              label={translate.tryTranslate('Физическая активность/Тренировки')}
              value={values.physicalActivity}
              onChange={(e) => {
                setFieldValue('physicalActivity', e.target.value);
              }}
            >
              {PHYSICAL_ACTIVITY.map((item) => (
                <MenuItem
                  key={item.value}
                  value={item.value}
                >
                  {translate.tryTranslate(item.label)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <FormControl fullWidth>
          <InputLabel id="goal-select">
            {translate.tryTranslate('Цель программы')}
          </InputLabel>
          <Select
            disabled={isSubmitting}
            labelId="goal-select"
            id="goal-select"
            label={translate.tryTranslate('Цель программы')}
            value={values.goal}
            onChange={(e) => {
              setFieldValue('goal', e.target.value);
            }}
          >
            {GOAL_OPTIONS.map((item) => (
              <MenuItem
                key={item.value}
                value={item.value}
              >
                {translate.tryTranslate(item.label)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box sx={{ padding: '0 15px' }}>
          <Typography
            id="non-linear-slider"
            gutterBottom
          >
            {translate.tryTranslate('Белки')}
          </Typography>
          <Slider
            className="editor-component__proteins-slider"
            value={values.ratioProteins || minProteins}
            min={minProteins}
            step={1}
            max={maxProteins}
            onChange={(event, newValue, activeThumb) => {
              setFieldValue(
                'ratioProteins',
                Array.isArray(newValue) ? newValue[0] : newValue
              );
            }}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
            marks={[
              {
                value: minProteins,
                label: minProteins + '%',
              },
              {
                value: maxProteins,
                label: maxProteins + '%',
              },
            ]}
          />
        </Box>
        <Box sx={{ padding: '0 15px' }}>
          <Typography
            id="non-linear-slider"
            gutterBottom
          >
            {translate.tryTranslate('Жиры')}
          </Typography>
          <Slider
            className="editor-component__fats-slider"
            value={values.ratioFats || minFats}
            min={minFats}
            step={1} // () maxProteins - minProteins
            max={maxFats} // - Math.round((100 - values.ratioProteins) / 2) - maxFats - minFats}
            onChange={(event, newValue, activeThumb) => {
              setFieldValue(
                'ratioFats',
                Array.isArray(newValue) ? newValue[0] : newValue
              );
            }}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
            marks={[
              {
                value: minFats,
                label: minFats + '%',
              },
              {
                value: maxFats,
                label: maxFats + '%',
              },
            ]}
          />
        </Box>
        <Box sx={{ padding: '0 15px' }}>
          <Typography
            id="non-linear-slider"
            gutterBottom
          >
            {translate.tryTranslate('Углеводы')}
          </Typography>
          <Slider
            className="editor-component__carbohydrates-slider"
            value={values.ratioCarbohydrates || minCarbohydrates}
            min={minCarbohydrates}
            step={1}
            max={maxCarbohydrates}
            onChange={(event, newValue, activeThumb) => {
              setFieldValue(
                'ratioCarbohydrates',
                Array.isArray(newValue) ? newValue[0] : newValue
              );
            }}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
            marks={[
              {
                value: minCarbohydrates,
                label: minCarbohydrates + '%',
              },
              {
                value: maxCarbohydrates,
                label: maxCarbohydrates + '%',
              },
            ]}
          />
        </Box>
        <LoadingButton
          loading={isSubmitting}
          disabled={!isDisableForm}
          variant="contained"
          size="large"
          type="submit"
        >
          {translate.tryTranslate('Сохранить')}
        </LoadingButton>
      </EditorComponentContainer>
    );
  }
);
