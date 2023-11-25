import {
  Box,
  Button,
  Text,
  VStack,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";
import AdOnLeft from "./Ads/AdOnLeft";

const PracticeButton = () => {
  const [clicks, setCLicks] = useState(0);
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = (e) => {
    e.preventDefault();

    if (timer < 10) {
      setCLicks(clicks + 1);
    }

    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTimer((prev) => {
          if (prev < 10) {
            return prev + 1;
          } else {
            clearInterval(intervalRef.current);
            return 10;
          }
        });
      }, 1000);
    }
  };

  const ResetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimer(0);
    setCLicks(0);
  };

  return (
    <Box
      width={"full"}
      px={4}
      py={5}
      display={{ sm: "column", md: "flex" }}
      justifyContent={{ sm: "center", md: "center" }}
      alignItems={"center"}
      height={"60vh"}
    >
      <AdOnLeft />
      <div
        style={{
          touchAction: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <VStack
          width={"24rem"}
          p={2}
          border={"1px"}
          borderColor={"blackAlpha.200"}
          boxShadow={"0 4px 20px rgb(0 0 0 / 0.9)"}
          borderRadius={6}
          bg={"whiteAlpha.900"}
        >
          <Text fontSize={24} fontFamily={"monospace"}>
            Practice Here
          </Text>
          <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <ButtonGroup size={"md"} isAttached variant="outline">
              <IconButton icon={<TimeIcon />} />
              <Button>{timer}</Button>
            </ButtonGroup>

            <Button onClick={() => ResetTimer()}>Reset</Button>
          </Box>

          <Text>{clicks}</Text>
          <Button
            colorScheme={"yellow"}
            onClick={(e) => startTimer(e)}
            width={"full"}
            height={"20vh"}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
          >
            Beat me
          </Button>
        </VStack>
      </div>
      <AdOnLeft />
    </Box>
  );
};

export default PracticeButton;
