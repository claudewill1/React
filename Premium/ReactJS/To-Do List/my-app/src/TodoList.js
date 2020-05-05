import React, {Component} from 'react';

class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this);
    }

    addItem(e){
        if(this._inputElement.value !== ""){
            let newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState)=>{
                return {
                    items: prevState.items.concat(newItems)
                };
            });

            this._inputElement.value = "";
        }
        console.log(this.state.items);

        e.preventDefault();
    }
    
    render(){
        return(
            <div className='todoListMain'>
                <div className='header'>
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} 
                            placeholder='Enter Task'>

                        </input>
                        <button type='submit'>add</button>
                    </form>
                </div>
            </div>
        );
    }
}