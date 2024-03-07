import { useState } from 'react';
import { Container, Box, Text } from '@chakra-ui/react';
import ThreeSixty from "react-360-view";
import { Card, Flex } from '@chakra-ui/react'
import Exterior from '../Img_UI/Exterior.webp';
import Interior from '../Img_UI/Interior.webp';
import Features from '../Img_UI/Features.webp';
import Tyres from '../Img_UI/Tyres.webp';
import Engine from '../Img_UI/Engine.webp';


import i1 from '../Img_UI/Interior_Img/i1.webp';
import i2 from '../Img_UI/Interior_Img/i2.webp';
import i3 from '../Img_UI/Interior_Img/i3.webp';
import i4 from '../Img_UI/Interior_Img/i4.webp';
import i5 from '../Img_UI/Interior_Img/i5.webp';
import i6 from '../Img_UI/Interior_Img/i6.webp';


import e1 from '../Img_UI/Exterior_Img/e1.webp';
import e2 from '../Img_UI/Exterior_Img/e2.webp';
import e3 from '../Img_UI/Exterior_Img/e3.webp';
import e4 from '../Img_UI/Exterior_Img/e4.webp';
import e5 from '../Img_UI/Exterior_Img/e5.webp';
import e6 from '../Img_UI/Exterior_Img/e6.webp';


import f1 from '../Img_UI/Features_Img/f1.webp';
import f2 from '../Img_UI/Features_Img/f2.webp';
import f3 from '../Img_UI/Features_Img/f3.webp';


import t1 from '../Img_UI/Tyres_Img/t1.webp';
import t2 from '../Img_UI/Tyres_Img/t2.webp';
import t3 from '../Img_UI/Tyres_Img/t3.webp';
import t4 from '../Img_UI/Tyres_Img/t4.webp';
import t5 from '../Img_UI/Tyres_Img/t5.webp';


import en1 from '../Img_UI/Engines_Img/en1.webp';
import en2 from '../Img_UI/Engines_Img/en2.webp';
import en3 from '../Img_UI/Engines_Img/en3.webp';


