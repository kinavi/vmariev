import { ModalComponent } from './chunks/ModalComponent';
import { withOutClick } from './hocs/withOutClick';
import { withOverlay } from './hocs/withOverlay';

export * from './chunks/CustomHeader';
export * from './chunks/ChatFooterWrapper';
export * from './chunks/ChatHeader';

export const Modal = withOverlay(withOutClick(ModalComponent));
