import {
  Box,
  Button,
  Text,
  VStack,
  ButtonGroup,
  IconButton,
  Heading,
  Divider,
  useToast,
  Link,
} from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";
import { useAppContext } from "../Context/AppContext";
import { server } from "..";
import axios from "axios";

const MainEvent = () => {
  const { user } = useAppContext();
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);
  const toast = useToast();
  const clicks = useRef(0);
  const [displayClicks, setDisplayClicks] = useState(0);
  const [submitScoreLoading, setSubmitScoreLoading] = useState(false);

  const setScore = async () => {
    try {
      setSubmitScoreLoading(true);

      const { data } = await axios.post(
        `${server}/api/user/setscore`,
        {
          currentScore: clicks.current,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      toast({
        title: data.message,
        status: "success",
        duration: "4000",
        position: "top",
        isClosable: true,
      });
      setSubmitScoreLoading(false);
    } catch (error) {
      setSubmitScoreLoading(false);
      toast({
        title: "Error occured while saving score!",
        status: "error",
        position: "top",
        duration: "2000",
      });
    }
  };

  const startTimer = (e) => {
    e.preventDefault();

    if (timer < 2) {
      clicks.current = clicks.current + 1;
      setDisplayClicks(displayClicks + 1);
    }

    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTimer((prev) => {
          if (prev < 2) {
            return prev + 1;
          } else if (prev === 2) {
            setScore();
            clearInterval(intervalRef.current);
            return 2;
          }
        });
      }, 1000);
    }
  };

  const ResetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimer(0);
    clicks.current = 0;
    setDisplayClicks(0);
  };

  if (new Date().toDateString() !== "Tue Sep 10 2023") {
    return (
      <>
        <Divider my={6} height={20} />
        <Box
          width={"full"}
          px={4}
          py={6}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          fontSize={20}
        >
          <Heading>Main Event</Heading>
          will be visible here only on
          <span style={{ display: "inline-flex", color: "red" }}>
            10th September, 2023
          </span>
          <Link
            borderRadius={6}
            href="#registerform"
            textDecoration={"none"}
            border={"1px"}
            borderColor={"black"}
            p={1}
            _hover={{ bg: "black", color: "white" }}
          >
            Register now
          </Link>
        </Box>
      </>
    );
  }

  return user ? (
    <>
      <Divider />
      <Box
        width={"full"}
        px={4}
        py={6}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading my={0} fontFamily={"monospace"}>
          Event Live Today
        </Heading>
        <Text mb={6}>till 11:59pm </Text>
        <div style={{ touchAction: "none" }}>
          <VStack
            width={"24rem"}
            p={2}
            border={"1px"}
            borderColor={"blackAlpha.200"}
            boxShadow={"0 4px 20px rgb(0 0 0 / 0.9)"}
            borderRadius={6}
            bg={"whiteAlpha.900"}
          >
            <Text
              width={"full"}
              bg={"whatsapp.100"}
              fontFamily={"monospace"}
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
              py={2}
              borderRadius={6}
              fontSize={20}
            >
              Can be played multiple times 🚀
            </Text>
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <ButtonGroup
                size={"md"}
                isAttached
                variant="outline"
                borderColor={"blackAlpha.900"}
              >
                <IconButton icon={<TimeIcon />} />
                <Button>{timer}</Button>
              </ButtonGroup>

              <Button onClick={() => ResetTimer()} colorScheme={"twitter"}>
                Reset
              </Button>
            </Box>

            <Text>{displayClicks}</Text>
            <Button
              isLoading={submitScoreLoading}
              colorScheme={"red"}
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
      </Box>
    </>
  ) : (
    <>
      <Divider my={6} height={20} />
      <Box
        width={"full"}
        px={4}
        py={6}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        fontSize={20}
      >
        <Link
          borderRadius={6}
          href="#registerform"
          textDecoration={"none"}
          border={"1px"}
          borderColor={"black"}
          p={1}
          _hover={{ bg: "black", color: "white" }}
        >
          Register First
        </Link>

        <span style={{ display: "inline-flex", color: "red" }}>
          Then only you'll be able to play
        </span>
      </Box>
    </>
  );
};

export default MainEvent;
