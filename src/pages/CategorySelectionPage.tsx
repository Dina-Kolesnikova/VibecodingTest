import React from 'react';
import { categories } from '../data/flashcards'; // Assuming categories are exported from your data file
import styles from './CategorySelectionPage.module.css';

interface CategorySelectionPageProps {
  mode: 'study' | 'quiz'; // To know if we are selecting for study or quiz
  onNavigate: (page: string, params?: { category?: string }) => void; // Update signature for params
}

const CategorySelectionPage: React.FC<CategorySelectionPageProps> = ({ mode, onNavigate }) => {
  const handleCategorySelect = (category: string) => {
    if (mode === 'study') {
      onNavigate('studyPage', { category });
    } else {
      alert(`Quiz mode for ${category} not implemented yet.`);
      // onNavigate('quizPage', { category }); // Future quiz page navigation
    }
  };

  return (
    <div className={styles.container}>
      <h2>Select a Category for {mode === 'study' ? 'Study' : 'Quiz'} Mode</h2>
      <div className={styles.categoryList}>
        {categories.map((category) => (
          <button
            key={category}
            className={styles.categoryButton}
            onClick={() => handleCategorySelect(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)} {/* Capitalize first letter */}
          </button>
        ))}
      </div>
      <button className={styles.backButton} onClick={() => onNavigate('home')}> {/* Use onNavigate here */}
        Back to Home
      </button>
    </div>
  );
};

export default CategorySelectionPage; 