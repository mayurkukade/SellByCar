import {
    Card,
    Box,
    Text,
    Flex,
    Stack,
    // Image,
    useColorModeValue,
} from "@chakra-ui/react";
import { FaMedal } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

function KnowYourCar() {
    const bgColor = useColorModeValue("gray.100", "gray.700");
    const borderColor = useColorModeValue("gray.300", "gray.600");
    return (
        <div>
            <Text fontSize="xx-large" fontWeight="600" p={4}>
                Know your car
            </Text>
            <Card maxW='xl' bg={bgColor} borderRadius="30px" position="initial">
                <Box p={7}>
                    <Flex direction="row" gap={5}>
                        <Stack direction="row" alignItems="center">
                            <Box
                                p={4}
                                mb={5}
                                bg={borderColor}
                                borderRadius="20px"
                                display="flex"
                                alignItems="center"
                            >
                                <FaMedal />
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
                        <Stack direction="row" alignItems="center">
                            <Box
                                p={4}
                                mb={5}
                                bg={borderColor}
                                borderRadius="20px"
                                display="flex"
                                alignItems="center"
                            >
                                <FaMedal />
                            </Box>
                            <Box>
                                <Text fontSize="larger" fontWeight="500">
                                    Alloy Wheels
                                </Text>
                                <Text>Drive in style with akkoy wheels</Text>
                            </Box>
                        </Stack>
                    </Flex>
                    <Stack direction="row" alignItems="center" my={5}>
                        <Box
                            p={4}
                            bg={borderColor}
                            borderRadius="20px"
                            display="flex"
                            alignItems="center"
                        >
                            <FaMedal />
                        </Box>
                        <Box>
                            <Text fontSize="larger" fontWeight="500">
                                Reagular Serviced
                            </Text>
                            <Text>Serviced every 10000 KM at authorised service center</Text>
                        </Box>
                    </Stack>
                    <Flex justifyContent="space-between" mt={8}>
                        <Stack direction="column" alignItems="center" spacing={4}>
                            <Box display="flex" gap={1} alignItems="center">
                                <SlCalender />
                                <Text mt={3}>Reg Year:</Text>
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
                                <SlCalender />
                                <Text mt={3}>Reg Year:</Text>
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
                                <SlCalender />
                                <Text mt={3}>Reg Year:</Text>
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
                                <SlCalender />
                                <Text mt={3}>Reg Year:</Text>
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
                                <SlCalender />
                                <Text mt={3}>Reg Year:</Text>
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
                                <SlCalender />
                                <Text mt={3}>Reg Year:</Text>
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
                                <SlCalender />
                                <Text mt={3}>Reg Year:</Text>
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
                                <SlCalender />
                                <Text mt={3}>Reg Year:</Text>
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
                                <SlCalender />
                                <Text mt={3}>Reg Year:</Text>
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
        </div>
    )
}

export default KnowYourCar
