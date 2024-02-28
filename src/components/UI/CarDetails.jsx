// import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Flex, Box } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { RxHome } from "react-icons/rx";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { RxFileText } from "react-icons/rx";
import { FaWhatsapp } from 'react-icons/fa';

function CarDetails() {
    return (
        <Flex justify="center" gap={8}>

            {/* First Card */}

            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Living room Sofa</Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            $450
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Buy now
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            Add to cart
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>

            {/* First card End */}

            {/* Second Card */}

            <Card maxW='md'>
                <CardBody>
                    <Box>
                        <Text fontSize={30} fontWeight='bold'>2013 Skoda Rapid</Text>
                        <Box mt={5}> {/* Adjust the margin top value as needed */}
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
                    <Flex gap={4} flexDirection="row">
                        <Box mt={5} mb={4}>
                            <RxHome />
                        </Box>
                        <Text mt={4} mb={4}>Home Test Drive Available</Text>
                    </Flex>
                    <Flex gap={4} flexDirection="row">
                        <Box >
                            <FaMapMarkerAlt />
                        </Box>
                        <Text mb={4}>Parked at: Goregaon, Mumbai</Text>
                    </Flex>
                    <Flex gap={4} flexDirection="row">
                        <Box >
                            <RxFileText />
                        </Box>
                        <Text mb={4}>View Inspection Report</Text>
                    </Flex>
                    <Flex gap={4} flexDirection="row">
                        <Box >
                            <FaWhatsapp />
                        </Box>
                        <Text mb={4}>Get Service History Report</Text>
                    </Flex>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Living room Sofa</Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            $450
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <Flex gap={52}>
                    <Text color='orange' fontWeight='bold' fontSize='20'>₹7,979/month</Text>
                    <Text color='black' fontWeight='bold' fontSize='20'>₹3.03 Lakh</Text>
                </Flex>
                <Text fontWeight='bold'>On Zero down payment</Text>
                <Flex gap={12}>
                    <Button rightIcon={<ArrowForwardIcon />} colorScheme='blue' variant='outline'>
                        CHECK ELIGIBILITY
                    </Button>
                    <Button rightIcon={<ArrowForwardIcon />} colorScheme='blue' variant='outline'>
                        UNDERSTAND PRICE
                    </Button>
                </Flex>
                <Button variant='solid' colorScheme='orange'>
                    BOOK FREE TEST DRIVE
                </Button>
            </Card>

            {/* Second card End */}

        </Flex>
    )
}

export default CarDetails
