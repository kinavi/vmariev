import React from 'react';
import { Header } from '../../containers/Header';
import { About } from '../../containers/About';
import { Services } from '../../containers/Services';
import { Review } from '../../containers/Review';
import { Contact } from '../../containers/Contact';
import { AppContainer } from './styled';
import { JobSteps } from '../../containers/JobSteps';

function Landing() {
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
      </div>
    </AppContainer>
  );
}

export default Landing;
