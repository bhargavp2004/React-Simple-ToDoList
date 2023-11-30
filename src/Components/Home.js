import React from 'react'
import {useState} from 'react';

function Home() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleInput = (e) => {
        console.log(e.target.value);
        setTask(e.target.value);
    }

    const addTask = () => {
        setTasks((prevTasks) => [...prevTasks, task]);
    }

    const deleteTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
      };
  return (
    <div className='flex flex-col min-h-screen w-full bg-gray-300 items-center gap-16  font-somefonts'>
      <div className='font-bold text-4xl bg-black text-white flex w-full justify-center items-center'> 
        Tasks To Do
      </div>

      <div className='flex flex-col bg-gray-500 border-2 rounded border-black bg-opacity-40 p-4 justify-center items-center'>
        <div className='flex'>
        <p className='text-lg text-black font-bold'> Add Task </p>
        <input id="task" htmlFor="task" type='text' className='ml-4 focus:cursor-text focus:border-blue-950 rounded placeholder:justify-center placeholder:text-black' placeholder='Enter Task To Add' onChange={handleInput}></input>
        </div>
        <button className='p-2 mt-4 bg-black text-white rounded border-2 border-black' onClick={addTask}>Add</button>
      </div>

    <div className="grid grid-cols-1 w-full p-2 gap-2 text-gray-200 text-sm">
        
        {tasks.map((task, index) => (
            <div key={index} className='flex p-3 justify-between rounded border-2 border-black bg-gray-500 bg-opacity-40 text-black'>
                <div>{task}</div>
                
                <button className='p-2 bg-black rounded border-2 text-white border-black' onClick={() => {deleteTask(index)}}>Delete</button>
                
            </div>
        )
        )
}
    </div>
      


    </div>
  )
}

export default Home
