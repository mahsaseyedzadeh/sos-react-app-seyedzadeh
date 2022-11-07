import AddTodo from "../AddTodo";
import DisplayTodo from "../DisplayTodo";
import styles from "./TodoListCard.module.scss";

import {useContext, useEffect} from "react";

const TodoListCard = () => {
	return (
		<section className={styles.container}>
			<header className={styles.header}>
				<h1>Todo List</h1>
				<h2>Managing Your Works</h2>
			</header>
			<div className={styles.body}>
				<DisplayTodo />
				<AddTodo />
			</div>
		</section>
	);
};
export default TodoListCard;
