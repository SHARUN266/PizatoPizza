import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import backGroundImage from "./media/background.jpg";

import { setTrendingAllData } from "./helper/setTrending";
function Trending() {
  const [trending, setTrending] = useState();

  useEffect(() => {
    setTrendingAllData(setTrending);
  }, []);
  return (
    <Box
      display={"flex"}
      color={"#fff"}
      bgImage={backGroundImage}
      bgSize={"cover"}
      alignItems={"center"}
      justifyContent={"center"}
      h={["17vh", "23vh", "30vh"]}
      flexDirection="column"
      w={"100%"}
    >
      <Text
        fontFamily={"Roboto Regular"}
        color={"#f8c301"}
        fontSize={["md", "lg", "2xl"]}
        align={"left"}
      >
        Trending:
      </Text>

      <Text
        fontFamily={"Roboto Bold"}
        fontSize={["4xl", "4xl", "6xl"]}
        align={"center"}
      >
        {!trending?"-----":trending}
      </Text>
    </Box>
  );
}

export default Trending;
