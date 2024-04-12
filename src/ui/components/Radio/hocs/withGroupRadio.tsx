import { WithGroupRadioType } from '../types';
import { RadioContainer } from '../styled';

export const withGroupRadio: WithGroupRadioType = (Component) => (props) => {
  const {
    className,
    children,
    value,
    onChange,
    isDisable = false,
    name = 'radio',
    gap = 0,
    direction = 'column',
  } = props;

  return (
    <RadioContainer
      gap={gap}
      className={className}
      isDisable={isDisable}
      direction={direction}
    >
      {children &&
        children.length &&
        children.map((item) => (
          <Component
            className="radio__item"
            key={`radio_item_${item.id}`}
            value={value || ''}
            name={name}
            item={item}
            isDisable={isDisable}
            onChange={onChange}
          />
        ))}
    </RadioContainer>
  );
};

// 👇️ set display name
// WithGroupRadio.displayName = 'MyApp';
