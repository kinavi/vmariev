import { ViewMode } from './chunks/ViewMode';
import { EditMode } from './chunks/EditMode';
import { withTracks } from './hocs/withTracks';
import { withMode } from './hocs/withMode';

export const Task = withTracks(
  withMode({
    View: ViewMode,
    Edit: EditMode,
  })
);
