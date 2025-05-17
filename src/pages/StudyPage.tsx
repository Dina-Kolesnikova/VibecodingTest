import React, { useState, useEffect } from 'react';
import { Flashcard as FlashcardType, flashcards as allFlashcards } from '../data/flashcards';
import FlashcardComponent from '../components/Flashcard';
import styles from './StudyPage.module.css';

interface StudyPageProps {
  category: string;
  onNavigate: (page: string, params?: any) => void;
  onMarkWrong: (cardId: number) => void;
}

const StudyPage: React.FC<StudyPageProps> = ({ category, onNavigate, onMarkWrong }) => {
  const [studyCards, setStudyCards] = useState<FlashcardType[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentCardObject, setCurrentCardObject] = useState<FlashcardType | null>(null);

  useEffect(() => {
    const filteredCards = allFlashcards.filter(card => card.category === category);
    setStudyCards(filteredCards);
    setCurrentCardIndex(0);
  }, [category]);

  useEffect(() => {
    if (studyCards.length > 0) {
      setCurrentCardObject(studyCards[currentCardIndex]);
    } else {
      setCurrentCardObject(null);
    }
  }, [studyCards, currentCardIndex]);

  const handleNextCard = () => {
    if (studyCards.length > 0) {
      setCurrentCardIndex(prevIndex => (prevIndex + 1) % studyCards.length);
    }
  };

  const handlePreviousCard = () => {
    if (studyCards.length > 0) {
      setCurrentCardIndex(prevIndex => (prevIndex - 1 + studyCards.length) % studyCards.length);
    }
  };

  const handleMarkAnswer = (isCorrect: boolean) => {
    if (currentCardObject) {
      if (!isCorrect) {
        onMarkWrong(currentCardObject.id);
      } else {
        console.log(`Card ID ${currentCardObject.id} marked as Correct`);
      }
    }
    handleNextCard();
  };

  if (!currentCardObject) {
    return (
      <div className={styles.container}>
        <p>Loading cards or no cards in this category...</p>
        <button onClick={() => onNavigate('categoryStudy')} className={styles.navButton}>
          Back to Category Selection
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2>Studying: {category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <FlashcardComponent card={currentCardObject} onMarkAnswer={handleMarkAnswer} />
      <p className={styles.progressText}>
        Card {currentCardIndex + 1} of {studyCards.length}
      </p>
      <div className={styles.navigationButtons}>
        <button onClick={handlePreviousCard} className={styles.navButton} disabled={studyCards.length <= 1}>
          Previous
        </button>
        <button onClick={handleNextCard} className={styles.navButton} disabled={studyCards.length <= 1}>
          Next
        </button>
      </div>
      <button onClick={() => onNavigate('categoryStudy')} className={styles.navButtonLargeMargin}>
        Back to Category Selection
      </button>
    </div>
  );
};

export default StudyPage; 