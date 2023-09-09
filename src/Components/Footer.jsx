import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box height={"8rem"} bg={"blackAlpha.900"} p={5} color={"white"}>
      <Text fontSize={"xl"}>©PlayBrutal</Text>
      <a
        href="mailto:hiplaybrutal@gmail.com"
        target="_blank"
        fontSize={"sm"}
        mt={"2"}
        rel="noreferrer"
      >
        Contact: hiplaybrutal@gmail.com
      </a>
    </Box>
  );
};

export default Footer;
