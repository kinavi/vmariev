import { useEffect, useRef, useState } from 'react';
import { Tooltip } from '../../components/Tooltip';

export const TextTruncateWrapper = (props: {
  children: string;
  className?: string;
}) => {
  const { children, className } = props;
  const refContainer = useRef<HTMLDivElement>(null);
  const [hasTruncate, setHasTruncate] = useState(false);
  useEffect(() => {
    if (refContainer.current) {
      setHasTruncate(
        refContainer.current?.scrollWidth > refContainer.current?.clientWidth
      );
    }
  }, [refContainer.current, children]);
  return (
    <Tooltip
      className={className}
      isDisable={!hasTruncate}
      innerRef={refContainer}
      content={children}
    >
      {children}
    </Tooltip>
  );
};
