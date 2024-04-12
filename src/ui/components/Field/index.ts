import { withPattern } from './hocs/withDirection';
import { ColumnPatternField } from './chunks/ColumnPatternField';
import { RowPatternField } from './chunks/RowPatternField';

export const Field = withPattern({
  Column: ColumnPatternField,
  Row: RowPatternField,
});
