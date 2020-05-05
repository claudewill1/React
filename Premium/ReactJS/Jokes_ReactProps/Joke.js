import React from 'react';

function Joke(props){
    return(
        <div className="joke-card">
            <h3>Question: {props.joke.question}</h3>
            <h3>Answer: {props.joke.answer}</h3>
            <hr />
        </div>
    )
}

export default Joke;