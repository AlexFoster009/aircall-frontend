import React, { useState } from 'react';
import ActivityFeed from './components/ActivityFeed.js';
import ArchivedCalls from './components/ArchivedCalls.js';
import Header from './Header.jsx';

const App = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <div className='container'>
      <Header currentTab={currentTab} handleTabChange={handleTabChange} />
      <div className="container-view">
        {currentTab === 0 && <ActivityFeed />}
        {currentTab === 1 && <ArchivedCalls />}
      </div>
    </div>
  );
};

export default App;