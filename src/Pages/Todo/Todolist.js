import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Todolist = ({ task, refetch, id }) => {
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    fetch('https://endgame-123.herokuapp.com/task')
      .then((response) => response.json())
      .then((json) => {
        if (task.modifiedCount > 0) {
          refetch()
          toast.success("Your Admin added")
        }
      });


  }, [])


  const handleDelete = () => {
    fetch(`https://endgame-123.herokuapp.com/task/${id}`, {
      method: 'DELETE',

    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          toast.success(`${task.task} Delete succesfully`)
          refetch()
        }
        else {
          toast.error("please try again ")
        }
      })

  }
  const handleEdit = () => {
    setEdit(!edit)
  }
  const handleUpdate = (e) => {
    e.preventDefault()
    const task = e.target.update.value;

    fetch(`https://endgame-123.herokuapp.com/task/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        task
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result.modifiedCount >= 1) {
          setEdit(!edit)
          refetch()
          toast("Your Editing Done")
        }
      });


  }
  const handleChange = (e) => {
    console.log(e.value);
    const cheack = e.target.checked;
    if (cheack) {

      task = task.task;
      const tasktext = { task }
      fetch('https://endgame-123.herokuapp.com/complete', {
        method: 'POST',
        body: JSON.stringify(tasktext),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',

        },
      })
        .then((response) => response.json())
        .then((data) => {
          fetch(`https://endgame-123.herokuapp.com/task/${id}`, {
            method: 'DELETE',

          })
            .then(res => res.json())
            .then(data => {
              if (data.deletedCount > 0) {
                toast.success(`Task is Complete`)
                refetch()
              }
              else {
                toast.error("please try again ")
              }
            })
        });



    }
  }

  return (
    <div>
      <div className='flex justify-center items-center bg-primary rounded p-5 text-white gap-2'>
        {
          edit ? <form action="" onSubmit={handleUpdate} >
            <input type="text" name='update' defaultValue={task.task} className="bg-primary border border-white p-4 mx-3 text-white" />
            <button type='submit' className="border  rounded border-white p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#570df8" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button onClick={handleEdit} className="border mx-2 rounded border-white p-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="#570df8" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>




          </form> : <>
            <input type="checkbox" class="checkbox checkbox-white border border-white" value={1} onChange={(e) => handleChange(e)} />

            <h1>{task.task}</h1>

            <div onClick={handleEdit} style={{ cursor: "pointer" }} className="border rounded border-white p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />  </svg>
            </div>
          </>
        }


        <div onClick={handleDelete} style={{ cursor: "pointer" }} className="border rounded border-white p-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Todolist;