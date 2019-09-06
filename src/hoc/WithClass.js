import React from 'react';

const withClass = props => (
    <div classname={props.classes}>
    {props.children}
    </div>
);

export default withClass;