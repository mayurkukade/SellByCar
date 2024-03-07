// import React from 'react'
import { CardBody, Divider, Button, Badge, Card, Box, Text, Flex } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { RxHome } from "react-icons/rx";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { RxFileText } from "react-icons/rx";
import { FaWhatsapp } from 'react-icons/fa';

function SecondCard() {
  return (
    <Card maxW='md' mb={5} mx="auto" position=''>
          <CardBody>
            <Box textAlign="center">
              <Text fontSize={30} fontWeight='bold'>2013 Honda Civics</Text>
              <Box mt={5}>
                <Text fontSize={20}>AMBITION 1.6 MPI MTManual</Text>
              </Box>
            </Box>
            <Flex direction={{ base: "column", md: "row" }} gap={{ base: 2, md: 5 }} textAlign={'center'} justifyContent={'center'} >
              <Badge colorScheme='gray' fontSize={{ base: 'md', md: 'lg' }}>96,953 KM</Badge>
              <Badge colorScheme='gray' fontSize={{ base: 'md', md: 'lg' }}>2ND OWNER</Badge>
              <Badge colorScheme='gray' fontSize={{ base: 'md', md: 'lg' }}>PETROL</Badge>
              <Badge colorScheme='gray' fontSize={{ base: 'md', md: 'lg' }}>MH-04</Badge>
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
          </CardBody>
          <Box>
            <Divider />
          </Box>
          <Flex justifyContent="space-between" m={6} mt={1}>
            <Text color='orange' fontWeight='bold' fontSize='20'>₹7,979/month</Text>
            <Text color='black' fontWeight='bold' fontSize='20'>₹3.03 Lakh</Text>
          </Flex>
          <Text fontWeight='bold' m={6} mt={1}>On Zero down payment</Text>
          <Flex justifyContent="space-between" m={5} mt={-5}>
            <Button rightIcon={<ArrowForwardIcon />} color='blue' variant='unstyled'>
              CHECK ELIGIBILITY
            </Button>
            <Button rightIcon={<ArrowForwardIcon />} color='blue' variant='unstyled'>
              UNDERSTAND PRICE
            </Button>
          </Flex>
          <Button m={6} mt={-4} variant='solid' colorScheme='orange'>
            BOOK FREE TEST DRIVE
          </Button>
        </Card>
  )
}

export default SecondCard
