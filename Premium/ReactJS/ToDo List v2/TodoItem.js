import React from 'react';

function TodoItem(props){
    return(
        <div className="todo-item">
            <input type="checkbox" checked={props.item.isComplete}/>
            <p>{props.item.text}</p>
        </div>
    )
}