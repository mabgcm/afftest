'use client'
import { useState } from 'react';
import styles from './PromptForm.module.css'; // Import your CSS file for styling

const PromptForm = ({ onSubmit }) => {
    const [prompt, setPrompt] = useState("");

    return (
        <div className={styles.promptFormContainer}>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (prompt === "") {
                    return;
                }

                onSubmit(prompt);
                setPrompt("");
            }}>
                <label className={styles.promptLabel}>Question</label>
                <input
                    type="text"
                    value={prompt}
                    onChange={e => setPrompt(e.target.value)}
                    className={styles.promptInput}
                />
                <input type="submit" value="Submit" className={styles.submitButton} />
            </form>
        </div>
    );
}

export default PromptForm;
