import React from 'react';
import { Header } from '../../containers/Header';
import { About } from '../../containers/About';
import { Services } from '../../containers/Services';
import { Review } from '../../containers/Review';
import { Contact } from '../../containers/Contact';
import { AppContainer } from './styled';

function Landing() {
  return (
    <AppContainer>
      <Header />
      <div className="app__body">
        <About />
        <Services />
        {/* <Tools /> */}
        <Review />
        <Contact />
      </div>
    </AppContainer>
  );
}

export default Landing;
