import styles from './todoItem.module.css'

export default function TodoItem({ item, todos, setTodos }: any) {

    function handleDelete(item : any) {
        console.log("deleted item", item);
        setTodos(todos.filter((todo: any) => todo !== item));
    }

    function handleClick(name: any) {
        const newArray = todos.map((todo: any) => todo.name === name? {...todo, done: !todo.done} : todo);
        setTodos(newArray);
    }

    const dash = item.done ? styles.completed : "";

    return <div className={styles.item}>
        <div className={styles.itemName}>
            <span className={dash} onClick={() => handleClick(item.name)}>{item.name}</span>
            <span>
                <button onClick={() => handleDelete(item)} className={styles.deleteButton}>x</button>
            </span>
        </div>
        <hr className={styles.line} />
    </div>
}