import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DishItemContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  padding: 16px;
  background: #ffffff;
  border-radius: 6px;
  text-decoration: none;
  color: #333;
  gap: 30px;
`;
