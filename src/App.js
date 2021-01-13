import React from 'react';
import DisplayQuestions from './Components/DisplayQuestions'
import {BrowserRouter, Route} from 'react-router-dom'
import { LandingPage } from './Components/LandingPage';

function App() {
  return (
   <div className='app'>
     <BrowserRouter>
       <Route exact path='/' component={LandingPage} />
        <Route exact path='/displayquestion' component={DisplayQuestions}/>
   </BrowserRouter>
   </div>
  );
}

export default App;
