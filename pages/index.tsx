import { Box, Center, Divider, Fade, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import RegistrationForm from "../components/forms/registration-form";

export default function Home() {
  const [data, setData] = useState<{
    enrollmentId: string;
    name: string;
    email: string;
  }>();

  return (
    <Center height="100vh" width="100vw">
      <Box background="gray.50" borderRadius="md" shadow="md" padding="6">
        <Fade in={!data} unmountOnExit>
          <Heading textAlign="center">
            Register for the event of the year 🐱‍👓
          </Heading>
          <Box height="2rem"></Box>
          <Text>
            Get your Enrollent ID, Name and E-Mail Address ready and send your
            registration on its way.
          </Text>
          <Box height="2rem"></Box>

          <RegistrationForm onRegistered={setData} />
        </Fade>
        <Fade in={!!data} unmountOnExit>
          <Box maxWidth={"xl"}>
            <Heading textAlign="center">Thank you 🙌</Heading>
            <Box height="2rem"></Box>
            <Text>
              We have your registration for the Enrollemnt ID{" "}
              <Text
                as="span"
                display="inline"
                fontWeight="bold"
                color="blue.600"
              >
                {data?.enrollmentId}
              </Text>{" "}
              and we are looking forward to meeting you,{" "}
              <Text
                as="span"
                display="inline"
                fontWeight="bold"
                color="blue.600"
              >
                {data?.name}
              </Text>
              .
            </Text>
            <Text>
              We will be sending you some reminder E-Mails at{" "}
              <Text
                as="span"
                display="inline"
                fontWeight="bold"
                color="blue.600"
              >
                {data?.email}
              </Text>
            </Text>
          </Box>
        </Fade>
      </Box>
    </Center>
  );
}
