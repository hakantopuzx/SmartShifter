import React from 'react';
import { Check } from 'lucide-react';

interface SuccessModalProps {
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-[#28A745] rounded-full flex items-center justify-center mb-4">
            <Check className="text-white" size={24} />
          </div>
          <h3 className="text-xl font-medium mb-2">Saved Successfully</h3>
          <p className="text-gray-600 mb-6">
            Production has been released. Please review the latest updates to verify.
          </p>
          <button
            onClick={onClose}
            className="w-full bg-[#00A76F] text-white py-2 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;