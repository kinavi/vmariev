import styled from 'styled-components';
import { createColorPalette } from './createColorPalette';
import { Field } from '../components/Field';
import { Color } from './Color';
import { getObjectKeys } from '../../helpers/functions';

export const StoryContainer = styled.div`
  padding: 20px 40px;
  & h1 {
    width: 100%;
    border-bottom: 1px solid gray;
    padding-bottom: 10px;
  }
  & h1,
  h2,
  h3 {
    text-transform: capitalize;
  }
`;

const ColorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  & .colors {
    &__row {
      display: flex;
      gap: 10px;
    }
  }
`;

export const Colors = (props: { color: string }) => {
  const colors = createColorPalette(props.color);
  return (
    <ColorsContainer>
      <Color color={props.color} />
      <div className="colors__row">
        {getObjectKeys(colors)
          .reverse()
          .map((color) => (
            <Field
              label={String(color)}
              key={`PRIMARY_COLORS-${color}`}
            >
              <Color color={colors[color]} />
            </Field>
          ))}
      </div>
    </ColorsContainer>
  );
};
