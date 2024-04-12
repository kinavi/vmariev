import styled from 'styled-components';

const ColorContainer = styled.div`
  border-radius: 6px;
  align-items: center;
  display: flex;
  justify-content: center;
  text-transform: lowercase;
  width: 100px;
  height: 100px;
`;

export const Color = (props: { color: string }) => {
  return (
    <ColorContainer
      className="colors__color"
      style={{
        background: props.color,
      }}
    />
  );
};
