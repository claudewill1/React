import React from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';

function App(){
    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item.text} 
        isComplete={item.completed} />);
        return(
            <div className="todo-list">
                {todoItems}
            </div>
        )
}