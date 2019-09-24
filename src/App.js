import React from 'react'
import TodoList from './Todo/TodoList'

function App() {
  const [TodoListArr, setTodoListArr] = React.useState(
      [
        {id: 1, title:'позавтракать', doneFlg: false},
        {id: 2, title:'закончить занятие в МФТИ', doneFlg: false},
        {id: 3, title:'поесть', doneFlg: false}
      ]
    )

  function Toggle(id){
      setTodoListArr(TodoListArr.map(todo =>{
       if (todo.id === id){
         todo.doneFlg = !todo.doneFlg;
       }
       return todo
     })
     )
  }




  return (
    <div>
      <h1 className='header'>
      Я сделяль!
      </h1>
      <TodoList TodoListArr={TodoListArr} onToggle={Toggle} />
    </div>
  );
}

export default App;
