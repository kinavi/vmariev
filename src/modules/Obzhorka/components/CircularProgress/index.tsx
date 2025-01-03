import React from 'react';

interface CircularProgressProps {
  /** Прогресс в процентах (0-100) */
  progress: number;
  /** Размер кольца */
  size?: number;
  /** Толщина линии */
  strokeWidth?: number;
  /** Цвет прогресса */
  color?: string;
  /** Цвет заднего круга */
  backgroundColor?: string;
  /** Контент внутри круга */
  children?: React.JSX.Element | string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  progress,
  size = 100,
  strokeWidth = 10,
  color = '#03A9F4',
  backgroundColor = '#e6e6e6',
  children,
}) => {
  // Радиус круга
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg
      width={size}
      height={size}
    >
      {/* Фон кольца */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={backgroundColor}
        strokeWidth={strokeWidth}
      />
      {/* Прогресс кольца */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{
          transition: 'stroke-dashoffset 0.5s ease',
          transform: 'rotate(-90deg)',
          transformOrigin: 'center',
        }}
      />
      {/* Текст */}
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        fontSize="20px"
        fill={color}
      >
        {children || Math.round(progress) + '%'}
      </text>
    </svg>
  );
};

export default CircularProgress;
