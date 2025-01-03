import { withToggleMode } from '../UserProgramEditor/hocs/withToggleMode';
import { DishEditorComponent } from './chunks/DishEditorComponent';
import { DishViewComponent } from './chunks/DishViewComponent';

export const DishEditor = withToggleMode({
  Editor: DishEditorComponent,
  View: DishViewComponent,
});
