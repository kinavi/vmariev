import { withToggleMode } from '../UserProgramEditor/hocs/withToggleMode';
import { EditorComponent } from './chunks/EditorComponent';
import { ViewComponent } from './chunks/ViewComponent';

export const FoodEditor = withToggleMode({
  Editor: EditorComponent,
  View: ViewComponent,
});
