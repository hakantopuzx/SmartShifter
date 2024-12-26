import React from 'react';
import { X } from 'lucide-react';

interface HeaderProps {
  onClose: () => void;
}

const Header: React.FC<HeaderProps> = ({ onClose }) => {
  return (
    <div className="bg-[#3F51B5] text-white p-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-sm mb-4">SmartShifter MES</div>
        <div className="flex justify-between items-start sm:flex-row flex-col">
          <div>
            <h1 className="text-2xl font-medium mb-1">Order Board For Order Nr</h1>
            <p className="text-sm opacity-90">Track all order related activities</p>
          </div>
          <button
            onClick={onClose}
            className="bg-white text-[#3F51B5] px-4 py-2 rounded-md flex items-center gap-2 hover:bg-opacity-90 transition-colors sm:mt-0 mt-4"
          >
            Close <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;