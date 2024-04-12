import React from 'react';

const Input = (props) => {
    const { ...nativeProps } = props;

    return (
        <>
            <input type="text" { ...nativeProps } />
        </>
    );
};

export default Input;