import React from 'react'; 
import { useHistory } from "react-router-dom";
export const LandingPage = () => {

    const history = useHistory(); 

    const handleClick = () => {
      
        history.push('/displayquestion');
    };

    return (
        <header className='landing-page-container'>
        <h1>Welcome to Jordan Long's Branching Scenario</h1>
        <p>We are going to assess your learning style!</p>
        <button onClick={handleClick}>Get Started</button>
        </header>
    ); 
};