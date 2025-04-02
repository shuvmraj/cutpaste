// Determine if we're in production by checking the hostname
const isProduction = window.location.hostname !== 'localhost' && 
                    window.location.hostname !== '127.0.0.1';

// Use the appropriate API URL based on environment
export const API_URL = isProduction 
  ? 'https://your-deployed-backend-url.com/api'  // Replace with your actual deployed backend URL
  : 'http://localhost:3001/api';

// Same for Socket.io URL
export const SOCKET_URL = isProduction
  ? 'https://your-deployed-backend-url.com'  // Replace with your actual deployed backend URL
  : 'http://localhost:3001';

export const POLLING_INTERVAL = 1000; // 1 second