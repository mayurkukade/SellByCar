import React from "react";
import {
  Card,
  Box,
  Text,
  Flex,
  Stack,
  Image,
  useColorModeValue,
  Button,
  Badge
} from "@chakra-ui/react";

const InspectionReport = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const borderColor = useColorModeValue("gray.300", "gray.600");

  return (
    <>
      <Text fontSize="xx-large" fontWeight="600" p={4} mt={9}>
       Inspection Report
      </Text>
      <Card bg={bgColor} borderRadius="30px" position="initial" width="100%">
        <Box p={5}>
          <Flex direction="row" justifyContent="space-between" gap={10}>
            <Flex width="60%">
              <Text fontSize="lg">
                We aim to provide our customers with a reliable drive. Every car
                we sell is refurbished by experts at our Mega Refurbishment
                Labs.
              </Text>
            </Flex>
            <Flex direction="row" width="50%" gap={6}>
              <Stack direction="column" alignItems="center">
                <Box
                  p={1}
                  mb={1}
                  bg={borderColor}
                  borderRadius="20px"
                  display="flex"
                  alignItems="center"
                >
                  <Image
                    src="./src/components/CarDetailsCard/medal.svg"
                    alt="medal"
                    w="30px"
                    h="50px"
                  />
                </Box>
                <Box>
                  <Text fontSize="md" fontWeight="500" display="flex">
                    Top
                    <br /> Model
                  </Text>
                </Box>
              </Stack>
              <Stack direction="column" alignItems="center">
                <Box
                  p={1}
                  mb={1}
                  bg={borderColor}
                  borderRadius="20px"
                  display="flex"
                  alignItems="center"
                >
                  <Image
                    src="./src/components/CarDetailsCard/medal.svg"
                    alt="medal"
                    w="30px"
                    h="50px"
                  />
                </Box>
                <Box>
                  <Text fontSize="md" fontWeight="500">
                    Alloy
                    <br /> Wheels
                  </Text>
                </Box>
              </Stack>
              <Stack direction="column" alignItems="center">
                <Box
                  p={1}
                  mb={1}
                  bg={borderColor}
                  borderRadius="20px"
                  display="flex"
                  alignItems="center"
                >
                  <Image
                    src="./src/components/CarDetailsCard/medal.svg"
                    alt="medal"
                    w="30px"
                    h="50px"
                  />
                </Box>
                <Box>
                  <Text fontSize="md" fontWeight="500">
                    Alloy
                    <br /> Wheels
                  </Text>
                </Box>
              </Stack>
              <Stack direction="column" alignItems="center">
                <Box
                  p={1}
                  mb={1}
                  bg={borderColor}
                  borderRadius="20px"
                  display="flex"
                  alignItems="center"
                >
                  <Image
                    src="./src/components/CarDetailsCard/medal.svg"
                    alt="medal"
                    w="30px"
                    h="50px"
                  />
                </Box>
                <Box>
                  <Text fontSize="md" fontWeight="500">
                    Alloy
                    <br /> Wheels
                  </Text>
                </Box>
              </Stack>
            </Flex>
          </Flex>
          <Card px={5} py={1}>
            <Flex
              alignItems="center"
              direction="row"
              justifyContent="space-between"
            >
              <Flex alignItems="center" gap={3}>
                <i className="fa-solid fa-circle-exclamation fa-xl"></i>
                <Flex fontSize="xl" fontWeight={600}>
                  Imperfections
                </Flex>
              </Flex>
              <Flex alignItems="center" gap={2}>
                <Badge colorScheme="red">24</Badge>
                <i className="fa-solid fa-angles-right"></i>
              </Flex>
            </Flex>
            <Text mt={5} fontSize="lg" fontWeight={400} textColor={"gray"}>
              Minor cosmetic imperfections are not repaired as they do not
              affect performance, and reduces the cost of ownership
            </Text>
          </Card>
          <Card px={5} py={1} mt={4}>
            <Flex
              alignItems="center"
              direction="row"
              justifyContent="space-between"
            >
              <Flex alignItems="center" gap={3}>
                <i className="fa-solid fa-circle-exclamation fa-xl"></i>
                <Flex fontSize="xl" fontWeight={600}>
                  Imperfections
                </Flex>
              </Flex>
              <Flex alignItems="center" gap={2}>
                <Badge colorScheme="red">24</Badge>
                <i className="fa-solid fa-angles-right"></i>
              </Flex>
            </Flex>
            <Text mt={5} fontSize="lg" fontWeight={400} textColor={"gray"}>
              Minor cosmetic imperfections are not repaired as they do not
              affect performance, and reduces the cost of ownership
            </Text>
          </Card>
          <Card px={5} py={1} mt={4}>
            <Flex
              alignItems="center"
              direction="row"
              justifyContent="space-between"
            >
              <Flex alignItems="center" gap={3}>
                <i className="fa-solid fa-circle-exclamation fa-xl"></i>
                <Flex fontSize="xl" fontWeight={600}>
                  Imperfections
                </Flex>
              </Flex>
              <Flex alignItems="center" gap={2}>
                <Badge colorScheme="red">24</Badge>
                <i className="fa-solid fa-angles-right"></i>
              </Flex>
            </Flex>
            <Text mt={5} fontSize="lg" fontWeight={400} textColor={"gray"}>
              Minor cosmetic imperfections are not repaired as they do not
              affect performance, and reduces the cost of ownership
            </Text>
          </Card>
          <Card px={5} py={1} mt={4}>
            <Flex
              alignItems="center"
              direction="row"
              justifyContent="space-between"
            >
              <Flex alignItems="center" gap={3}>
                <i className="fa-solid fa-circle-exclamation fa-xl"></i>
                <Flex fontSize="xl" fontWeight={600}>
                  Imperfections
                </Flex>
              </Flex>
              <Flex alignItems="center" gap={2}>
                <Badge colorScheme="red">24</Badge>
                <i className="fa-solid fa-angles-right"></i>
              </Flex>
            </Flex>
            <Text mt={5} fontSize="lg" fontWeight={400} textColor={"gray"}>
              Minor cosmetic imperfections are not repaired as they do not
              affect performance, and reduces the cost of ownership
            </Text>
          </Card>
          <Button colorScheme="facebook" marginTop={6} display="flex" justifyContent="flex-end">View Inspection Report</Button>
        </Box>
      </Card>
    </>
  );
};

export default InspectionReport;
