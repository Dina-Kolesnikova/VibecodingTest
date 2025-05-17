import React, { useState } from 'react';
// import HomePage from './pages/HomePage';
import CategorySelectionPage from './pages/CategorySelectionPage';
import StatsPage from './pages/StatsPage';
import StudyPage from './pages/StudyPage'; // Import StudyPage
import Flashcard from './components/Flashcard';
import { flashcards, Flashcard as FlashcardType } from './data/flashcards'; // Import FlashcardType
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // home, category, flashcard
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [wronglyAnsweredCardIds, setWronglyAnsweredCardIds] = useState<number[]>([]);

  // Simple navigation logic for now
  const navigate = (page: string, params?: { category?: string }) => {
    if (params?.category) {
      setSelectedCategory(params.category);
    } else if (page === 'home' || page === 'categoryStudy' || page === 'categoryQuiz') {
      // Reset category if navigating back to home or category selection
      setSelectedCategory(null);
    }
    setCurrentPage(page);
  };

  const handleMarkCardAsWrong = (cardId: number) => {
    setWronglyAnsweredCardIds(prevIds => {
      if (!prevIds.includes(cardId)) {
        console.log('Marking card as wrong:', cardId, '; All wrong cards:', [...prevIds, cardId]);
        return [...prevIds, cardId];
      }
      console.log('Card already marked as wrong:', cardId, '; All wrong cards:', prevIds);
      return prevIds;
    });
  };

  let content;
  if (currentPage === 'home') {
    // Modify HomePage to use navigate
    content = (
      <div>
        <h1>Welcome to Spanish Flashcards!</h1>
        <div>
          <button onClick={() => navigate('categoryStudy')}>Study Mode</button>
          <button onClick={() => navigate('categoryQuiz')}>Quiz Mode</button>
          <button onClick={() => navigate('stats')}>Stats Page</button>
          <hr />
          <button onClick={() => navigate('flashcardDemo')}>Show Flashcard Demo</button>
          <hr />
          <p>Wrongly Answered IDs: {JSON.stringify(wronglyAnsweredCardIds)}</p> {/* For debugging */}
        </div>
      </div>
    );
  } else if (currentPage === 'categoryStudy') {
    content = <CategorySelectionPage mode="study" onNavigate={navigate} />;
  } else if (currentPage === 'categoryQuiz') {
    content = <CategorySelectionPage mode="quiz" onNavigate={navigate} />;
  } else if (currentPage === 'stats') {
    content = <StatsPage onNavigate={navigate} />;
  } else if (currentPage === 'studyPage') {
    if (selectedCategory) {
      content = <StudyPage 
                    category={selectedCategory} 
                    onNavigate={navigate} 
                    onMarkWrong={handleMarkCardAsWrong} 
                />;
    } else {
      // Fallback if category not selected, though UI flow should prevent this
      content = <div>Error: No category selected. <button onClick={() => navigate('home')}>Go Home</button></div>;
    }
  } else if (currentPage === 'flashcardDemo') {
    // Display a sample flashcard
    const demoCard = flashcards[0];
    content = (
      <div>
        <h2>Flashcard Demo</h2>
        <Flashcard card={demoCard} />
        <button 
          style={{ 
            backgroundColor: '#6c757d', 
            color: 'white', 
            padding: '10px 20px', 
            border: 'none', 
            borderRadius: '5px', 
            marginTop: '20px', 
            cursor: 'pointer' 
          }}
          onClick={() => navigate('home')}            
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <>
      {content}
    </>
  );
}

export default App; 