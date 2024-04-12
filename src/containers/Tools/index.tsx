import React, { useState } from 'react';
import { BlockHeader } from '../../components/BlockHeader';
import DATA from '../../INITIAL_DATA.json';
import classNames from 'classnames';
import 'react-multi-carousel/lib/styles.css';
import { ToolsContainer } from './styled';
import { FILTERS } from './constants';
import { Icon } from '../../ui/components/Icon';

export const Tools = () => {
  const [filter, setFilter] = useState<string | null>(null);

  return (
    <ToolsContainer id="tools">
      <BlockHeader title="Основные иструменты" />
      <div className="tools__filter-container">
        <div>Направления</div>
        <div className="tools__filter-list">
          {FILTERS.map((item) => (
            <button
              onClick={() => setFilter(item)}
              className={classNames('tools__filter', {
                tools__filter_active: filter === item,
              })}
              key={`filter${item}`}
            >
              <span>{item}</span>
              {DATA['primary-types'].includes(item) && (
                <Icon
                  type="activeStar"
                  size="16px"
                />
              )}
            </button>
          ))}
          <button
            onClick={() => setFilter(null)}
            className={classNames('tools__filter', {
              tools__filter_active: filter === null,
            })}
          >
            <span>Все</span>
          </button>
        </div>
        <div className="tools__filter-hint hint">
          <div className="hint__icon">
            <Icon
              type="activeStar"
              size="16px"
            />
          </div>
          Главное направление
        </div>
      </div>
      <div className="tools__list">
        {DATA.tools
          .filter((item) => filter === null || item.type === filter)
          .map((item) => (
            <div
              key={`tool${item.label}`}
              className="tools__tool tool"
            >
              {item.label}
              <div className="tool__language">{item.language}</div>
            </div>
          ))}
      </div>
    </ToolsContainer>
  );
};
