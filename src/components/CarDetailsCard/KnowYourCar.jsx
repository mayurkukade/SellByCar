import React from "react";
import {
  Card,
  Box,
  Text,
  Flex,
  Stack,
  Image,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";

const KnowYourCar = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const borderColor = useColorModeValue("gray.300", "gray.600");

  return (
    <>
      <Text fontSize="xx-large" fontWeight="600" p={4}>
        Know your car
      </Text>
      <Card bg={bgColor} borderRadius="30px" position="initial">
        <Box p={7}>
          <Flex direction="column">
            <Stack direction="row" alignItems="center" spacing={4}>
              <Box
                p={4}
                mb={5}
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
                <Text fontSize="larger" fontWeight="500">
                  Top Model
                </Text>
                <Text>
                  Top variant that is equipped <br /> with all features of the
                  model
                </Text>
              </Box>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={4}>
              <Box
                p={4}
                mb={5}
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
                <Text fontSize="larger" fontWeight="500">
                  Alloy Wheels
                </Text>
                <Text>Drive in style with akkoy wheels</Text>
              </Box>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={4}>
              <Box
                p={4}
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
                <Text fontSize="larger" fontWeight="500">
                  Reagular Serviced
                </Text>
                <Text>Serviced every 10000km at authorised service center</Text>
              </Box>
            </Stack>
          </Flex>
          <Flex justifyContent="space-between" mt={8}>
            <Stack direction="column" alignItems="center" spacing={4}>
              <Box display="flex" gap={1} alignItems="center">
                <Image
                  src="./src/components/CarDetailsCard/calendar.svg"
                  alt=""
                  w="30px"
                  h="30px"
                />
                <Text>Reg Year:</Text>
              </Box>
              <Text
                fontWeight="600"
                p={3}
                bg={borderColor}
                borderRadius="20px"
                display="flex"
                alignItems="center"
              >
                Mar 2012
              </Text>
            </Stack>
            <Stack direction="column" alignItems="center" spacing={4}>
              <Box display="flex" gap={1} alignItems="center">
                <Image
                  src="./src/components/CarDetailsCard/calendar.svg"
                  alt=""
                  w="30px"
                  h="30px"
                />
                <Text>Reg Year:</Text>
              </Box>
              <Text
                fontWeight="600"
                p={3}
                bg={borderColor}
                borderRadius="20px"
                display="flex"
                alignItems="center"
              >
                Mar 2012
              </Text>
            </Stack>
            <Stack direction="column" alignItems="center" spacing={4}>
              <Box display="flex" gap={1} alignItems="center">
                <Image
                  src="./src/components/CarDetailsCard/calendar.svg"
                  alt=""
                  w="30px"
                  h="30px"
                />
                <Text>Reg Year:</Text>
              </Box>
              <Text
                fontWeight="600"
                p={3}
                bg={borderColor}
                borderRadius="20px"
                display="flex"
                alignItems="center"
              >
                Mar 2012
              </Text>
            </Stack>
          </Flex>
          <Flex justifyContent="space-between" mt={8}>
            <Stack direction="column" alignItems="center" spacing={4}>
              <Box display="flex" gap={1} alignItems="center">
                <Image
                  src="./src/components/CarDetailsCard/calendar.svg"
                  alt=""
                  w="30px"
                  h="30px"
                />
                <Text>Reg Year:</Text>
              </Box>
              <Text
                fontWeight="600"
                p={3}
                bg={borderColor}
                borderRadius="20px"
                display="flex"
                alignItems="center"
              >
                Mar 2012
              </Text>
            </Stack>
            <Stack direction="column" alignItems="center" spacing={4}>
              <Box display="flex" gap={1} alignItems="center">
                <Image
                  src="./src/components/CarDetailsCard/calendar.svg"
                  alt=""
                  w="30px"
                  h="30px"
                />
                <Text>Reg Year:</Text>
              </Box>
              <Text
                fontWeight="600"
                p={3}
                bg={borderColor}
                borderRadius="20px"
                display="flex"
                alignItems="center"
              >
                Mar 2012
              </Text>
            </Stack>
            <Stack direction="column" alignItems="center" spacing={4}>
              <Box display="flex" gap={1} alignItems="center">
                <Image
                  src="./src/components/CarDetailsCard/calendar.svg"
                  alt=""
                  w="30px"
                  h="30px"
                />
                <Text>Reg Year:</Text>
              </Box>
              <Text
                fontWeight="600"
                p={3}
                bg={borderColor}
                borderRadius="20px"
                display="flex"
                alignItems="center"
              >
                Mar 2012
              </Text>
            </Stack>
          </Flex>
          <Flex justifyContent="space-between" mt={8}>
            <Stack direction="column" alignItems="center" spacing={4}>
              <Box display="flex" gap={1} alignItems="center">
                <Image
                  src="./src/components/CarDetailsCard/calendar.svg"
                  alt=""
                  w="30px"
                  h="30px"
                />
                <Text>Reg Year:</Text>
              </Box>
              <Text
                fontWeight="600"
                p={3}
                bg={borderColor}
                borderRadius="20px"
                display="flex"
                alignItems="center"
              >
                Mar 2012
              </Text>
            </Stack>
            <Stack direction="column" alignItems="center" spacing={4}>
              <Box display="flex" gap={1} alignItems="center">
                <Image
                  src="./src/components/CarDetailsCard/calendar.svg"
                  alt=""
                  w="30px"
                  h="30px"
                />
                <Text>Reg Year:</Text>
              </Box>
              <Text
                fontWeight="600"
                p={3}
                bg={borderColor}
                borderRadius="20px"
                display="flex"
                alignItems="center"
              >
                Mar 2012
              </Text>
            </Stack>
            <Stack direction="column" alignItems="center" spacing={4}>
              <Box display="flex" gap={1} alignItems="center">
                <Image
                  src="./src/components/CarDetailsCard/calendar.svg"
                  alt=""
                  w="30px"
                  h="30px"
                />
                <Text>Reg Year:</Text>
              </Box>
              <Text
                fontWeight="600"
                p={3}
                bg={borderColor}
                borderRadius="20px"
                display="flex"
                alignItems="center"
              >
                Mar 2012
              </Text>
            </Stack>
          </Flex>
        </Box>
      </Card>
    </>
  );
};

export default KnowYourCar;
