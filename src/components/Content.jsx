import React from 'react';

const Content = ({
  text,
  setText,
  code,
  inputCode,
  setInputCode,
  receivedText,
  setShowTextArea,
  showTextArea,
  handleTextChange,
}) => {
  return (
    <div className="lg:w-1/2 mt-16 lg:mt-0 flex items-start justify-center">
      <div className="bg-blue-500/5 p-6 rounded-lg w-96">
        {/* Conditionally render based on showTextArea */}
        {!showTextArea ? (
          <>
            {/* Hide "To Share Your Text" and button when a valid code is entered */}
            {inputCode.length !== 4 && (
              <>
                <h3 className="text-blue-400 text-lg mb-4">To Share Your Text:</h3>
                <button
                  onClick={() => setShowTextArea(true)}
                  className="w-full px-8 py-4 mb-24 text-xl text-purple-400 border border-purple-400 rounded-lg
                           hover:bg-purple-400/10 transition-all duration-300 ease-in-out mb-6"
                >
                  Type & Share Now!
                </button>
              </>
            )}

            {/* Show the "To Receive Your Text" section */}
            <div className="mb-6">
              <h3 className="text-blue-400 text-lg mb-4">To Receive Your Text:</h3>
              <input
                type="text"
                maxLength={4}
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                placeholder="Enter 4-digit code"
                className="w-full px-4 py-3 bg-transparent border border-blue-500/30 rounded-lg
                         text-center font-mono text-xl text-white placeholder-blue-300/50
                         focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20
                         focus:outline-none"
              />
            </div>

            {/* Show received text only when inputCode is valid */}
            {inputCode.length === 4 && receivedText && (
              <div className="mt-6 space-y-2">
                <pre
                  className="w-full bg-blue-500/5 p-4 rounded-lg text-gray-400 whitespace-pre-wrap
                            border border-blue-500/30 font-sans"
                >
                  {receivedText}
                </pre>
              </div>
            )}
          </>
        ) : (
          // Show the "Type & Share" text area
          <div className="space-y-4">
            <h3 className="text-blue-400 text-lg mb-2">To Share Your Text:</h3>
            <p className="text-gray-400">
              Your sharing code:
              <span className="ml-2 font-mono text-xl text-blue-400 font-semibold">{code}</span>
            </p>
            <textarea
              value={text}
              onChange={handleTextChange}
              placeholder="Type your text here..."
              className="w-full h-36 px-4 py-2 bg-transparent border border-blue-500/30 rounded-lg
                       text-white placeholder-gray-400 focus:border-purple-500
                       focus:ring-2 focus:ring-purple-500/20 focus:outline-none"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
