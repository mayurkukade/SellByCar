// import React from 'react'
import {
  Card,
  CardBody,
  Divider,
  Button,
  Flex,
  Text,
  Box,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { RxHome } from "react-icons/rx";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RxFileText } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";

function SecondCard() {
  return (
    // {/* Second Card */}
    <Card maxW="md" mb={5}>
      <CardBody>
        <Box>
          <Text fontSize={30} fontWeight="bold">
            2013 Honda Civics
          </Text>
          <Box mt={5}>
            <Text fontSize={20}>AMBITION 1.6 MPI MTManual</Text>
          </Box>
        </Box>
        <Flex gap={8} mt={5}>
          <Box p={2} bg="gray.100" borderRadius="lg" width="fit-content">
            <Text color="black">96,953 KM</Text>
          </Box>
          <Box p={2} bg="gray.100" borderRadius="lg" width="fit-content">
            <Text color="black">2ND OWNER</Text>
          </Box>
          <Box p={2} bg="gray.100" borderRadius="lg" width="fit-content">
            <Text color="black">PETROL</Text>
          </Box>
          <Box p={2} bg="gray.100" borderRadius="lg" width="fit-content">
            <Text color="black">MH-04</Text>
          </Box>
        </Flex>
        <Flex gap={8} alignItems="center" mt={5} m={2}>
          <Box>
            <RxHome />
          </Box>
          <Text>Home Test Drive Available</Text>
        </Flex>
        <Flex gap={8} alignItems="center" m={2}>
          <Box>
            <FaMapMarkerAlt />
          </Box>
          <Text>Parked at: Goregaon, Mumbai</Text>
        </Flex>
        <Flex gap={8} alignItems="center" m={2}>
          <Box>
            <RxFileText />
          </Box>
          <Text>View Inspection Report</Text>
        </Flex>
        <Flex gap={8} alignItems="center" m={2}>
          <Box>
            <FaWhatsapp />
          </Box>
          <Text>Get Service History Report</Text>
        </Flex>
        <Box>
          <Divider />
        </Box>
        <Flex justifyContent="space-between" m={6} mt={1}>
          <Text color="orange" fontWeight="bold" fontSize="20">
            ₹7,979/month
          </Text>
          <Text color="black" fontWeight="bold" fontSize="20">
            ₹3.03 Lakh
          </Text>
        </Flex>
        <Text fontWeight="bold" m={6} mt={1}>
          On Zero down payment
        </Text>
        <Flex justifyContent="space-between" m={5} mt={-5}>
          <Button
            rightIcon={<ArrowForwardIcon />}
            color="blue"
            variant="unstyled"
          >
            CHECK ELIGIBILITY
          </Button>
          <Button
            rightIcon={<ArrowForwardIcon />}
            color="blue"
            variant="unstyled"
          >
            UNDERSTAND PRICE
          </Button>
        </Flex>
        <Button m={6} mt={-4} variant="solid" colorScheme="orange">
          BOOK FREE TEST DRIVE
        </Button>
      </CardBody>
    </Card>
    //   {/* Second card End */}
  );
}

export default SecondCard;
