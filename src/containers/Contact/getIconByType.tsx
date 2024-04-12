import { Icon } from '../../ui/components/Icon';

export const getIconByType = (
  type: 'telegram' | 'email' | string,
  size = '40px'
) => {
  switch (type) {
    case 'telegram':
      return (
        <Icon
          type="telegram"
          size={size}
          color="hsla(33, 42%, 60%, 1)"
        />
      );
    case 'email':
      return (
        <Icon
          type="email"
          size={size}
          color="hsla(33, 42%, 60%, 1)"
        />
      );
    default:
      return null;
  }
};
