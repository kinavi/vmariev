import { observer } from 'mobx-react-lite';
import { Header } from '../../components/Header';
import { BodyWrapper, HeaderContentWrapper } from '../../styled';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Typography,
} from '@mui/material';
import { translate } from '../../../../translator';
import styled from 'styled-components';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const AccordionStyled = styled(Accordion)`
  &.MuiPaper-root {
    box-shadow: none;
    border: 1px solid rgba(0, 0, 0, 0.12);
    /* border-bottom: none; */
    /* &:last-child {
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    } */
  }
  &.Mui-expanded {
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.12); */
  }
`;

const FaqContainer = styled.div`
  & .faq {
    &__title-container {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px 0;
    }
  }
`;

export const Faq = observer(() => {
  return (
    <FaqContainer>
      <Header>
        <HeaderContentWrapper>
          <div className="faq__title-container">
            {translate.tryTranslate('Вопросы и ответы')}
          </div>
        </HeaderContentWrapper>
      </Header>
      <BodyWrapper>
        <div>
          <AccordionStyled>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">
                {translate.tryTranslate('Как считаются каллории?')}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {translate.tryTranslate(
                  'Калории считаются на основе белков, жиров и углеводов продукта.'
                )}
              </Typography>
            </AccordionDetails>
          </AccordionStyled>
          <AccordionStyled>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">
                {translate.tryTranslate(
                  'Почему граммовка указывается на 100 грамм?'
                )}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {translate.tryTranslate(
                  'Это сделано для удобства подсчета. Обычно на задней стороны упоковки продукта указывается белки, жиры, углеводы с расчетом на 100 грамм продукта'
                )}
              </Typography>
            </AccordionDetails>
          </AccordionStyled>
          <AccordionStyled>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">
                {translate.tryTranslate('Что такое блюдо?')}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {translate.tryTranslate(
                  'Блюда состоят из продуктов. Вы можете сами составить себе блюдо из разных продуктов. Указав вес каждого ингридиента. А при создании записи приема пищи, вы указывает какую часть (в граммах) вы съедаете от выбранного блюда. Это будет особенно полезно, если вы готовите блюдо не только для себя.'
                )}
              </Typography>
            </AccordionDetails>
          </AccordionStyled>
        </div>
      </BodyWrapper>
    </FaqContainer>
  );
});