import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import KnowYourCar from './KnowYourCar';
import InspectionReport from './InspectionReport';
import TopFeatures from './TopFeatures';
import SecondCard from './SecondCard';
// import SecondCard from './SecondCard';

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
          srcImg: "images-red/images-red-1/",
        },
        // {
        //   idWheel: 2,
        //   srcImg: "images-black/images-black-2/",
        // },
        // {
        //   idWheel: 3,
        //   srcImg: "images-black/images-black-3/",
        // },
      ],
    },
  ]);

  const [img360, setImg360] = useState(true);
  const [interior, setInterior] = useState(false);
  const [exterior, setExterior] = useState(false);
  const [features, setFeatures] = useState(false);
  const [tyres, setTyres] = useState(false);
  const [engines, setEngines] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const interiorImages = [
    i1,
    i2,
    i3,
    i4,
    i5,
    i6
  ];

  const exteriorImages = [
    e1,
    e2,
    e3,
    e4,
    e5,
    e6
  ];

  const featuresImages = [
    f1,
    f2,
    f3,
  ];

  const tyresImages = [
    t1,
    t2,
    t3,
    t4,
    t5,
  ];

  const enginesImages = [
    en1,
    en2,
    en3,
  ];

  const renderImagesCarousel = (imagesArray) => {
    return (
      <Carousel>
        {imagesArray.map((imageUrl, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={imageUrl}
              alt={`Image ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };

  const ChooseCarColor = () => {
    return (
      <Container maxW="container.xl" mt={10}>
        {img360 && (
          <Card maxW='md' mb={5} mx="auto">
            <Flex justifyContent="center">
              <Box className="row">
                <Box className="col-7">
                  <Box className="car">
                    <Box id="carDefault" width={{ base: '30rem', md: "30rem" }} mx="auto">
                      <ThreeSixty
                        amount={8}
                        imagePath={`./img/images-red/images-red-1/`}
                        fileName="civic-{index}.jpg"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Card>
        )}

        {interior && (<Container>
          <Card>
            <Carousel>
              {interiorImages.map((imageUrl, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={imageUrl}
                    alt={`Interior Image ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Card>
        </Container>)}

        {exterior && (<Container>
          <Card>
            <Carousel>
              {exteriorImages.map((imageUrl, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={imageUrl}
                    alt={`Exterior Image ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Card>
        </Container>)}

        {features && (<Container>
          <Card>
            <Carousel>
              {featuresImages.map((imageUrl, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={imageUrl}
                    alt={`Features Image ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Card>
        </Container>)}

        {tyres && (<Container>
          <Card>
            <Carousel>
              {tyresImages.map((imageUrl, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={imageUrl}
                    alt={`Tyres Image ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Card>
        </Container>)}

        {engines && (<Container>
          <Card>
            <Carousel>
              {enginesImages.map((imageUrl, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={imageUrl}
                    alt={`Engines Image ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Card>
        </Container>)}

      </Container>
    );
  };

  return (
    <Container maxW="container.xl" mt={20}>
      <Flex direction={{ base: "column", md: "row" }} justifyContent="space-between">
        {/* <Flex justifyContent="space-between"> */}
        <Card maxW={{ base: '95%', md: 'lg' }} mx="auto" mb={5}>
          <Box flex="1">
            <ChooseCarColor />
          </Box>
          <Flex gap={8} m={5} mb={10} overflowX="auto" css={{ "&::-webkit-scrollbar": { display: "flex" } }}>
            <Box
              mb={8}
              p={2}
              borderRadius="lg"
              backgroundImage={`url(${Engine})`}
              backgroundSize="cover"
              backgroundPosition="center"
              color="white"
              height={'20'}
              width={'28'}
              onClick={() => { setImg360(true); setInterior(false); setExterior(false); setFeatures(false); setTyres(false); setEngines(false) }}
            >
              <Text alignItems={'center'} fontWeight={'bold'}>IMAGE360</Text>
            </Box>
            <Box
              mb={8}
              p={2}
              borderRadius="lg"
              backgroundImage={`url(${Exterior})`}
              backgroundSize="cover"
              backgroundPosition="center"
              color="white"
              height={'20'}
              width={'28'}
              onClick={() => { setImg360(false); setInterior(false); setExterior(true); setFeatures(false); setTyres(false); setEngines(false) }}
            >
              <Text alignItems={'center'} fontWeight={'bold'} >EXTERIOR</Text>
            </Box>
            <Box
              mb={8}
              p={2}
              borderRadius="lg"
              backgroundImage={`url(${Interior})`}
              backgroundSize="cover"
              backgroundPosition="center"
              color="white"
              height={'20'}
              width={'28'}
              onClick={() => { setImg360(false); setInterior(true); setExterior(false); setFeatures(false); setTyres(false); setEngines(false) }}
            >
              <Text alignItems={'center'} fontWeight={'bold'} >INTERIOR</Text>
            </Box>
            <Box
              mb={8}
              p={2}
              borderRadius="lg"
              backgroundImage={`url(${Features})`}
              backgroundSize="cover"
              backgroundPosition="center"
              color="white"
              height={'20'}
              width={'28'}
              onClick={() => { setImg360(false); setInterior(false); setExterior(false); setFeatures(true); setTyres(false); setEngines(false) }}
            >
              <Text alignItems={'center'} fontWeight={'bold'}>FEATURES</Text>
            </Box>
            <Box
              mb={8}
              p={2}
              borderRadius="lg"
              backgroundImage={`url(${Tyres})`}
              backgroundSize="cover"
              backgroundPosition="center"
              color="white"
              height={'20'}
              width={'28'}
              onClick={() => { setImg360(false); setInterior(false); setExterior(false); setFeatures(false); setTyres(true); setEngines(false) }}
            >
              <Text alignItems={'center'} fontWeight={'bold'}>TYRES</Text>
            </Box>
            <Box
              mb={8}
              p={2}
              borderRadius="lg"
              backgroundImage={`url(${Engine})`}
              backgroundSize="cover"
              backgroundPosition="center"
              color="white"
              height={'20'}
              width={'28'}
              onClick={() => { setImg360(false); setInterior(false); setExterior(false); setFeatures(false); setTyres(false); setEngines(true) }}
            >
              <Text alignItems={'center'} fontWeight={'bold'}>ENGINES</Text>
            </Box>
          </Flex>
        </Card>

        {/* Second Card */}
        <SecondCard />
        {/* Second card End */}

      </Flex>

      <KnowYourCar />

      <InspectionReport />

      <TopFeatures />

    </Container>
  )
};

export default CarDetail1;
