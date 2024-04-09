// Function to post data to the server using Axios

import axios from 'axios';
export async function postData(data) {
    // JSON server URL
    
    const url = 'http://localhost:8000/2024';
  
    try {
      const response = await axios.post(url, data);
      console.log('Data posted successfully:', response.data);
      return response.data; // Return the posted data
    } catch (error) {
      console.error('There was a problem posting the data:', error);
      throw new Error('Failed to post data to the server');
    }
  }