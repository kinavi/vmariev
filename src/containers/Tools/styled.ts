import styled from 'styled-components';
import { LayoutContainer } from '../../styled';

export const ToolsContainer = styled(LayoutContainer)`
  color: #fff;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  & .tools {
    &__filter-list {
      display: flex;
      gap: 20px;
      flex: 1 1;
      min-width: 0;
    }
    &__filter {
      border: none;
      outline: none;
      color: #fff;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      cursor: pointer;
      padding: 10px 16px;
      border-radius: 6px;
      background: rgba(43, 59, 59, 0.5);
      display: flex;
      gap: 10px;

      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
      white-space: nowrap;

      &:hover {
        background: #405959;
      }
      &_active {
        background: #405959;
      }
    }
    &__filter-container {
      display: flex;
      gap: 20px;
      align-items: center;
      margin-bottom: 35px;
    }
    &__filter-hint {
    }
    &__list {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
  }
  & .hint {
    display: flex;
    gap: 12px;
    align-items: center;
    &__icon {
      padding: 7px;
      border-radius: 50px;
      background: #2b3b3b;
      max-height: 30px;
    }
  }
  & .tool {
    position: relative;
    flex: 0 1 calc((100% - 20px * 5) / 6);
    border-radius: 50px;
    background: #2b3b3b;
    overflow: hidden;
    color: #8ec46e;
    text-overflow: ellipsis;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    padding: 10px 20px 10px 50px;
    white-space: nowrap;
    &__language {
      padding: 8px;
      border: 2px solid #8ec46e;
      position: absolute;
      left: 0;
      border-radius: 50px;
      top: 0;
      width: 40px;
      color: #fff;
      text-align: center;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
  }
`;
