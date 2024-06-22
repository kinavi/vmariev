import { Task } from '../../../../mobx/models/Task';
import { Track } from '../../../../mobx/models/Track';

export type TracksOfDayPropsType = {
  task: Task;
  tracksOfDay: Track[];
  targetDay: number;
};
