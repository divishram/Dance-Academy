import React from "react";
import Modal from './UI/Modal';
import styles from './Modal.module.css'

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const BookClassModal: React.FC<Props> = ({isOpen, onClose}) => {
    const formSubmission = (e: React.FormEvent) => {
        e.preventDefault();
        // Todo api call to send data to back-end
        onClose(); // close form
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className={styles["flex-container"]}>
                <button onClick={onClose}>X</button>
            </div>
            <h2>Book a Dance Class</h2>
            <form onSubmit={formSubmission}>

            <div>
                <label htmlFor="name">Name</label>
                <input id="name" required />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" required />
            </div>

            <div>
                <label htmlFor="type">Class Type</label>
                <select id="type" required>
                    <option value="">Select</option>
                    <option value="bollywood">Bollywood</option>
                    <option value="persian">Persian</option>
                    <option value="kurdish">Kurdish</option>
                </select>
            </div>

            <div style={{ textAlign: "right" }}>
                <button type="submit">Submit</button>
            </div>

            </form>
        </Modal>
    )
}

export default BookClassModal;