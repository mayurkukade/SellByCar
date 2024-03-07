import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Flex,
  Text,
  CardFooter,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const TopFeatures = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const borderColor = useColorModeValue("gray.300", "gray.600");
  return (
    <>
      <Text fontSize="xx-large" fontWeight="600" pt={10}>
        Top Features
      </Text>
      <Card
        mt={5}
        bg={bgColor}
        borderRadius="30px"
        position="initial"
        width="100%"
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          m={6}
          borderRadius={20}
          maxW={{ base: "100%", sm: "300px" }}
          src="./src/components/CarDetailsCard/Stearing.jpg"
          alt="Car"
        />

        <Stack>
          <CardBody>
            <Flex alignItems="center" textAlign="center" gap={5}>
              <i className="fa-solid fa-stroopwafel fa-xl"></i>
              <Text fontSize="lg" pt={2}>
                Steering Mounted Controls
              </Text>
            </Flex>
            <Flex alignItems="center" textAlign="center" gap={5}>
              <i className="fa-solid fa-stroopwafel fa-xl"></i>
              <Text fontSize="lg" pt={2}>
                Steering Mounted Controls
              </Text>
            </Flex>
            <Flex alignItems="center" textAlign="center" gap={5}>
              <i className="fa-solid fa-stroopwafel fa-xl"></i>
              <Text fontSize="lg" pt={2}>
                Steering Mounted Controls
              </Text>
            </Flex>
            <Flex alignItems="center" textAlign="center" gap={5}>
              <i className="fa-solid fa-stroopwafel fa-xl"></i>
              <Text fontSize="lg" pt={2}>
                Steering Mounted Controls
              </Text>
            </Flex>
            <Flex alignItems="center" textAlign="center" gap={5}>
              <i className="fa-solid fa-stroopwafel fa-xl"></i>
              <Text fontSize="lg" pt={2}>
                Steering Mounted Controls
              </Text>
            </Flex>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="facebook">
              View All Features
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
};

export default TopFeatures;
