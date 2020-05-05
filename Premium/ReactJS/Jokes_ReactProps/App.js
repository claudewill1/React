import React from 'react';
import Joke from './Joke';

function App(){
    return(
        <div>
            <Joke joke={{question: 'How many super saiyans does it take to screw in a light bulb?', punchLine: 'I don\'t know, but it only takes one to defeat freeza'}}/>
            <Joke joke={{question: 'What do you call a boomerang that doesn\'t work?', punchLine: 'A stick'}} />
            <Joke joke={{question: 'What\'s the best thing about Switzerland?', punchLine: 'I don\'t know, but the flag is a big plus.'}} />
            <Joke joke={{question: 'Did you hear about the mathematician who\'s afraid of negative numbers?', punchLine: 'He\'ll stop at nothing to avoid them.'}}/>
            <Joke joke={{question: "Did you hear about the claustrophobic astronaut?", punchLine: "He just needed a little space."}}/>
            
        </div>
    )
}

export default App;