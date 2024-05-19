import React, { useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

export const OutClickWrapper = ({
  children,
  onClickOutside,
  className,
}: {
  children: JSX.Element;
  onClickOutside(): void;
  className?: string;
}) => {
  const ref = useRef(null);
  useOnClickOutside(ref, onClickOutside);
  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
};
