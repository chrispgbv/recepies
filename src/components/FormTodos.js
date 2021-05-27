import React, {useState, useEffect, useRef} from 'react'

function FormTodos(props) {
    const [input,setInput] = useState('');
    
    const handleChange = e => {
        setInput(e.target.value);
    };

    const inputRef = useRef (null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleSubmit = e => {
        e.preventDefault();
        
        props.onSubmit({
            id: Math.floor(Math.random()*1000),
            text: input
        });
        setInput(''); 
    };
    return (
        <form className='todo-form' onSubmit ={handleSubmit}> 
            <input type ='text' 
                placeholder='Add ingredients' 
                value={input}
                name='text' 
                className='todo-input'
                onChange ={handleChange}
                ref = {inputRef}
            /> 
            <button 
                className='todo-button'
            > Add </button>
        </form>
    )
}
export default FormTodos
