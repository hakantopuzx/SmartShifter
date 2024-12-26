import React, { useState } from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';
import SuccessModal from './SuccessModal';
import UnsavedModal from './UnsavedModal';
import SubTabNavigation from './SubTabNavigation';
import InfoText from './InfoText';

const tabs = [
  { id: 'decision', label: 'Go / No Go Decision for Production release' },
  { id: 'status', label: 'Order Status' },
];

const GoNoGo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('decision');
  const [isReleased, setIsReleased] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showUnsavedModal, setShowUnsavedModal] = useState(false);

  const handleRelease = () => {
    setIsReleased(true);
    setShowSuccessModal(true);
  };

  const handleRevert = () => {
    setShowUnsavedModal(true);
  };

  const handleTryAgain = () => {
    setShowUnsavedModal(false);
    setIsReleased(false);
  };

  return (
    <div className="max-w-[1280px] mx-auto py-6 sm:px-0 px-2">
      <div className="border border-gray-200 rounded-lg">
        <SubTabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className="p-6 flex items-center justify-between gap-2 sm:flex-row flex-col gap-3">
          <div className={`rounded-lg flex items-center sm:w-[calc(100%-25%)] w-full`}>
            {isReleased ?
              <InfoText status='success' text='Production Released' />
              :
              <InfoText status='error' text='Production is not released yet' />
            }
          </div>
          <button
            onClick={isReleased ? handleRevert : handleRelease}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-md text-white bg-[#3F51B5] hover:bg-opacity-90 transition-colors sm:w-[25%] w-full"
          >
            {isReleased ? (
              <>
                <span className='text-sm'>Revert and Unpublish Production</span>
                <RotateCcw size={16} />
              </>
            ) : (
              <>
                <span className='text-sm'>Confirm and Release Production</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </div>
      </div>

      {showSuccessModal && <SuccessModal onClose={() => setShowSuccessModal(false)} />}
      {showUnsavedModal && (
        <UnsavedModal
          onClose={() => setShowUnsavedModal(false)}
          onTryAgain={handleTryAgain}
        />
      )}
    </div>
  );
};

export default GoNoGo;