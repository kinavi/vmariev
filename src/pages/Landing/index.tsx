import React from 'react';
import { Header } from '../../containers/Header';
import { About } from '../../containers/About';
import { Services } from '../../containers/Services';
import { Review } from '../../containers/Review';
import { Contact } from '../../containers/Contact';
import { AppContainer } from './styled';
import { JobSteps } from '../../containers/JobSteps';
import { ServiceLayout } from '../../containers/ServiceLayout';
import { observer } from 'mobx-react-lite';
import { Modals } from '../../components/Modals';
import { useStore } from '../../mobx';

const Landing = observer(() => {
  const { modals } = useStore();
  return (
    <AppContainer>
      <Header />
      <div className="app__body">
        <About />
        <Services />
        {/* <Tools /> */}
        <JobSteps />
        <Review />
        <Contact />
        <ServiceLayout />
      </div>
      <Modals modal={modals.showModal} />
    </AppContainer>
  );
});

export default Landing;
