import { Box, Text, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
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
  );
};

export default Header;
