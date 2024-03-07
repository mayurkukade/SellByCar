// Carousel Bootstrap CarDetails page

import { useState } from "react";
import { Container, Box, Text, Center } from "@chakra-ui/react";
import ThreeSixty from "react-360-view";
import { Card, Flex } from "@chakra-ui/react";
import Exterior from "../Img_UI/Exterior.webp";
import Interior from "../Img_UI/Interior.webp";
import Features from "../Img_UI/Features.webp";
import Tyres from "../Img_UI/Tyres.webp";
import Engine from "../Img_UI/Engine.webp";

import i1 from "../Img_UI/Interior_Img/i1.webp";
import i2 from "../Img_UI/Interior_Img/i2.webp";
import i3 from "../Img_UI/Interior_Img/i3.webp";
import i4 from "../Img_UI/Interior_Img/i4.webp";
import i5 from "../Img_UI/Interior_Img/i5.webp";
import i6 from "../Img_UI/Interior_Img/i6.webp";

import e1 from "../Img_UI/Exterior_Img/e1.webp";
import e2 from "../Img_UI/Exterior_Img/e2.webp";
import e3 from "../Img_UI/Exterior_Img/e3.webp";
import e4 from "../Img_UI/Exterior_Img/e4.webp";
import e5 from "../Img_UI/Exterior_Img/e5.webp";
import e6 from "../Img_UI/Exterior_Img/e6.webp";

import f1 from "../Img_UI/Features_Img/f1.webp";
import f2 from "../Img_UI/Features_Img/f2.webp";
import f3 from "../Img_UI/Features_Img/f3.webp";

import t1 from "../Img_UI/Tyres_Img/t1.webp";
import t2 from "../Img_UI/Tyres_Img/t2.webp";
import t3 from "../Img_UI/Tyres_Img/t3.webp";
import t4 from "../Img_UI/Tyres_Img/t4.webp";
import t5 from "../Img_UI/Tyres_Img/t5.webp";

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SecondCard from "./SecondCard";
import KnowYourCar from "../CarDetailsCard/KnowYourCar";
import InspectionReport from "../CarDetailsCard/InspectionReport";
import TopFeatures from "../CarDetailsCard/TopFeatures";

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

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const interiorImages = [i1, i2, i3, i4, i5, i6];
  const exteriorImages = [e1, e2, e3, e4, e5, e6];
  const featuresImages = [f1, f2, f3];
  const tyresImages = [t1, t2, t3, t4, t5];

  const renderInteriorImages = () => {
    return interiorImages.map((imageUrl, index) => (
      <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={imageUrl}
          alt={`Interior Image ${index + 1}`}
        />
      </Carousel.Item>
    ));
  };

  const renderExteriorImages = () => {
    return exteriorImages.map((imageUrl, index) => (
      <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={imageUrl}
          alt={`Exterior Image ${index + 1}`}
        />
      </Carousel.Item>
    ));
  };

  const renderFeaturesImages = () => {
    return featuresImages.map((imageUrl, index) => (
      <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={imageUrl}
          alt={`Features Image ${index + 1}`}
        />
      </Carousel.Item>
    ));
  };

  const renderTyresImages = () => {
    return tyresImages.map((imageUrl, index) => (
      <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={imageUrl}
          alt={`Tyres Image ${index + 1}`}
        />
      </Carousel.Item>
    ));
  };

  const ChooseCarColor = () => {
    return (
        <Container maxW="container.2xl">
          {img360 && (
            <Card maxW="2xl" mb={5}>
              {/* <CardBody> */}
              <Box className="row">
                <Box className="col-7">
                  <Box className="car">
                    <Box id="carDefault" width={510}>
                      <ThreeSixty
                        amount={8}
                        imagePath={`./img/images-red/images-red-1/`}
                        fileName="civic-{index}.jpg"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* </CardBody> */}
            </Card>
          )}
          {interior && (
            <Container>
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
            </Container>
          )}
          {exterior && (
            <Container>
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
            </Container>
          )}
          {features && (
            <Container>
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
            </Container>
          )}
          {tyres && (
            <Container>
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
            </Container>
          )}
        </Container>
    );
  };

  return (
    <Container maxW="container.xl" style={{width:"100%",margin:"2%"}} mt={20}>
      <Flex justifyContent="center">
        <Card maxW="2xl" mb={5}>
          <Box flex="1">
            <ChooseCarColor />
          </Box>
          <Flex
            gap={8}
            mb={10}
            overflowX="auto"
            css={{ "&::-webkit-scrollbar": { display: "flex" } }}
          >
            <Box
              p={2}
              borderRadius="lg"
              backgroundImage={`url(${Engine})`}
              backgroundSize="cover"
              backgroundPosition="center"
              color="white"
              height={"16"}
              width={"28"}
              onClick={() => {
                setImg360(true);
                setInterior(false);
                setExterior(false);
                setFeatures(false);
                setTyres(false);
              }}
            >
              <Text alignItems={"center"} fontWeight={"bold"}>
                IMAGE360
              </Text>
            </Box>
            <Box
              p={2}
              borderRadius="lg"
              backgroundImage={`url(${Exterior})`}
              backgroundSize="cover"
              backgroundPosition="center"
              color="white"
              height={"16"}
              width={"28"}
              onClick={() => {
                setImg360(false);
                setInterior(false);
                setExterior(true);
                setFeatures(false);
                setTyres(false);
              }}
            >
              <Text alignItems={"center"} fontWeight={"bold"}>
                EXTERIOR
              </Text>
            </Box>
            <Box
              p={2}
              borderRadius="lg"
              backgroundImage={`url(${Interior})`}
              backgroundSize="cover"
              backgroundPosition="center"
              color="white"
              height={"16"}
              width={"28"}
              onClick={() => {
                setImg360(false);
                setInterior(true);
                setExterior(false);
                setFeatures(false);
                setTyres(false);
              }}
            >
              <Text alignItems={"center"} fontWeight={"bold"}>
                INTERIOR
              </Text>
            </Box>
            <Box
              p={2}
              borderRadius="lg"
              backgroundImage={`url(${Features})`}
              backgroundSize="cover"
              backgroundPosition="center"
              color="white"
              height={"16"}
              width={"28"}
              onClick={() => {
                setImg360(false);
                setInterior(false);
                setExterior(false);
                setFeatures(true);
                setTyres(false);
              }}
            >
              <Text alignItems={"center"} fontWeight={"bold"}>
                FEATURES
              </Text>
            </Box>
            <Box
              p={2}
              borderRadius="lg"
              backgroundImage={`url(${Tyres})`}
              backgroundSize="cover"
              backgroundPosition="center"
              color="white"
              height={"16"}
              width={"28"}
              onClick={() => {
                setImg360(false);
                setInterior(false);
                setExterior(false);
                setFeatures(false);
                setTyres(true);
              }}
            >
              <Text alignItems={"center"} fontWeight={"bold"}>
                TYRES
              </Text>
            </Box>
            <Box
              p={2}
              borderRadius="lg"
              backgroundImage={`url(${Engine})`}
              backgroundSize="cover"
              backgroundPosition="center"
              color="white"
              height={"16"}
              width={"28"}
            >
              <Text alignItems={"center"} fontWeight={"bold"}>
                ENGINES
              </Text>
            </Box>
          </Flex>
          <KnowYourCar/>
          <InspectionReport/>
          <TopFeatures/>
        </Card>

        {/* Second Card */}
        <SecondCard />
        {/* Second card End */}
      </Flex>
    </Container>
  );
};

export default CarDetail1;
