import { translate } from '../../../../translator';
import { Header } from '../../components/Header';
import { observer } from 'mobx-react-lite';
import { useObjorkaStore } from '../../mobx';
import { IconButton } from '@mui/material';
import { UserProgramEditor } from '../../components/UserProgramEditor';
import { useState } from 'react';
import { Icon } from '../../../../ui/components/Icon';
import { UserProgram } from '../../mobx/models/UserProgram';
import { ProfileContainer } from './styled';
import { BodyWrapper, HeaderContentWrapper } from '../../styled';

export const Profile = observer(() => {
  const { userProgram, createProgram } = useObjorkaStore();
  const [mode, setMode] = useState<'editor' | 'view'>('view');

  const handleClickBack = () => {
    setMode('view');
  };

  const handleClickEditPrograms = () => {
    setMode('editor');
  };

  // TODO: тут нужно реали
  return (
    <ProfileContainer>
      <Header>
        <HeaderContentWrapper>
          {mode === 'editor' && (
            <IconButton
              size="small"
              onClick={handleClickBack}
            >
              <Icon
                type="ChevronLeft"
                color="#333"
              />
            </IconButton>
          )}
          <div
            className="profile__header-title"
            style={{
              marginRight: mode === 'editor' ? '34px' : '0',
              marginLeft:
                userProgram instanceof UserProgram && mode === 'view'
                  ? '34px'
                  : '0',
            }}
          >
            {translate.tryTranslate('Профиль')}
          </div>
          {userProgram instanceof UserProgram && mode === 'view' && (
            <IconButton
              size="small"
              onClick={handleClickEditPrograms}
            >
              <Icon
                type="Pen"
                color="#333"
              />
            </IconButton>
          )}
        </HeaderContentWrapper>
      </Header>
      <BodyWrapper>
        <UserProgramEditor
          program={userProgram}
          mode={mode}
          onSubmit={async (value) => {
            const isSuccess = await createProgram(value);
            if (isSuccess) {
              setMode('view');
            }
          }}
          onOpenEditor={handleClickEditPrograms}
        />
      </BodyWrapper>
    </ProfileContainer>
  );
});
