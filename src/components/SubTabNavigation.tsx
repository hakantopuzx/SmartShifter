import React from 'react';

interface Tab {
  id: string;
  label: string;
}

interface SubTabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const SubTabNavigation: React.FC<SubTabNavigationProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="border-b border-gray-200">
      <nav className="flex px-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`py-4 mr-8 text-sm font-medium transition-colors border-b-2 ${
              activeTab === tab.id
                ? 'text-[#3F51B5] border-[#3F51B5]'
                : 'text-gray-500 border-transparent hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default SubTabNavigation;