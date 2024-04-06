import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Logistics = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl" color="brand.500">
          Wedding Logistics
        </Heading>
        <Text mt={4} fontSize="lg">
          Information about travel, accommodation, and other logistics will be available here.
        </Text>
      </VStack>
    </Container>
  );
};

export default Logistics;
