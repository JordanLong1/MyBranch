import React from 'react'; 
import PropTypes from 'prop-types';


export const EndOfBranchDisplay = ({results}) => {
        console.log('yooooo', results)
    
    return (
        <section>
        <h2>Congragulations! You have made it to the end of the session.</h2>
        <p>Your learning style results are available below.</p>
        <p>These results are accumulated by which option you chose for each question.</p>
        <section>
            <p>It looks like you're a {results} learner!</p>
        </section>
        </section>
    )
}

EndOfBranchDisplay.propTypes = {
    results: PropTypes.string.isRequired
};