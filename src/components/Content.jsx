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
    <div className="lg:w-1/2 mt-8 lg:mt-0 flex items-start justify-center">
      <div className="bg-blue-500/5 p-6 rounded-lg w-96">
        {!showTextArea ? (
          <>
            <div className="mb-6">
              <h2 className="text-blue-400 mb-2">Enter sharing code:</h2>
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
            {inputCode.length !== 4 && (
              <button
                onClick={() => setShowTextArea(true)}
                className="w-full px-8 py-4 text-xl text-purple-400 border border-purple-400 rounded-lg
                         hover:bg-purple-400/10 transition-all duration-300 ease-in-out"
              >
                Type & Share Now!
              </button>
            )}
          </>
        ) : (
          <div className="space-y-4">
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

        {receivedText && (
          <div className="mt-6 space-y-2">
            <h3 className="text-blue-400 text-lg">Received Text:</h3>
            <pre className="w-full bg-blue-500/5 p-4 rounded-lg text-gray-400 whitespace-pre-wrap
                          border border-blue-500/30 font-sans">
              {receivedText}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
