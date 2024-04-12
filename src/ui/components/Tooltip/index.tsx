import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import {
  CoordsType,
  SizeType,
  TooltipPositionType,
  TooltipPropsType,
} from './types';
import { Container, TooltipTextContainer } from './styled';

type TooltipTextPropsType = {
  coords: CoordsType;
  position?: TooltipPositionType;
  children: JSX.Element | string;
};

const TooltipText = (props: TooltipTextPropsType) => {
  const { coords, position, children } = props;
  const [size, setSize] = useState<SizeType>({ width: 0, height: 0 });
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (ref.current) {
      const { width, height } = ref.current?.getBoundingClientRect() || {};
      if (width !== undefined && height !== undefined) {
        setSize({
          width: Math.round(width),
          height: Math.round(height),
        });
      }
    }
  }, [ref.current]);

  return ReactDOM.createPortal(
    <TooltipTextContainer
      size={size}
      ref={ref}
      coords={coords}
      position={position}
    >
      {children}
    </TooltipTextContainer>,
    document.getElementsByTagName('body')[0]
  );
};

export const Tooltip: React.FC<TooltipPropsType> = (props) => {
  const {
    children,
    content,
    position = 'up',
    className,
    innerRef,
    isDisable = false,
  } = props;
  const [isHover, setIsHover] = useState(!isDisable);
  const [coords, setCoords] = useState<CoordsType>({
    top: 0,
    height: 0,
    width: 0,
    left: 0,
  });

  const handleEnter = (event: any) => {
    const _coords = event.target.getBoundingClientRect();
    setIsHover(true);
    setCoords({
      top: _coords.top + window.pageYOffset,
      left: _coords.left + window.pageXOffset,
      width: event.target.clientWidth,
      height: event.target.clientHeight,
    });
  };

  return (
    <Container
      onMouseEnter={(event) => {
        if (!isDisable) {
          handleEnter(event);
        }
      }}
      onMouseLeave={() => {
        if (!isDisable) {
          setIsHover(false);
        }
      }}
      className={className}
      ref={innerRef}
    >
      {children}
      {isHover && content && (
        <TooltipText coords={coords} position={position}>
          {content}
        </TooltipText>
      )}
    </Container>
  );
};
