import React from 'react'; 
import PropTypes from 'prop-types';


export const EndOfBranchDisplay = ({results}) => {

        let learningStyle; 
         let count = {}
        let compare = 0
        let mostFrequent; 
    
        for (let i = 0; i < results.length; i++) {
            let current = results[i];
    
            if (count[current] === undefined) {
                count[current] = 1;
            } else {
                count[current] = count[current] + 1;
            }
    
            if (count[current] > compare) {
                compare = count[current];
                mostFrequent = results[i];
            };
        };
       if (mostFrequent === 'A') {
           learningStyle = 'Visual';
       } else if (mostFrequent === 'B') {
           learningStyle = 'Reading / Writing';
       } else if (mostFrequent === 'C') {
           learningStyle = 'Hybrid. Combination of both';
       };

    
    
    return (
        <section className='ending-results-section'>
        <h2>Congragulations!</h2>
        <p>You have made it to the end of the session.</p>
        <p>Your learning style results are available below.</p>
        <p>These results are accumulated by which option you chose for each question.</p>
        <section>
            <p>It looks like you're a {learningStyle} learner!</p>
        </section>
        </section>
    )
}

EndOfBranchDisplay.propTypes = {
    results: PropTypes.array.isRequired
};