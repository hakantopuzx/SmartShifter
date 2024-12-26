import React, { useState } from 'react';
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import MaterialStatus from './components/MaterialStatus';
import GoNoGo from './components/GoNoGo';

const tabs = [
  { id: 'material-status', label: 'Material Status' },
  { id: 'commissioning-status', label: 'Commissioning Status' },
  { id: 'production-status', label: 'Production Status' },
  { id: 'related-notes', label: 'Related Notes' },
  { id: 'go-no-go', label: 'Go/No Go' },
  { id: 'escalation-level', label: 'Escalation Level' },
  { id: 'documents-mails', label: 'Documents & Mails' },
];

function App() {
  const [activeTab, setActiveTab] = useState('material-status');

  const handleClose = () => {
    console.log('Close button clicked');
  };

  return (
    <div className="min-h-screen">
      <Header onClose={handleClose} />
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <main>
        {activeTab === 'material-status' && <MaterialStatus />}
        {activeTab === 'go-no-go' && <GoNoGo />}
      </main>
    </div>
  );
}

export default App;