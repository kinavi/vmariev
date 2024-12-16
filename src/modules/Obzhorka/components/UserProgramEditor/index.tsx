import { observer } from 'mobx-react-lite';
import { withToggleMode } from './hocs/withToggleMode';
import { EditorComponent } from './chunks/EditorComponent';
import { ViewComponent } from './chunks/ViewComponent';

export const UserProgramEditor = withToggleMode({
  Editor: EditorComponent,
  View: ViewComponent,
});
