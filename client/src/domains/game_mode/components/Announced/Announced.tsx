import React from "react";
import { Box, Heading } from "rebass";
import { MainLayout } from "../../../../foundation/layouts";

const Announced = () => {
  return (
    <MainLayout>
      <Box width="50%" maxWidth={960} minWidth={600} mx="auto" mb={32} py={80}>
        <Heading textAlign="center">
          競合の準備をしています．しばらくお待ちください．
        </Heading>
      </Box>
    </MainLayout>
  );
};

export default Announced;
