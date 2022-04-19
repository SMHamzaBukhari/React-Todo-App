import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoList from './todoList';

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const itemEvent = (e) =>{
    setInputList(e.target.value);
  }
  const addItems = () =>{
    inputList == "" || inputList ==" "?  alert("Input should not be empty."):
    setItems((oldItems)=>{
      return[...oldItems,inputList];
  });
    setInputList('');
  }
  const deleteitem = (id) =>{
    console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrayElem,index)=>{
          return index !== id;
      });
    });
  }
  const removeItems = () =>{
    setItems([]);
  }
  const edititem = (id) =>{
    deleteitem(id);
    addItems(id);
  }
  

 

  return (
   <>
   <div className='main'>
     <div className='container'>
       <h1>ToDo List</h1>
       <div className='inp'>
      <input type='text' placeholder='Add to list...' onChange={itemEvent} value={inputList} />
      <button id='addbtn' className='btn' onClick={addItems} >+</button>
      <button id='delbtn' className='btn' onClick={removeItems} >x</button>
      </div>
      <div className='list'>
        <ol>
          {items.map((itemval,index)=>{
            return <TodoList key={index} id={index} list={itemval} toedit={edititem} todel = {deleteitem} />;
          })}
        </ol>
      </div>
     </div>
   </div>
   </>
  );
}

export default App;
