import { GiftType } from '../../types';

export type ToolbarPropsType = {
  position: [number, number];
  gifts: GiftType[];
  onSelect: (gift: GiftType) => void;
};
