import React from 'react';
import TodoItem from './TodoItem';

const styles = {
	ul: {
		listStyle: 'none',
		backgroundColor: 'darkblue',
		padding: '10px'

	}
}

export default function TodoList(props){
	const todoListArr = props.TodoListArr;
	return (
		<ul style={styles.ul}>
			{todoListArr.map(function(todo, index){
				return <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle} />
			})}
		</ul>
	)
}