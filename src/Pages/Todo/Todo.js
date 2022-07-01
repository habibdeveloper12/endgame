import React, { useState } from 'react';
import Todolist from './Todolist';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import { toast } from 'react-toastify';
const Todo = () => {

  const [input, setInput] = useState('')
  const { data, isLoading, refetch } = useQuery("tools", () => fetch("https://endgame-123.herokuapp.com/task").then(res => res.json()));

  if (isLoading) {
    return <Loading></Loading>

  }
  const handlesubmit = (e) => {
    e.preventDefault();
    const task = e.target.task.value;
    const tasktext = { task }
    fetch('https://endgame-123.herokuapp.com/task', {
      method: 'POST',
      body: JSON.stringify(tasktext),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',

      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result.acknowledged) {
          refetch()
          toast.success("Your Task added")
        }
      });

  }





  return (
    <div className='container mx-auto'>
      <h1> Add Your Task</h1>
      <form action="" onSubmit={handlesubmit} class=" w-full max-w-xl mx-auto">
        <div class="form-control ">
          <div class="input-group mx-auto justify-center mt-6">

            <input type="text" name='task' required onChange={e => setInput(e.target.value)} placeholder="Add Task Here" class="input input-bordered input-primary w-full max-w-xl" />
            <button type='submit' class="btn btn-square bg-primary flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="black" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>

          </div>

        </div>
      </form>
      <div className='grid grid-cols-2 gap-4 mt-10'>
        {
          data.map(task => <Todolist
            task={task}
            id={task._id}
            refetch={refetch}
          ></Todolist>)
        }
      </div>
    </div>
  );
};

export default Todo;