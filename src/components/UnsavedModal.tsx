import React from 'react';
import { X } from 'lucide-react';

interface UnsavedModalProps {
  onClose: () => void;
  onTryAgain: () => void;
}

const UnsavedModal: React.FC<UnsavedModalProps> = ({ onTryAgain }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-[#F23700] rounded-full flex items-center justify-center mb-4">
            <X className="text-white" size={24} />
          </div>
          <h3 className="text-xl font-medium mb-2">Unsaved changes</h3>
          <p className="text-gray-600 mb-6">
            Production has not been released. Please complete the necessary steps or contact support if you need assistance.
          </p>
          <button
            onClick={onTryAgain}
            className="w-full bg-[#F23700] text-white py-2 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnsavedModal;