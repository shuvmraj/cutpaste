const API_URL = 'http://localhost:3001/api';

export const updateText = async (code, text) => {
  try {
    const response = await fetch(`${API_URL}/text`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, text }),
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
    return await response.json();
  } catch (error) {
    console.error('Error fetching text:', error);
    throw error;
  }
};