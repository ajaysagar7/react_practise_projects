import React from 'react'
import { useNavigate } from 'react-router-dom';
const App = () => {
  const navigate = useNavigate();

  let projectsList = [
    {
      titile: 'Todo List App',
      descrtiption: "Todo App",
      path: "/project1"
    },
  ];

  const handleNavigationFunction = (e) => {
    navigate(projectsList[0].path);
  };
  return (
    <>
    <div className="div w-full mx-auto">
    <h1 className='text-4xl  font-bold text-cyan-700 underline underline-offset-2 text-center my-3'>React Practise Projects</h1>
    {/* PROJECT LIST STARTS HERE */}
    {
      projectsList.map((projectItem,index)=> (
        <li className='list-none' index={index}>
          <div  onClick={handleNavigationFunction} className="projectItem  cursor-pointer mx-auto p-4 bg-orange-400 rounded text-white w-fit">
            <h2> <span>{index+1 + ". "}</span>{projectItem.titile}</h2>
          </div>
        </li>
      ))
    }
    {/* PROJECT LIST ENDS HERE */}

    </div>
    </>
  )

}

export default App