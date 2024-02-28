import { useState } from 'react';
import { Container, Heading, Box, Text, List, ListItem, Image } from '@chakra-ui/react';
import ThreeSixty from "react-360-view";

const CarDetail1 = () => {
  const [carList] = useState([
    {
      id: 1,
      title: "Crystal Black",
      type: "Pearl",
      img: "./images/icons/icon-black.jpg",
      srcImg: "images-black/images-black-1/",
      color: "Black",
      price: "19,550",
      engineType: "In-Line 4-Cylinder",
      displacement: "1996 cc",
      horsepower: "158 @ 6500 rpm",
      torque: "138 lb-ft @ 4200 rpm",
      redline: "6700 rpm",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images-black/images-black-1/",
        },
        {
          idWheel: 2,
          srcImg: "images-black/images-black-2/",
        },
        {
          idWheel: 3,
          srcImg: "images-black/images-black-3/",
        },
      ],
    },
    // Other car data...
  ]);

  const renderCarList = (id) => {
    const car = carList.find((car) => car.id === id);
    if (!car) return null;
    return (
      <Box className="car-details">
        <Heading as="h2" className="car-title">{car.title}</Heading>
        <Box className="car-info" display="flex">
          <Box>
            <img src={car.img} alt={car.title} className="mb-50" />
          </Box>
        </Box>
      </Box>
    );
  };

  const ChooseCarColor = () => {
    const [state, setState] = useState({
      imgSrc: "images-black/images-black-1/",
      id: 1,
      w1: "w1",
      w2: "w2",
      w3: "w3",
      flag: 0,
      logID: "",
      logWID: "w1",
      wFlag: 0,
    });

    // Rest of the code from the ChooseCarColor component...
    const renderCarList = (id) => {
        return carList
          .filter((car) => car.id === id)
          .map((car, index) => {
            return (
              <Box as="table" className="table table-bordered" key={index}>
              </Box>
            );
          });
      };
    
      const handleChangeColor = (cid) => {
        const { id, flag, logID, logWID } = state;
        setState({
          ...state,
          id: cid,
        });
      };
    
      const renderCar360 = () => {
        return carList.map((car) => {
          return (
            <Box key={car.id} className="carContent" id={`c${car.id}`} style={{ display: "none" }}>
            </Box>
          );
        });
      };
    
      const renderCarWheel360 = () => {
        let id = 0;
        return carList.map((car) => {
          return car.wheels.map((wheel) => {
            id++;
          });
        });
      };
    
      return (
        
        <Container maxW="container.xl" >
          <Box className="row">
            <Box className="col-7">
              <Box className="car">
                {renderCar360()}
                {renderCarWheel360()}
                <Box id="carDefault">
                  <ThreeSixty
                    amount={8}
                    imagePath={`./img/images-black/images-black-1/`}
                    fileName="civic-{index}.jpg"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      );
  };

  return (
    <Container maxW="container.lg">
      {/* <Heading as="h1" textAlign="center">Car Detail</Heading> */}
      {renderCarList(1)} 
      <ChooseCarColor />
    </Container>
  );
  {/* Second Card */}
            <Card maxW='md' mb={5}>
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
            {/* Second card End */}
};

export default CarDetail1;
