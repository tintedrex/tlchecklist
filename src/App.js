import React, {useState} from 'react';
import './App.css';

function App() {

  // const [tasks, setTask] = useState(0);
  // const [input, setInput] = useState('');



  // const addTask = () => {
  //   setTask(tasks + 1);
  // }

  // const handleChange = (e) => {
  //   setInput(e.target.value);
  // }

  // const delTask = () => {
  //   setTask(tasks - 1);
  // }

  const [checkList, setChecklist] = useState([]);
  const [checklistInput, setChecklistInput] = useState('');

  const handleChecklistChange = (e) => {
    setChecklistInput(e.target.value);
  }

  const handleChecklistSubmit = (e) => {
    e.preventDefault();
    setChecklist([...checkList, checklistInput]);
    setChecklistInput('');
  }

  const handleChecklistRemove = (index) => {
    const newChecklist = [...checkList];
    newChecklist.splice(index, 1);
    setChecklist(newChecklist);
  }

    return (
      <div className='left'>
        <h1>Tasks: {checkList.length}</h1>
        <input type="text" value={checklistInput} onChange={handleChecklistChange} />
        <button onClick={handleChecklistSubmit}> + Add Task </button>
        <button onClick={() => setChecklist([])}> - Clear All Tasks </button>
        <ol>
        {checkList.map((item, index) => (
          <li key={index}>
          <button onClick={() => handleChecklistRemove(index)}> ✓ </button>
          {item}
          </li>
        ))}
        </ol>
      </div>
    );
  }

  export default App;  


  // return (
  //   <div className="App">
  //     <h1>Tasks: {tasks}</h1>
  //     <button onClick={delTask}> ✓ </button>
  //     <input type="text" value={input} onChange={handleChange} />
  //     <button onClick={addTask}> + </button>
      
      
  //     <button onClick={handleChecklist}> Show Checklist </button>
  //     {checkList()}
  //   </div>
  // );

  
  // const [checklist, setChecklist] = useState([]);
  // const [checklistInput, setChecklistInput] = useState('');


  // const handleChecklistChange = (e) => {
  //   setChecklistInput(e.target.value);
  // }
  // const handleChecklistSubmit = (e) => {
  //   e.preventDefault();
  //   setChecklist([...checklist, checklistInput]);
  //   setChecklistInput('');
  // }
  // checklist = () => {
  //   return (
  //     <div>
  //       <input type="text" value={checklistInput} onChange={handleChecklistChange} />
  //       <button onClick={handleChecklistSubmit}> + </button>
  //       <ul>
  //         {checklist.map((item, index) => (
  //           <li key={index}>{item}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }


  // return (
    // <div className="App">
    //   <h1>Tasks: {tasks}</h1>
    //   <button onClick={delTask}> ✓ </button>
    //   <input type="text" value={input} onChange={handleChange} />
    //   <button onClick={addTask}> + </button>
      
    //   <button onClick={handleSubmit}> Add Task </button>
    //   <button onClick={handleDelete}> Delete Task </button>
    //   <button onClick={handleEdit}> Edit Task </button>
    //   <button onClick={handleComplete}> Complete Task </button>
    //   <button onClick={handleChecklist}> Show Checklist </button>
    //   {checklist()}
    // </div>
// );


  // input = () => {
  //   return (
  //     <div>
  //       <input type="text" value={input} onChange={handleChange} />
  //       <button onClick={handleSubmit}> Add Task </button>
  //       <button onClick={handleDelete}> Delete Task </button>
  //       <button onClick={handleEdit}> Edit Task </button>
  //       <button onClick={handleComplete}> Complete Task </button>
  //     </div>
  //   );
  // }


    // <div className="App">
    // <header className="header">
    //     <h1>To-Do List</h1>
    //   </header>
    //   <div className="input-container">
    //     <input 
    //       type="text" 
    //       value={input}
    //       onChange={(e) => setInput(e.target.value)}
    //       placeholder="Add a new task"
    //     />
    //     <button onClick={addTask}>Add</button>
    //   </div>


    //   <div className="tasks-container">
    //     <h2>Tasks</h2>
    //     <ul>
    //       {Array.from({ length: tasks }).map((_, index) => (
    //         <li key={index}>
    //           <input type="checkbox" />
    //           <span>{input}</span>
    //           <button onClick={delTask}>Delete</button>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
    //     }
