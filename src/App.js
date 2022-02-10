import './App.css';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([]);
  let [inputValue, setInputValue] = useState("");
  const addtodo = () => {
    todo.push(inputValue);
    setTodo([...todo]);
    setInputValue("")
  };
  const removeTodo = (index) => {
    let newTodo = [...todo]
    newTodo.splice(index,1)
    setTodo(newTodo)
  }
  const deleteTodo = () => {
    setTodo([]);
  }
  return (
    <div>
      <h1 className="text-center mt-5">TODO LIST</h1>
      <div className="w-50 mx-auto">
        <input type="text" placeholder="ENTER TODO..." value={inputValue} className="my-5 form-control input-group" onChange={(e) => setInputValue(e.target.value)} />
        <button className="btn btn-info mx-2" onClick={addtodo}>ADD TODO</button>
        <button className="btn btn-danger" onClick={deleteTodo}>DELETE TODO</button>
      </div>
      <section className="container my-5">
        {todo.map((value, index) => {
          return <li key={index}> {value} 
            <button onClick={()=>removeTodo(index)} className="btn btn-danger mx-4">Remove</button>
          </li>;
        })}
      </section>
    </div>
  );
}

export default App;
