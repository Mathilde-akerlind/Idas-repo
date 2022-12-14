import React, { useState, useRef} from 'react' ;
import Todo from './Todo';
export default function TodoList() {
  const [todos, setTodos] = useState([
    {
    id: 1,
    title: "Home Alone",
    },
    
    {
    id:2,
    title: "Elf"},
    
    {
    id:3,
    title: "Ice sculpture christmas"},

    ]);

  
      

 const inputRef = useRef();
 
 function addItem(event) {
    if (event.keyCode === 13) {
        const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 :1;   
    
    setTodos([...todos, {
    id: newId,
    title: inputRef.current.value

    }]);

    inputRef.current.value = "";

    }


 }

function deleteItem(id) {
    setTodos(todos.filter((item) => item.id !== id));
}

return (
 <div>

  <input className="form-control" placeholder="Type movie here:" ref={inputRef} onKeyUp={addItem}></input>
    <ul className="listItems">
      {todos.map(todo => <Todo key={todo.id} item={todo} deleteItem={deleteItem} />) }

    </ul>
  
  
  </div>
)



}
