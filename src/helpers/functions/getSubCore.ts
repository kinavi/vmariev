export const getSubCore = () => {
  return (
    window.location.pathname.split('/').filter((item) => !!item)[0] ||
    'net_home'
  );
};
