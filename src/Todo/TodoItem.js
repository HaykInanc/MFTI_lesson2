import React from 'react';

const styles = {
	li: {
		display: 'flex',
		justifyContent: 'space-between',
		listStyle: 'none',
		backgroundColor: 'darkgreen',
		alignItems: 'center',
		padding: '10px',
		margin: '10px'
	},
	close: {
		backgroundColor: 'red',
		borderRadius: '5px',
		padding: '5px',
		border: '0',
		cursor: 'pointer'
	}
}

export default function TodoItem(props){
	const elem = props.todo;
	let classes = []
	if (elem.doneFlg){
		classes.push('done');
	}
	return (
		<li className ={classes.join(' ')} style={styles.li}>
			<input type='checkbox' onChange={()=>{props.onChange(elem.id)}} />
			<span>
			<strong>{props.index+1}</strong>
				{elem.title}
			</span>
			<button style={styles.close}>X</button>
		</li>
	)
}