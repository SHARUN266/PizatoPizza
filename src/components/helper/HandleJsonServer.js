import { fetchExistingData } from "./GetData";
import { patchDataToServer } from "./HandlePatch";
import { postData } from "./PostData";
import { v4 as uuidv4 } from 'uuid';

 export async function handleOnionSmall(PizzaName,price,identifyName,toast) {
    try {
      // Fetch existing data from server
      const existingData = await fetchExistingData();
  
      // Check if Onion & Cheese pizza already exists in data
      const onionPizza = existingData.find(item => item.identify === identifyName);
      
      if (onionPizza) {
        // If Onion & Cheese pizza already exists, update its Qty
        const updatedData = {

          
          ...onionPizza,
          qty: onionPizza.qty + 1,
          timeStamp: Date.now()
        };
        await  patchDataToServer(onionPizza?.id,updatedData); // Post updated data to server
      
      } else {
        // If Onion & Cheese pizza doesn't exist, add it as new
        const newData = {
          id: uuidv4(),
          name: PizzaName,
          qty: 1,
          identify:identifyName,
          timeStamp: Date.now(),
          price
        };
        await postData(newData); 
       
      }

      toast({
        title: `Name: ${PizzaName}, Price: ${price}/- added in records successfully!`,
   
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
  
    } catch (error) {
      console.error('Error handling Onion & Cheese pizza:', error);
      toast({
        title: `Something went wrong ${error.message}`,
   
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }