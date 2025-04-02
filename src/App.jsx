import React, { useState, useEffect } from "react";
import { updateText, getText } from "./services/api";
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

  useEffect(() => {
    const newCode = Math.floor(1000 + Math.random() * 9000).toString();
    setCode(newCode);
  }, []);

  const handleTextChange = async (e) => {
    const newText = e.target.value;
    setText(newText);
    if (code) {
      try {
        await updateText(code, newText);
      } catch (error) {
        console.error("Error updating text:", error);
      }
    }
  };

  useEffect(() => {
    let intervalId;

    const fetchText = async () => {
      if (inputCode.length === 4) {
        try {
          const data = await getText(inputCode);
          if (data && data.text !== undefined) {
            setReceivedText(data.text);
          }
        } catch (error) {
          console.error("Error fetching text:", error);
        }
      }
    };

    if (inputCode.length === 4) {
      fetchText();
      intervalId = setInterval(fetchText, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [inputCode]);

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
