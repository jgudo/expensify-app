import React from 'react';
import Modal from 'react-modal';

const ExpenseModal = (props) => {
    return (
        <Modal
            isOpen={props.modalIsOpen}
            onRequestClose={props.closeModal}
            closeTimeoutMS={200}
            className="modal"
            contentLabel="Remove Expense Modal"
        >
            <div>
                <h2 className="modal__title">Remove this expense?</h2>
                <button onClick={props.onRemove} className="modal__button">Yes</button>
                <button onClick={props.closeModal} className="modal__button">No</button>
            </div>
            
        </Modal>
    );
}
export default ExpenseModal;