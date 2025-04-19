import React, { useState } from "react";
import Modal from './UI/Modal';
import styles from './Modal.module.css'

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const BookClassModal: React.FC<Props> = ({isOpen, onClose}) => {
    
    // Store form data 
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        type: ""
    })
    const [isLoading, setIsLoading] = useState(false);
    
    // const [response, setResponse] = useState<string | null>(null);
    // input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const formSubmission = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        const {name, email, type} = formData;
        try {
            const response = await fetch('http://localhost:3000/api/book-class', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name, email, type}),
            });
            const data = await response.json();
            console.log('Server response:', data);

            
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
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
                <input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" value={formData.email} onChange={handleInputChange} type="email" required />
            </div>

            <div>
                <label htmlFor="type">Class Type</label>
                <select id="type" name="type" value={formData.type} onChange={handleInputChange} required>
                    <option value="">Select</option>
                    <option value="bollywood">Bollywood</option>
                    <option value="persian">Persian</option>
                    <option value="kurdish">Kurdish</option>
                </select>
            </div>

            <div style={{ textAlign: "right" }}>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? <div className={styles["spinner"]}></div> : "Submit"}</button>
            </div>

            </form>
        </Modal>
    )
}

export default BookClassModal;