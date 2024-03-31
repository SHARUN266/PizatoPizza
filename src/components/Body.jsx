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
} from "@chakra-ui/react";
import React, { useState } from "react";
import VegieTarianLogo from "./media/Vegitarian_logo.png";

import { handleOnionSmall } from "./helper/HandleJsonServer";
import MenuItems from "./helper/menu";

function Body() {
  const toast = useToast();
  return (
    <Box
      p={["2px", "3rem", "5rem"]}
      mt={"5%"}
      color={"#f8c301"}
      fontSize={["12px", "md", "2xl"]}
    >
      <TableContainer>
        <Table
          fontFamily={"Roboto Regular"}
          textAlign={"center"}
          bgRepeat={"no-repeat"}
          bgSize={"50%"}
          border={"2px solid #fff"}
          borderRadius={"5px"}
          bgPos={"center"}
          w={"100%"}
          size={["sm", "md", "lg"]}
          bgImage={VegieTarianLogo}
        >
          <TableCaption>Here please add your pizza</TableCaption>
          <Thead>
            <Tr>
              <Th
                w={"70%"}
                fontSize={["12px", "md", "2xl"]}
                color={"#f8c301"}
                fontFamily={"Roboto Regular"}
              >
                Pizza Name
              </Th>

              <Th
                fontSize={["12px", "md", "2xl"]}
                color={"#f8c301"}
                fontFamily={"Roboto Regular"}
                textAlign={"center"}
              >
                Small
              </Th>
              <Th
                fontSize={["12px", "md", "2xl"]}
                color={"#f8c301"}
                fontFamily={"Roboto Regular"}
                textAlign={"center"}
              >
                Medium
              </Th>
              <Th
                color={"#f8c301"}
                fontSize={["12px", "md", "2xl"]}
                fontFamily={"Roboto Regular"}
                textAlign={"center"}
              >
                Large
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {MenuItems?.map((pizza) => (
              <Tr key={pizza.pizzaName}>
                <Td>{pizza.pizzaName}</Td>
                {pizza?.prices?.map((item, index) => (
                  <Td
                    textAlign={"center"}
                    onClick={() =>
                      handleOnionSmall(
                        pizza?.pizzaName,
                        item,
                        pizza?.identifiers[index],
                        toast
                      )
                    }
                    cursor={"pointer"}
                  >
                    {item}/-
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Body;
