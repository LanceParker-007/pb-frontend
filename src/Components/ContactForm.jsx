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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [registrationLoading, setRegistrationLoading] = useState(false);
  const toast = useToast();

  //Register for contest
  const registerUser = async (e) => {
    e.preventDefault();
    if (email && !email.includes("@gmail.com")) {
      toast({
        title: "Email not valid",
        status: "error",
        duration: "2000",
        position: "top",
      });
      return;
    }
    if (mobilenumber && mobilenumber.length !== 10) {
      toast({
        title: "Wrong mobile number ",
        status: "error",
        duration: "2000",
        position: "top",
      });
      return;
    }

    console.log(name);
    console.log(email);
    console.log(mobilenumber);
    try {
      setRegistrationLoading(true);
      const { data } = await axios.post(
        "http://localhost:5000/api/user/register",
        {
          name,
          email,
          mobilenumber,
        }
      );
      console.log(data);

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
              Name
            </FormLabel>
            <Input
              bg={"white"}
              name="name"
              type={"text"}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl mb={2} isRequired>
            <FormLabel htmlFor={"email"} my={0}>
              Email
            </FormLabel>
            <Input
              bg={"white"}
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl mb={2} isRequired>
            <FormLabel htmlFor={"name"} my={0}>
              Mobile Number
            </FormLabel>
            <Input
              bg={"white"}
              name="mobilenumber"
              type={"text"}
              value={mobilenumber}
              onChange={(e) => setMobilenumber(e.target.value)}
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
