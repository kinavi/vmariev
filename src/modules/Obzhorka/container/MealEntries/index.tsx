import { observer } from 'mobx-react-lite';
import { Header } from '../../components/Header';
import { IconButton } from '@mui/material';
import { Icon } from '../../../../ui/components/Icon';
import styled from 'styled-components';
import { BodyWrapper, HeaderContentWrapper } from '../../styled';

const MealEntriesContainer = styled.div`
  & .meal-entries {
    &__date-container {
      flex-grow: 1;
    }
  }
`;

export const MealEntries = observer(() => {
  return (
    <MealEntriesContainer>
      <Header>
        <HeaderContentWrapper>
          <IconButton
            size="small"
            onClick={() => {}}
          >
            <Icon
              type="ChevronLeft"
              color="#333"
            />
          </IconButton>
          <div className="meal-entries__date-container">
            <div>7 января 2025</div>
            <div>Понедельник</div>
          </div>
          <IconButton
            size="small"
            onClick={() => {}}
          >
            <Icon
              type="ChevronRight"
              color="#333"
            />
          </IconButton>
        </HeaderContentWrapper>
      </Header>
      <BodyWrapper>body</BodyWrapper>
    </MealEntriesContainer>
  );
});
