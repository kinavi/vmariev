import { GlobalStyle } from '../SignIn/styled';
import Logo from '../../assets/logo.png';
import { translate } from '../../../../translator';
import { Link, useNavigate } from 'react-router-dom';
import { NAVIGATION } from '../../constants';

import { SignUpContainer } from './styled';
import { EmailStep } from './chunks/EmailStep';
import { withStep } from './hocs/withStep';
import { CodeStep } from './chunks/CodeStep';
import { PasswordStep } from './chunks/PasswordStep';
export type StepType = 'Email' | 'Code' | 'Password';

const Steps = withStep({
  Email: EmailStep,
  Code: CodeStep,
  Password: PasswordStep,
});

export const SignUp = () => {
  const navigate = useNavigate();
  return (
    <SignUpContainer>
      <GlobalStyle />
      <img
        className="sign-up__logo"
        src={Logo}
        alt="Logo"
      />
      <h1 className="sign-up__title">
        {translate.tryTranslate('Регистрация')}
      </h1>
      <Steps
        steps={['Email', 'Code', 'Password']}
        onSubmit={() => {
          navigate(NAVIGATION.main);
        }}
      />
      <div className="sign-up__footer">
        <div>
          {translate.tryTranslate(
            'Если у вас есть учетная запись, вы можете войти в нее'
          )}
        </div>
        <Link
          to={NAVIGATION.signIn}
          className="sign-up__link"
        >
          {translate.tryTranslate('Войти')}
        </Link>
      </div>
    </SignUpContainer>
  );
};
