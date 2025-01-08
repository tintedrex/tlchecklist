// import React, {useState} from 'react';
// import './App.css';

// function App() {

//   const [cl, setcl] = useState([]);
//   const [clInput, setclInput] = useState('');

//   const clChange = (e) => {
//     setclInput(e.target.value);
//   }

//   const clSubmit = (e) => {
//     e.preventDefault();
//     setcl([...cl, clInput]);
//     setclInput('');
//   }

//   const clRemove = (index) => {
//     const newcl = [...cl];
//     newcl.splice(index, 1);
//     setcl(newcl);
//   }

//     return (
//       <div className='left'>
//         <h1>Tasks: {cl.length}</h1>
//         <input type="text" value={clInput} onChange={clChange} />
//         <button onClick={clSubmit}> + Add Task </button>
//         <button onClick={() => setcl([])}> - Clear All Tasks </button>
//         <ul>
//         {cl.map((item, index) => (
//           <li key={index}>
//           <button onClick={() => clRemove(index)}> ✓ </button>
//           {item}
//           </li>
//         ))}
//         </ul>
//       </div>
//     );
//   }

//   export default App;  


// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [cl, setcl] = useState([]);
//   const [clInput, setclInput] = useState('');

//   const clChange = (e) => {
//     setclInput(e.target.value);
//   }

//   const clSubmit = (e) => {
//     e.preventDefault();
//     setcl([...cl, { text: clInput, completed: false }]);
//     setclInput('');
//   }

//   const togglecomplete = (index) => {
//     const newcl = [...cl];
//     newcl[index].completed = !newcl[index].completed;
//     setcl(newcl);
//   }

//   return (
//     <div className='cl' id = 'cl'>
//       <h1>Tasks: {cl.length}</h1>
//       <input type="text" value={clInput} onChange={clChange} />
//       <button onClick={clSubmit}> + Add Task </button>
//       <button onClick={() => setcl([])}> - Clear All Tasks </button>
//       <ul>
//         {cl.map((task, index) => (
          
//           <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
//           <input type="checkbox" checked={task.completed} onChange={() => togglecomplete(index)} />
//             {task.text}
            
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';

function App() {
  const [cl, setcl] = useState([]);
  const [clInput, setclInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editInput, setEditInput] = useState('');

  const clChange = (e) => {
    setclInput(e.target.value);
  }

  const clSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const newcl = [...cl];
      newcl[editIndex].text = editInput;
      setcl(newcl);
      setEditIndex(null);
      setEditInput('');
    } else {
      setcl([...cl, { text: clInput, completed: false }]);
      setclInput('');
    }
  }

  const togglecomplete = (index) => {
    const newcl = [...cl];
    newcl[index].completed = !newcl[index].completed;
    setcl(newcl);
  }

  const EditClick = (index) => {
    setEditIndex(index);
    setEditInput(cl[index].text);
  }

  const KeyPress = (e) => {
    if (e.key === 'Enter') {
      clSubmit(e);
    }
  }

  const KeyPress2 = (e) => {
    if (e.key === 'Backspace') {
      setcl([]);
    }
  }

  return (
    <div className='cl' id='cl'>
      <h1>Tasks: {cl.length}</h1>
      <div className="input-group">
        <input
          type="text"
          value={editIndex !== null ? editInput : clInput}
          onChange={(e) => editIndex !== null ? setEditInput(e.target.value) : clChange(e)}
          onKeyPress={KeyPress}
          onKeyUp={KeyPress2}
        />
        <button onClick={clSubmit}>
          {editIndex !== null ? 'Save Task' : '+ Add Task'}
        </button>
        <button onClick={() => setcl([])}> - Clear All Tasks </button>
      </div>
      <ul>
        {cl.map((task, index) => (
          <li
            key={index}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => togglecomplete(index)}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => togglecomplete(index)}
              onClick={(e) => e.stopPropagation()}
            />
            {task.text}
            <button onClick={() => EditClick(index)}>Edit</button>
          </li>
          
        ))}
      </ul>
    </div>
  );
}

export default App;













  // return (
  //   <div className="App">
  //     <h1>Tasks: {tasks}</h1>
  //     <button onClick={delTask}> ✓ </button>
  //     <input type="text" value={input} onChange={Change} />
  //     <button onClick={addTask}> + </button>
      
      
  //     <button onClick={cl}> Show cl </button>
  //     {cl()}
  //   </div>
  // );

  
  // const [cl, setcl] = useState([]);
  // const [clInput, setclInput] = useState('');


  // const clChange = (e) => {
  //   setclInput(e.target.value);
  // }
  // const clSubmit = (e) => {
  //   e.preventDefault();
  //   setcl([...cl, clInput]);
  //   setclInput('');
  // }
  // cl = () => {
  //   return (
  //     <div>
  //       <input type="text" value={clInput} onChange={clChange} />
  //       <button onClick={clSubmit}> + </button>
  //       <ul>
  //         {cl.map((item, index) => (
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
    //   <input type="text" value={input} onChange={Change} />
    //   <button onClick={addTask}> + </button>
      
    //   <button onClick={Submit}> Add Task </button>
    //   <button onClick={Delete}> Delete Task </button>
    //   <button onClick={Edit}> Edit Task </button>
    //   <button onClick={Complete}> Complete Task </button>
    //   <button onClick={cl}> Show cl </button>
    //   {cl()}
    // </div>
// );


  // input = () => {
  //   return (
  //     <div>
  //       <input type="text" value={input} onChange={Change} />
  //       <button onClick={Submit}> Add Task </button>
  //       <button onClick={Delete}> Delete Task </button>
  //       <button onClick={Edit}> Edit Task </button>
  //       <button onClick={Complete}> Complete Task </button>
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
    //       placehulder="Add a new task"
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
