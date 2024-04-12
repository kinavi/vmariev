import React from 'react';
import { ThemeType } from '../../context/types';
import { THEME_LIST } from '../../context/constants';
import { getObjectKeys } from '../../../helpers/functions';
import { Colors, StoryContainer } from '../Colors';
import { Field } from '../../components/Field';
import styled from 'styled-components';

const PaletteContainer = styled(StoryContainer)`
  & .palette__body {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
`;

export const Palette = (props: { theme: ThemeType }) => {
  const theme = THEME_LIST[props.theme];
  const themeKeys = getObjectKeys(theme);
  return (
    <PaletteContainer>
      <h1>Palette</h1>
      <div className="palette__body">
        {themeKeys.map((key) => (
          <div key={`themeKeys${key}`}>
            <h3>{key}</h3>
            <Colors color={theme[key]} />
          </div>
        ))}
      </div>
    </PaletteContainer>
  );
};
