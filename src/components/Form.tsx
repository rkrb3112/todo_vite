import { useState } from "react";
import styles from './form.module.css';

export default function Form({todos, setTodos}: any) {
    const [todo, setTodo] = useState<any>({name: "", done: false});

    function handleSubmit(e: any){
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({name: "", done: false});
    }

    return <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
            <input className={styles.modernInput} onChange={(e) => setTodo({name: e.target.value})} type="text" value={todo.name} placeholder="Enter todo item..." />
            <button className={styles.modernButton} type="submit">Add</button>
        </div>
    </form>
}