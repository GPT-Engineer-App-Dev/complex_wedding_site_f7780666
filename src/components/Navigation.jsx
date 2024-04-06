import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="brand.500" color="white">
      <Box>
        <Link as={RouterLink} to="/" px={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/schedule" px={2}>
          Schedule
        </Link>
        <Link as={RouterLink} to="/logistics" px={2}>
          Logistics
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
