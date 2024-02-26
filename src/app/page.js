'use client'

import { useState } from "react";
import styles from "./page.module.css";
import PromptForm from "./components/PromptForm";

export default function Home() {

  const [choices, setChoices] = useState([]);

  const handleFormSubmit = async (prompt) => {
    try {
      const response = await fetch('api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
        }),
      });
      const result = await response.json();
      console.log(result);
      setChoices(result.choices);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Musluman ChatGPT</h1>
      <PromptForm onSubmit={handleFormSubmit} />
      <div className={styles.choices}>
        {choices.map(choice => (
          <p key={choice.index} className={styles.choice}>{choice.message.content}</p>
        ))}
      </div>
    </main>
  );
}
