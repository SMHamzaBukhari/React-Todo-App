import React from "react";
import './App.css';
import App from "./App";

const TodoList = (props) =>{ 
 
    return <>
    <div className="todoStyle">
    <li>{props.list}</li>
    <i class="fa-solid fa-check btn"></i>
    <i class="fa-solid fa-xmark btn" onClick={() =>{
        props.todel(props.id);
    }}></i>
    <i class="fa-solid fa-pencil btn" onClick={() =>{
        props.toedit(props.id);
    }}></i>
    
    </div>
    </>
};
export default TodoList;