import {
    Box,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    useToast,
    TableCaption,
    TableContainer,
    Flex,
    Button,
    Text,
    Image,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import VegieTarianLogo from "./media/Vegitarian_logo.png";
  import { MdAutoDelete } from "react-icons/md";
  import { handleOnionSmall } from "./helper/HandleJsonServer";
  import MenuItems from "./helper/menu";
import { fetchExistingData } from "./helper/GetData";
import {GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { NumberFormate } from "./helper/NumberFormate";
import axios from "axios";
import { patchDataToServer } from "./helper/HandlePatch";
import Chef from "./media/Pizza maker-bro.svg";



function Dashboard() {
    const toast = useToast();
    const [getAllPizzaEntry,setGetAllPizzaEntry]=useState();
   const [flag,setFlag]=useState(false)

    async function getAllEntry(){
        try{
            let data=await fetchExistingData()
            setGetAllPizzaEntry(data)
        }catch(e){
             console.log(e.message)
        }
    }
     async function handledelete(id){
      try{
        let res=await axios.delete(`http://localhost:8000/2024/${id}`)
        if(res){
          toast({
            title: 'Entry deleted successfully!',
       
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        }
        getAllEntry()
     
      }catch(e){
        toast({
          title: e.meesage,
        
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
    }
    useEffect(()=>{
        getAllEntry()

    },[flag])
  return (
    <Box
    p={["2px", "3rem", "5rem"]}
   
    color={"#35407b"}
    fontSize={["12px", "md", "2xl"]}
  >
   {
    getAllPizzaEntry?.length==0?(
      <>
     
      <Image p="3rem" src={Chef}/>
      </>
    ):(  <TableContainer>
      <Table
        fontFamily={"Roboto Regular"}
        textAlign={"center"}
        variant='striped'
        border={"2px solid #fff"}
        borderRadius={"lg"}
        bgPos={"center"}
        bgColor={"#fff"}
        w={"100%"}
        whiteSpace={"nowrap"}
        size={["sm", "md", "lg"]}
       
      >
        <TableCaption  ><Box pos={"relative"} left={"30%"} h={["10vh","15vh","20vh"]} w={"40%"}display={"flex"} alignContent={"center"} justifyContent={"center"} flexDirection={"column"} bg={"#0a11aa69"} border={"1px solid"} borderRadius={"md"} fontSize={"2xl"} color={"white"}> <Box fontSize={"xl"}> Your Total:</Box> {NumberFormate(getAllPizzaEntry?.reduce((total, pizza) => total + pizza.qty * pizza.price, 0))} ₹</Box></TableCaption>
        <Thead>
          <Tr>
            <Th
          
              fontSize={["12px", "md", "2xl"]}
              color={"#35407b"}
              fontFamily={"Roboto Bold"}
            >
              Pizza Name
            </Th>

            <Th
              fontSize={["12px", "md", "2xl"]}
              color={"#35407b"}
              fontFamily={"Roboto Bold"}
              textAlign={"center"}
            >
              QUANTITY
            </Th>
            <Th
              fontSize={["12px", "md", "2xl"]}
              color={"#35407b"}
              fontFamily={"Roboto Bold"}
              textAlign={"center"}
            >
              PRICE
            </Th>
            <Th
              color={"#35407b"}
              fontSize={["12px", "md", "2xl"]}
              fontFamily={"Roboto Bold"}
              textAlign={"center"}
            >
              DATE & TIME
            </Th>
            <Th
              color={"#ff0000"}
              fontSize={["12px", "md", "2xl"]}
              fontFamily={"Roboto Bold"}
              textAlign={"center"}
            >
              DELETE
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {getAllPizzaEntry?.map((pizza) => (
            <Tr key={pizza.name}>
              <Td >{pizza.name} ({pizza.price}₹)</Td>
              <Td textAlign={"center"}> <Flex  align={"center"} gap={"5px"}>  <Button size={["xs","sm","lg"]} isDisabled={pizza.qty==1?true:false}   onClick={()=>{
                  setFlag(!flag)
                  patchDataToServer(pizza?.id,{qty:pizza?.qty-1})}}><FiMinus/></Button> <Text  fontSize={["sm","md","lg"]} > {pizza.qty}</Text> <Button  size={["xs","sm","lg"]} onClick={()=>{
                    setFlag(!flag)
                    
                    patchDataToServer(pizza?.id,{qty:pizza?.qty+1})}} >
                      
                      <GoPlus/></Button>  </Flex>   </Td>
              <Td  textAlign={"center"}>{NumberFormate(+pizza.qty*pizza.price)}₹</Td>
              <Td>{new Date(pizza.timeStamp).toLocaleTimeString()}</Td>
              <Td  cursor={"pointer"} textAlign={"center"} onClick={()=>handledelete(pizza?.id)} ><MdAutoDelete /></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>)
   }
  
  </Box>
  )
}

export default Dashboard