import React, { useState } from 'react';
import { Flashcard as FlashcardType } from '../data/flashcards'; // Assuming Flashcard type is exported
import styles from './Flashcard.module.css';

interface FlashcardProps {
  card: FlashcardType;
  onCardFlipped?: (isFront: boolean) => void; // Optional: Callback when card is flipped
  onMarkAnswer?: (isCorrect: boolean) => void; // New prop for marking answer
}

const Flashcard: React.FC<FlashcardProps> = ({ card, onCardFlipped, onMarkAnswer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    // If the card is already flipped (showing back) AND answer buttons are meant to be used,
    // then clicking the card area should NOT flip it back to the front.
    // The user should use the answer buttons.
    if (isFlipped && onMarkAnswer) {
      return; 
    }

    // Otherwise, proceed with flipping
    const newFlippedState = !isFlipped;
    setIsFlipped(newFlippedState);
    if (onCardFlipped) {
      onCardFlipped(!newFlippedState);
    }
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (onMarkAnswer) {
      onMarkAnswer(isCorrect);
      setIsFlipped(false); // Flip back to front for the next card
    }
  };

  return (
    <div
      className={`${styles.flashcard} ${isFlipped ? styles.flipped : ''}`}
      onClick={handleFlip}
    >
      <div className={styles.flashcardInner}>
        <div className={styles.flashcardFront}>
          <p>{card.spanish}</p>
        </div>
        <div className={styles.flashcardBack}>
          <p>{card.english}</p>
          {isFlipped && onMarkAnswer && (
            // Stop propagation on the button container so clicks on buttons don't also trigger card's onClick
            <div className={styles.answerButtonsContainer} onClick={(e) => e.stopPropagation()}> 
              <button 
                className={`${styles.answerButton} ${styles.correctButton}`}
                onClick={() => handleAnswer(true)}
              >
                I got it right
              </button>
              <button 
                className={`${styles.answerButton} ${styles.wrongButton}`}
                onClick={() => handleAnswer(false)}
              >
                I got it wrong
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Flashcard; 