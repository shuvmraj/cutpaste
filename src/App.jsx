import React, { useState, useEffect } from 'react';
import { database } from './services/firebase';
import { ref, set, onValue, off } from 'firebase/database';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Content from './components/Content';
import { Link, BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Guide from './components/Guide';
import { HelpCircle } from 'lucide-react';

// Create a new MainPage component to hold the main page content
const MainPage = ({ 
  text, 
  setText, 
  code, 
  inputCode, 
  setInputCode, 
  receivedText, 
  showTextArea, 
  setShowTextArea, 
  handleTextChange 
}) => {
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
        <div className="text-center mt-24 flex items-center justify-center space-x-2">
            <HelpCircle className="text-blue-400 w-6 h-6" /> {/* Add the icon */}
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
  const [text, setText] = useState('');
  const [code, setCode] = useState('');
  const [inputCode, setInputCode] = useState('');
  const [receivedText, setReceivedText] = useState('');
  const [showTextArea, setShowTextArea] = useState(false);

  useEffect(() => {
    const newCode = Math.floor(1000 + Math.random() * 9000).toString();
    setCode(newCode);
  }, []);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    if (code) {
      set(ref(database, `texts/${code}`), { text: newText });
    }
  };

  useEffect(() => {
    if (inputCode.length === 4) {
      const textRef = ref(database, `texts/${inputCode}`);
      onValue(textRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setReceivedText(data.text);
        }
      });
      return () => off(textRef);
    }
  }, [inputCode]);

  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
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
          {/* Redirect any unknown paths to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;