import React, { useState, useEffect } from "react";
import { updateText, getText, joinRoom, subscribeToTextUpdates } from "./services/api";
// Remove the MongoDB import
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Content from "./components/Content";
import { Link, BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Guide from "./components/Guide";
import { HelpCircle } from "lucide-react";
import Preloader from "./components/Preloader";

const MainPage = ({ text, setText, code, inputCode, setInputCode, receivedText, showTextArea, setShowTextArea, handleTextChange }) => {
  return (
    <>
    
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <Hero />
          <Content
            text={text}
            setText={setText}
            code={code}
            inputCode={inputCode}
            setInputCode={setInputCode}
            receivedText={receivedText}
            setShowTextArea={setShowTextArea}
            showTextArea={showTextArea}
            handleTextChange={handleTextChange}
          />
        </div>
        <div className="text-center mt-8 flex items-center justify-center space-x-2">
          <HelpCircle className="text-blue-400 w-6 h-6" />
          <Link to="/guide" className="text-blue-400 underline">
            How to Use CutPaste
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  const [text, setText] = useState("");
  const [code, setCode] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [receivedText, setReceivedText] = useState("");
  const [showTextArea, setShowTextArea] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Remove the initial code generation useEffect

  const handleTextChange = async (e) => {
    const newText = e.target.value;
    setText(newText);
    
    // Generate code only when text is entered and no code exists
    if (newText && !code) {
      const newCode = Math.floor(1000 + Math.random() * 9000).toString();
      setCode(newCode);
    }

    // Update text in database if code exists
    if (code) {
      try {
        await updateText(code, newText);
      } catch (error) {
        console.error("Error updating text:", error);
      }
    }
  };

  // In your App component, modify the inputCode useEffect:
  
  useEffect(() => {
    let intervalId;
    let unsubscribe;

    const fetchText = async () => {
      if (inputCode.length === 4) {
        try {
          const data = await getText(inputCode);
          if (data && data.text !== undefined) {
            setReceivedText(data.text);
            setShowTextArea(false); // Show received text instead of input
          }
        } catch (error) {
          console.error("Error fetching text:", error);
        }
      }
    };

    if (inputCode.length === 4) {
      fetchText();
      
      // Join the socket room for this code
      joinRoom(inputCode);
      
      // Subscribe to real-time updates
      unsubscribe = subscribeToTextUpdates((data) => {
        if (data.code === inputCode) {
          setReceivedText(data.text);
        }
      });
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [inputCode]);
  
  // Add a submit function
  // Add the handleSubmit function to App.jsx
  const handleSubmit = async () => {
    if (text && code) {
      try {
        await updateText(code, text);
        alert(`Text saved with code: ${code}`);
        // Optionally reset the form or navigate elsewhere
      } catch (error) {
        console.error("Error submitting text:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {isLoading ? (
        <Preloader setIsLoading={setIsLoading} />
      ) : (
        <Routes>
          <Route 
            path="/" 
            element={
              <MainPage
                text={text}
                setText={setText}
                code={code}
                inputCode={inputCode}
                setInputCode={setInputCode}
                receivedText={receivedText}
                showTextArea={showTextArea}
                setShowTextArea={setShowTextArea}
                handleTextChange={handleTextChange}
                handleSubmit={handleSubmit} // Add this prop
              />
            } 
          />
          <Route path="/guide" element={<Guide />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
