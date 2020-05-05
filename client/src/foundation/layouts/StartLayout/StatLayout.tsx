import React, { FC } from "react";
import { Flex, Box, Image, Text } from "rebass";

import HeroImage from "../../../assets/undraw_in_real_life_v8fk.png";

const StartLayout: FC = (props) => {
  return (
    <Flex height="100vh" sx={{ position: "relative" }}>
      <Text
        sx={{ position: "absolute", top: "40px", left: "40px" }}
        fontSize={24}
        fontWeight="bold"
      >
        Online Draft
      </Text>
      <Box
        p={3}
        width={2 / 3}
        height="100%"
        color="text"
        bg="primary"
        sx={{ textAlign: "center" }}
      >
        <Flex height="100%" justifyContent="center" alignItems="center">
          <Image src={HeroImage} alt="" width="45%" />
        </Flex>
      </Box>
      <Box p={3} width={1 / 3} color="white" bg="muted">
        {props.children}
      </Box>
    </Flex>
  );
};

export default StartLayout;
