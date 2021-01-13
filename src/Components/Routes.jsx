import React from 'react';
import DisplayQuestions from './DisplayQuestions'
import NavBar from './NavBar'

import {BrowserRouter, Route} from 'react-router-dom'
import { LandingPage } from './LandingPage';
import { EndOfBranchDisplay } from './EndOfBranchDisplay';

function Routes() {
  return (
   <div>
   <NavBar />
     <BrowserRouter>
       <Route exact path='/' component={LandingPage} />
        <Route exact path='/displayquestion' component={DisplayQuestions}/>
        <Route exact path='/endbranch' component={EndOfBranchDisplay}/>
   </BrowserRouter>
   </div>
  );
}

export default Routes;
