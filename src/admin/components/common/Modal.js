import React from "react";

// Custom scrollbar styles
const customScrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };

  return (
    <>
      <style>{customScrollbarStyles}</style>
      <div
        className="fixed inset-0 z-50 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center p-4"
        id="wrapper"
        onClick={handleClose}
      >
      <div className="w-full max-w-4xl max-h-[90vh] md:max-h-[95vh] flex items-center">
        <div className="w-full max-w-4xl h-full mx-auto flex flex-col">
          <div
            className="p-4 sm:p-5 relative h-full overflow-y-auto custom-scrollbar"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "15px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              maxHeight: "90vh",
            }}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all duration-200 shadow-sm hover:shadow-md"
              onClick={onClose}
              title="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="mt-8 sm:mt-6">{children}</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Modal;
