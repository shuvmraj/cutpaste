import { API_URL } from '../config';
import { io } from 'socket.io-client';

// Create socket connection
const socket = io('http://localhost:3001');

export const updateText = async (code, text) => {
  try {
    const response = await fetch(`${API_URL}/text`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, text })
    });
    return await response.json();
  } catch (error) {
    console.error('Error updating text:', error);
    throw error;
  }
};

export const getText = async (code) => {
  try {
    const response = await fetch(`${API_URL}/text/${code}`);
    const data = await response.json();
    // Emit that someone is viewing this text
    socket.emit('viewingText', code);
    return data;
  } catch (error) {
    console.error('Error fetching text:', error);
    throw error;
  }
};

// Socket methods
export const joinRoom = (code) => {
  socket.emit('joinRoom', code);
};

export const subscribeToTextUpdates = (callback) => {
  socket.on('textUpdated', (data) => {
    callback(data);
  });
  
  return () => {
    socket.off('textUpdated');
  };
};

// Add a method to check if a code exists
export const checkCodeExists = async (code) => {
  try {
    const response = await fetch(`${API_URL}/text/${code}/exists`);
    return await response.json();
  } catch (error) {
    console.error('Error checking code:', error);
    return { exists: false };
  }
};