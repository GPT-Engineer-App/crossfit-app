import React, { useState } from "react";
import { Box, Button, Container, Heading, Text, VStack, HStack, Input, useToast } from "@chakra-ui/react";
import { FaDumbbell, FaCalendarAlt, FaUsers } from "react-icons/fa";

const Index = () => {
  const [workout, setWorkout] = useState("");
  const toast = useToast();

  const handleRecordWorkout = () => {
    toast({
      title: "Workout Recorded",
      description: `You have successfully recorded your workout: ${workout}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setWorkout("");
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={4} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading mb={4}>🏋️‍♂️ CrossFit Tracker</Heading>
          <Text fontSize="xl">Record your daily workouts and track your progress!</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <HStack>
            <Input placeholder="Enter your workout details" value={workout} onChange={(e) => setWorkout(e.target.value)} />
            <Button leftIcon={<FaDumbbell />} colorScheme="teal" onClick={handleRecordWorkout}>
              Record Workout
            </Button>
          </HStack>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md" mb={2}>
            <FaCalendarAlt /> Workout Schedule
          </Heading>
          <Text>Check your upcoming workout sessions and plan ahead.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md" mb={2}>
            <FaUsers /> Community
          </Heading>
          <Text>Connect with other athletes, share tips, and motivate each other!</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
