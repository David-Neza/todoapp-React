import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
    
    const [value, setValue] = useState("")

    const handleSubmit =e=>{
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue("")
    }
    return (  
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                 value={value}
                 onChange={e => setValue(e.target.value)}
                  />
            </form>
        </div>
    );
}
 
export default TodoForm;