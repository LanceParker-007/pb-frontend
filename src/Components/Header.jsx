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
      <Text p={2} bg={"whatsapp.200"} textAlign={"center"}>
        Winner will get Rs.200 as winning amount
        <br />
        Winner will be announced on 11th September
      </Text>
      <Text bg={"yellow.200"} textAlign={"center"} p={2}>
        As soon as you click in Beat me button, timer will start running. Get
        the most clicks in 60s and you will be the winner
      </Text>
    </>
  );
};

export default Header;
