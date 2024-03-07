import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Heading,
    Image,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import { Link } from "react-router-dom";
  import { useGetAllCarsQuery,useFilterCarQuery } from "../../api/carApiSlice.js";
  
  export default function CarList1({ area ,index}) {
    const [currentPage, setCurrentPage] = React.useState(0);
    const { data } = useGetAllCarsQuery(currentPage);
    const { data: data1 , error, isLoading } = useFilterCarQuery({
      currentPage: 0,
      area: area,
     
    });
    

    // console.log("Filter Query Params:", {
    //   currentPage: 0,
    //   year: 2000,
    //   minPrice: 100,
    //   maxPrice: 500,
    //   area: area,
    //   transmission: "Auto",
    //   fuelType: "Petrol",
    //   brand: "tata",
    //   model: 800,
    // });

    if (isLoading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      console.error("Error fetching filtered data:", error);
      return <p>Error: {error.status}</p>; // Display the error status from the API
    }

    const CarDetails = data ? data.list : []

    console.log(CarDetails)

  //  const filteredData = CarDetails.filter(car => car.year === String(year));
    const filteredData = data1 ? data1.list : []

    console.log( "Filter Data :- ",filteredData)
    console.log(area)

    return (
     <div> 
      { area == "" ? ( <Card maxW="sm" style={{maxWidth : "20rem", marginBottom : "15px"  }} key={index}>
            <CardBody>
              {index + 1}
              <Image
                src="https://imgd.aeplcdn.com/1200x900/n/cw/ec/40087/thar-exterior-right-front-three-quarter-35.jpeg?isig=0&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">
                  {CarDetails.year} {CarDetails.brand} {CarDetails.model}
                </Heading>
                <Text>
                  {CarDetails.kmDriven} {CarDetails.fuelType}{" "}
                  {CarDetails.transmission}
                </Text>
                <Text color="blue.600" fontSize="lg">
                  ₹{CarDetails.price}
                </Text>
                <Text color="blue.600" fontSize="lg">
                  EMIs from ₹2000/month
                </Text>
                <Text color="blue.600" fontSize="lg">
                  Free Test Drive {CarDetails.area}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button
                  color={"green.400"}
                  bg={"green.500"}
                  textColor={"white"}
                  className="listbtn"
                >
                  <Link to={`/carDetails/${CarDetails.carId}`}>
                    View Details{" "}
                    <i
                      className="fa fa-arrow-circle-right"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>) : ( filteredData.length > 0 ? (filteredData.map ((list) =>(
          <Card maxW="sm" style={{maxWidth : "20rem", marginBottom : "15px"  }} >
          <CardBody>
          {index}
            <Image
              src="https://imgd.aeplcdn.com/1200x900/n/cw/ec/40087/thar-exterior-right-front-three-quarter-35.jpeg?isig=0&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">
                {list.year} {list.brand} {list.model}
              </Heading>
              <Text>
                {list.kmDriven} {list.fuelType}{" "}
                {list.transmission}
              </Text>
              <Text color="blue.600" fontSize="lg">
                ₹{list.price}
              </Text>
              <Text color="blue.600" fontSize="lg">
                EMIs from ₹2000/month
              </Text>
              <Text color="blue.600" fontSize="lg">
                Free Test Drive {list.area}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button
                color={"green.400"}
                bg={"green.500"}
                textColor={"white"}
                className="listbtn"
              >
                <Link to={`/carDetails/${CarDetails.carId}`}>
                  View Details{" "}
                  <i
                    className="fa fa-arrow-circle-right"
                    aria-hidden="true"
                  ></i>
                </Link>
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>))
          
        ) : (
          // Display a message or handle the case when no data is found
          <p>No matching data found for the specified year.</p>
        ))}
         
          </div>
    );
  }
  