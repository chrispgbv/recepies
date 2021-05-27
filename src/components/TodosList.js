import React,{useState} from 'react'        
import FormTodos from './FormTodos'
import Todos from './Todos'

function TodosList() {
    const [todos,setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos=[todo,...todos]

        setTodos(newTodos)
    };

    const removeTodos = id =>{
        const removeArr =[...todos].filter(todo=> todo.id !== id);
            setTodos(removeArr)
    };

    const editTodos = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );
    };

    const completeTodo = id =>{
        let updateTodos = todos.map(todo => {
            if (todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo
        })
        setTodos(updateTodos);
    };

    return (
        <div className ='todo-app'>
            <h1> ingredients?</h1>
            
            <FormTodos onSubmit ={addTodo}/>
            <div className ="list">
                <Todos todos={todos} completeTodo={completeTodo} removeTodos = {removeTodos} editTodos = {editTodos}/>
            </div>
        </div>
    )
}

export default TodosList
