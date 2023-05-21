import React from 'react';
function Modal({ isOpen, closeModal, onSave, editedDescription, setEditedDescription }) {
    return (
    <div>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Edit Description</h5>
                    <button type="button" className="btn-close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                    <input
                    type="text"
                    className="form-control"
                    value={editedDescription}
                    onChange={e => setEditedDescription(e.target.value)}
                    />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={onSave}>Save</button>
                </div>
            </div>
        </div>
    </div>);
}

export default Modal;