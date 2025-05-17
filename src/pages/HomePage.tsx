import React from 'react';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Spanish Flashcards!</h1>
      <div className={styles.buttonContainer}>
        <button onClick={() => alert('Navigate to Study Mode - Category Selection')}>Study Mode</button>
        <button onClick={() => alert('Navigate to Quiz Mode - Category Selection')}>Quiz Mode</button>
        <button onClick={() => alert('Navigate to Stats Page')}>Stats Page</button>
      </div>
    </div>
  );
};

export default HomePage; 