import React from 'react';

export default (props) => {
    return(
    <p>This is ID-{props.match.params.id}</p>
    );
}