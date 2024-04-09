import axios from 'axios';
export async function patchDataToServer(itemId,data) {

    try {
    
      let res=  await axios.patch(`http://localhost:8000/2024/${itemId}`,data);
      console.log('Data patched successfully');
      return res
    } catch (error) {
      console.log('There was a problem patching the data:', error.message);
      throw new Error('Failed to patch data to the server');
    }
  }
  
  