import React from 'react'; 
import PropTypes from 'prop-types';


export const EndOfBranchDisplay = ({results}) => {
    
    return (
        <div>
    {results.map(result => console.log(result))}
        </div>
    )
}

EndOfBranchDisplay.propTypes = {
    results: PropTypes.array.isRequired
};