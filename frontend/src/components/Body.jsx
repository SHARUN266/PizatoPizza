import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import React, { useState } from "react";
import VegieTarianLogo from "./media/Vegitarian_logo.png";
import axios from 'axios';




// Function to fetch existing data from the server
async function fetchExistingData() {
  try {
    const response = await axios.get('http://localhost:8000/2024');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch existing data from the server');
  }
}

// Function to post data to the server using Axios
async function postData(data) {
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
async function patchDataToServer(itemId) {
  console.log(itemId,"dsdd")
  try {
    //const url = `http://localhost:8000/2024/${itemId}`;
    await axios.patch(`http://localhost:8000/2024/${itemId}`,  {
      id: Date.now(),
      name: "Onion & Cheese",
      qty: 789,
      timeStamp: Date.now(),
      price: 69
    });
    console.log('Data patched successfully');
  } catch (error) {
    console.error('There was a problem patching the data:', error);
    throw new Error('Failed to patch data to the server');
  }
}



function Body() {

  const [pizzaOnionCountObject69,setOnionPizzaCount69]=useState();
  const [pizzaOnionCountObject110,setOnionPizzaCount110]=useState();
  const [pizzaOnionCountObject159,setOnionPizzaCount159]=useState();
 
  async function handleOnionSmall() {
    try {
      // Fetch existing data from server
      const existingData = await fetchExistingData();
  
      // Check if Onion & Cheese pizza already exists in data
      const onionPizza = existingData.find(item => item.name === "Onion & Cheese");
      
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
          id: Date.now(),
          name: "Onion & Cheese",
          qty: 1,
          timeStamp: Date.now(),
          price: 69
        };
        await postData(newData); // Post new data to server
      
      }
    } catch (error) {
      console.error('Error handling Onion & Cheese pizza:', error);
    }
  }
  function handleOnionMedium() {
    setOnionPizzaCount110(prevState => {
      if (prevState === null || prevState === undefined) {
        // Agar state abhi tak set nahi kiya gaya hai, to pura object set karo
        let data= {
          id:Date.now(),
          name: "Onion & Cheese",
          Qty: 1,
          timeStamp: Date.now(),
          price: 110
        };
        postData(data); // Post data to server
        return data; 
      } else {
        // Agar state pehle se set hai, to sirf Qty ko badhao
        let updatedData= {
          ...prevState,
          Qty: prevState.Qty + 1,
          timeStamp: Date.now() // Time stamp ko update karna optional hai, agar chaho to karo
        };
        postData(updatedData); // Post updated data to server
        return updatedData; 
      }
    });
  }

  function handleOnionLarge() {
    setOnionPizzaCount159(prevState => {
      if (prevState === null || prevState === undefined) {
        // Agar state abhi tak set nahi kiya gaya hai, to pura object set karo
        let data= {
          id:Date.now(),
          name: "Onion & Cheese",
          Qty: 1,
          timeStamp: Date.now(),
          price: 159
        };

        postData(data); // Post data to server
        return data; 
      } else {
        // Agar state pehle se set hai, to sirf Qty ko badhao
        let updatedData= {
          ...prevState,
          Qty: prevState.Qty + 1,
          timeStamp: Date.now() // Time stamp ko update karna optional hai, agar chaho to karo
        };
        postData(updatedData); // Post updated data to server
        return updatedData;
      }
    });
  }
  console.log(pizzaOnionCountObject69,pizzaOnionCountObject110,pizzaOnionCountObject159)
  return (
    <Box p={["2px","3rem","5rem"]} mt={"5%"} color={"#f8c301"} fontSize={["12px","md","2xl"]}>
      <TableContainer   >
        <Table
          
          fontFamily={"Roboto Regular"}
          textAlign={"center"}
          bgRepeat={"no-repeat"}
          bgSize={"contain"}
          border={"2px solid #fff"}
          borderRadius={"5px"}
          bgPos={"center"}
          w={"100%"}
        
          size={["sm","md","lg"]}
          bgImage={VegieTarianLogo}
        >
          <TableCaption>Here please add your pizza</TableCaption>
          <Thead>
            <Tr>
              <Th w={"70%"} fontSize={["12px","md","2xl"]} color={"#f8c301"} fontFamily={"Roboto Regular"}>
                Pizza Name
              </Th>

              <Th
                fontSize={["12px","md","2xl"]}
                color={"#f8c301"}
                fontFamily={"Roboto Regular"}
                textAlign={"center"}
              >
                Small
              </Th>
              <Th
                fontSize={["12px","md","2xl"]}
                color={"#f8c301"}
                fontFamily={"Roboto Regular"}
                textAlign={"center"}
              >
                Medium
              </Th>
              <Th
                color={"#f8c301"}
                fontSize={["12px","md","2xl"]}
                fontFamily={"Roboto Regular"}
                textAlign={"center"}
              >
                Large
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Onion & Cheese</Td>
              <Td textAlign={"center"} onClick={handleOnionSmall}   cursor={"pointer"} >59/-</Td>
              <Td textAlign={"center"} onClick={handleOnionMedium}    cursor={"pointer"}>110/-</Td>
              <Td textAlign={"center"} onClick={handleOnionLarge}    cursor={"pointer"}>159/-</Td>
            </Tr>
            <Tr>
              <Td>Tomato & Cheese</Td>
              <Td textAlign={"center"}  >59/-</Td>
              <Td textAlign={"center"}>110/-</Td>
              <Td textAlign={"center"}>159/-</Td>
            </Tr>
            <Tr>
              <Td>Capsicum & Cheese</Td>
              <Td textAlign={"center"}>59/-</Td>
              <Td textAlign={"center"}>110/-</Td>
              <Td textAlign={"center"}>159/-</Td>
            </Tr>
           
            
            
          
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Body;
