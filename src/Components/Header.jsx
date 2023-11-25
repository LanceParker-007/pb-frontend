import { Box, Text, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Box
        width={"full"}
        boxSizing={"border-box"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={4}
        py={2}
        color={"white"}
        bg={"blackAlpha.900"}
        boxShadow={"0px 1px 6px gray"}
      >
        <Heading>PB</Heading>
        <Text>Play Brutal</Text>
      </Box>
      <Text textAlign={"center"}>In practice you are given 10s.</Text>
      <Text textAlign={"center"}>In main event you will have 60s.</Text>
    </>
  );
};

export default Header;
