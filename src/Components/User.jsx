import React from 'react';

export default (props) => {
    return(
    props.match.params.username === ""? 
    <p>Try adding in a username param</p>
    :
    <p>this is {props.match.params.username}'s user page</p>
    
    )
}