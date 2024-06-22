import { Button } from '../../../Button';
import { Icon } from '../../../Icon';
import { HeaderPropsType } from '../../types';
import { CustomHeaderContainer } from './styled';

export const CustomHeader = (props: HeaderPropsType) => {
  const { title, onClose, isDisable, info, RightPrefix, className } = props;
  return (
    <CustomHeaderContainer className={className}>
      {title && (
        <div className="custom-header__title">
          <div className="custom-header__title-content">
            <div>{title}</div>
            {info && <div className="custom-header__info">{info}</div>}
          </div>
          {RightPrefix}
        </div>
      )}
      {onClose && (
        <Button
          className="custom-header__button"
          onClick={onClose}
          isDisable={isDisable}
        >
          <Icon className="custom-header__icon" type="cross" />
        </Button>
      )}
    </CustomHeaderContainer>
  );
};
