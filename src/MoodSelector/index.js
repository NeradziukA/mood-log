import React, { useState } from "react";
import axios from "axios";
import styles from "./moodSelector.module.css";

const MoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState("");

  const handleMoodSelection = async (mood) => {
    setSelectedMood(mood);

    try {
      const response = await axios.post(
        "https://your-azure-function-url",
        { mood },
        { withCredentials: true } // Include this line if you need to send authentication cookies along with the request
      );

      console.log(response.data); // Optional: Handle success response
    } catch (error) {
      console.error(error); // Optional: Handle error response
    }
  };

  return (
    <div className={styles.container}>
      <h1>Select your mood:</h1>
      <div className={styles.buttonContainer}>
        <button
          className={`${styles.button} ${styles.angry}`}
          onClick={() => handleMoodSelection("Angry")}
        >
          Angry
        </button>
        <button
          className={`${styles.button} ${styles.sad}`}
          onClick={() => handleMoodSelection("Sad")}
        >
          Sad
        </button>
        <button
          className={`${styles.button} ${styles.calm}`}
          onClick={() => handleMoodSelection("Calm")}
        >
          Calm
        </button>
        <button
          className={`${styles.button} ${styles.happy}`}
          onClick={() => handleMoodSelection("Happy")}
        >
          Happy
        </button>
        <button
          className={`${styles.button} ${styles.excited}`}
          onClick={() => handleMoodSelection("Excited")}
        >
          Excited
        </button>
      </div>
      {selectedMood && <p>Your current mood: {selectedMood}</p>}
    </div>
  );
};

export default MoodSelector;
