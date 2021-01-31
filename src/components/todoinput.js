import React,{useState,useEffect,useRef} from 'react'

const ToDoInput=(props)=> {
    const [input, setInput] = useState(props.edit?props.edit.value:'');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };
    
    return (
        <form onSubmit={handleSubmit} className="todo-form">
            {props.edit ? (
                <>
                <input
                placeholder="update your task"
                type="text"
                value={input}
                name="text"
                className="todo-input edit"
                onChange={handleChange}
                ref={inputRef}
            />
                    <button className="todo-button edit">Update Task</button>
                </>
            ) :
                (
                    <>
                    <input
                    placeholder="enter your task here"
                    type="text"
                    value={input}
                    name="text"
                    className="todo-input"
                    onChange={handleChange}
                    ref={inputRef}
                    />
                    <button className="todo-button">Add Task</button>
                    </>)
            }
        </form>
    )
}

export default ToDoInput
