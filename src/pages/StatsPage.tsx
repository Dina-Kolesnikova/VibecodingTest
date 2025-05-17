import React from 'react';
// import styles from './StatsPage.module.css'; // Future CSS module

interface StatsPageProps {
  onNavigate: (page: string) => void; // For the back button
}

const StatsPage: React.FC<StatsPageProps> = ({ onNavigate }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Stats will be displayed here in a future phase.</p>
      {/* Basic styling for the button for now */}
      <button 
        style={{ backgroundColor: '#6c757d', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', marginTop: '20px', cursor: 'pointer'}}
        onClick={() => onNavigate('home')}
      >
        Back to Home
      </button>
    </div>
  );
};

export default StatsPage; 