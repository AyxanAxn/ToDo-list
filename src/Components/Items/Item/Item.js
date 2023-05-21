import React, { memo, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from './Modal/Modal';
import './Item.css';

function Item(props) {
  const [isChecked, setIsChecked] = useState(props.task.isChecked)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedDescription, setEditedDescription] = useState(props.task.description);

  function checkboxClicked()
  {
    setIsChecked(prevValue => !prevValue);
    props.taskChecked(props.task.id, !isChecked);
  }

  function recycleClick()
  {
    props.removeTask(props.task.id);
    console.log("recycle" + props.task.id)
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function saveDescription() {
    props.updateDescription(props.task.id, editedDescription);
    setIsModalOpen(false);
  }


  return (
        <div className="card-body add-input-container ">
            <p className="card-text">{props.task.id + " " + props.task.description}</p>
          <button className='button'>
            <input className="form-check-input" checked={isChecked} onChange={checkboxClicked} type="checkbox" value ={"isChecked"} id="flexCheckDefault"/>
          </button>

          <button className="button" onClick={openModal}>
            <img src="./edit.png" alt="Edit" />
          </button>

          
          <button className='button' onClick={recycleClick}>
            <img src='./trash.png' /> 
          </button>

        {isModalOpen && 
        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          onSave={saveDescription}
          editedDescription={editedDescription}
          setEditedDescription={setEditedDescription}
        />}
        </div>
   );
}
export default Item;
