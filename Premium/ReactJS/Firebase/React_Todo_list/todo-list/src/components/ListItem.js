import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeToDo} from '../actions';

class ListItem extends Component {
    handleComplete = completeTodoId => {
        const {completeToDo} = this.props;
        completeToDo(completeTodoId);
    };
    render(){
        const {todoId, todo} = this.props;
        return (
            <div key='toDoName' className="col s10 offset-s1 to-do-list-item black">
                <h4>
                    {todo.title}
                    <span 
                        onClick={ () => this.handleComplete(todoId)}
                        className='complete-todo-item waves-effect waves-light blue lighten-5 blue-text text-darken-4 btn'
                    >
                        <i className="large material-icons">Done</i>
                    </span>
                </h4>
            </div>

        );
    }
}
export default connect(null, {completeToDo}) (ListItem);