import TodoItem from "./TodoItem";
import styles from './todoList.module.css'

export default function TodoList({todos, setTodos}:any){
    const sortedTodos = todos.slice().sort((a:any, b:any) => Number(a.done) - Number(b.done))

    return <div className={styles.list}>
        {sortedTodos.map((item:any) => <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos} />)}
    </div>
}