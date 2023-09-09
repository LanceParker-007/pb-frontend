import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Button,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAppContext } from "../Context/AppContext";
import axios from "axios";

const ContactForm = () => {
  const { setUser } = useAppContext();
  const [username, setUsername] = useState("");
  const [registrationLoading, setRegistrationLoading] = useState(false);
  const toast = useToast();

  //Register for contest
  const registerUser = async (e) => {
    e.preventDefault();

    try {
      setRegistrationLoading(true);
      const { data } = await axios.post(`${server}/api/user/register`, {
        username,
      });

      setUser(data);
      localStorage.setItem("userInfo", JSON.stringify(data));

      toast({
        title: "Registered for contest",
        status: "success",
        duration: "2000",
        position: "top",
      });
      setRegistrationLoading(false);
    } catch (error) {
      toast({
        title: error.response.data.message,
        status: "error",
        duration: "2000",
        position: "top",
      });
      setRegistrationLoading(false);
    }
  };

  return (
    <Box
      id="registerform"
      py={6}
      px={2}
      display={"flex"}
      justifyContent={"center"}
      mb={"6rem"}
    >
      <Box
        border={"1px"}
        borderColor={"blackAlpha.200"}
        width={"md"}
        p={2}
        borderRadius={6}
        boxShadow={"0 3px 10px rgb(0 0 0 / 0.9)"}
      >
        <Heading textAlign={"center"}>BEAT ME! </Heading>
        <form onSubmit={registerUser} style={{ padding: "2px 6px" }}>
          <FormControl mb={2} isRequired>
            <FormLabel htmlFor={"name"} my={0}>
              Username
            </FormLabel>
            <Input
              bg={"white"}
              name="name"
              type={"text"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <Button
            isLoading={registrationLoading}
            type={"submit"}
            my={6}
            width={""}
            colorScheme={"twitter"}
          >
            Register{" "}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default ContactForm;
