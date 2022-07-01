import React from 'react';
import { toast } from 'react-toastify';

const ComDone = ({ com, refetch }) => {
  const id = com._id;
  const handleDelete = () => {

    fetch(`https://endgame-123.herokuapp.com/complete/${id}`, {
      method: 'DELETE',

    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          toast.success(`${data.task} Delete succesfully`)
          refetch()
        }
        else {
          toast.error("please try again ")
        }
      })

  }
  return (
    <div>
      <h1>{com.task}</h1>

      <div onClick={handleDelete} style={{ cursor: "pointer" }} className="border rounded border-white p-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </div>
    </div>
  );
};

export default ComDone;