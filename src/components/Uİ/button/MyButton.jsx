import React from 'react';

const myButton = ({children, ...props}) => {
    return (
        <button {...props} className="myBtn">
            {children}
        </button>
    );
};

export default myButton;