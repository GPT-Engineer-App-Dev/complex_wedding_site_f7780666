import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Schedule = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl" color="brand.500">
          Wedding Schedule
        </Heading>
        <Text mt={4} fontSize="lg">
          Detailed schedule will be provided soon.
        </Text>
      </VStack>
    </Container>
  );
};

export default Schedule;
