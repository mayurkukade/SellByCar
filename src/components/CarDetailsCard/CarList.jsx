/* eslint-disable react/prop-types */
import SubNav from "../Navbar/SubNav.jsx";
import { useState, useEffect } from "react";
import { useGetAllCarsQuery } from "../../api/carApiSlice.js";
import CardShimmer from "./CardShimmer.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import "./grid.css";
import CarList1 from "./CarList1.jsx";

const CarList = () => {
  const cardCount = 10;
  // use State for input fields
  const [inputFilter, setInputFilter] = useState({
    year: "",
    fuelType: "",
    transmission: "",
    brand: "",
    model: "",
    area: "",
    maxPrice: "",
    minPrice: "",
  });

  const onChangeFormHandler = (e) => {
    const { name, value } = e.target;
    const updatedValue =
      value === "Select Year" ||
      value === "Select Brand" ||
      value === "Fuel Type" ||
      value === "Transmission" ||
      value === "Area"
        ? ""
        : value;

    setInputFilter((previousValue) => ({
      ...previousValue,
      [name]: updatedValue,
    }));
  };

  // Display the value of 'year' in the console
  console.log(inputFilter.year);

  // form submit handler
  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   fetchData();
  // };

  const [currentPage, setCurrentPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { data } = useGetAllCarsQuery(currentPage);

  useEffect(() => {
    if (data && data.list && data.list.length > 0) {
      // Update items with the new data for the current page
      setItems((prevItems) => [...prevItems, ...data.list]);
      setIsLoading(false); // Set loading to false after updating the items
    }
  }, [data]);

  console.log("Items data", items);

  const handleFetchMore = () => {
    // Increment the page number and fetch more data with RTK Query
    if (!isLoading && hasMore) {
      // Introduce a delay using setTimeout before updating the page and fetching more data
      setTimeout(() => {
        setCurrentPage((prevPage) => prevPage + 1);
        setHasMore(false);
      }, 1500); // Adjust the delay time (in milliseconds) as needed
    }
  };
  // clear filter

  const clearFilters = () => {
    setInputFilter({
      year: "",
      fuelType: "",
      transmission: "",
      brand: "",
      model: "",
      area: "",
      maxPrice: "",
      minPrice: "",
    });
  };

  // for years
  const startYear = 2000;
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let year = startYear; year <= currentYear; year++) {
    years.push(year);
  }

  return (
    <>
      <div className="sticky">
        <SubNav componentsName={"Car List"} />
      </div>
      <div className="listpgWraper" style={{ display: "flex" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-5">
              {/* <Container > */}
              {/* SideBar start */}
              <form>
                <div
                  className="sidebar"
                  style={{ height: "var(--sidebar-height)" }}
                >
                  <div className="widget">
                    <h4 className="widget-title">Price Range</h4>

                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="number"
                          value={inputFilter.minPrice}
                          name="minPrice"
                          className="form-control"
                          placeholder="Min Value"
                          onChange={onChangeFormHandler}
                          pattern="[0-9]*"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="number"
                          name="maxPrice"
                          value={inputFilter.maxPrice}
                          className="form-control"
                          placeholder="Max Value"
                          onChange={onChangeFormHandler}
                          pattern="[0-9]*"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="widget">
                    <h4 className="widget-title">Area</h4>
                    <select
                      className="form-control"
                      name="area"
                      value={inputFilter.area}
                      onChange={onChangeFormHandler}
                    >
                      <option value="">Select Area</option>
                      <option value="Wagholi">Wagholi</option>
                      <option value="Kharadi">Kharadi</option>
                      <option value="Chandannagar">Chandannagar</option>
                      <option value="Hadapsar">Hadapsar</option>
                      <option value="Vimannagar">Vimannagar</option>
                      <option value="Pimpri">Pimpri</option>
                      <option value="Chinchwad">Chinchwad</option>
                      <option value="Dighi">Dighi</option>
                      <option value="Khadki">Khadki</option>
                    </select>
                  </div>
                  <div className="widget">
                    <h4 className="widget-title">Year </h4>
                    <select
                      className="form-control"
                      name="year"
                      value={inputFilter.year}
                      onChange={onChangeFormHandler}
                    >
                      <option>Select Year</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="widget">
                    <h4 className="widget-title">Brand</h4>
                    <select
                      className="form-control"
                      name="brand"
                      value={inputFilter.brand}
                      onChange={onChangeFormHandler}
                    >
                      <option value="">Select Brand</option>
                      <option value="Tata">Tata</option>
                      <option value="Honda">Honda</option>
                      <option value="Toyota">Toyota</option>
                      <option value="Suzuki">Suzuki</option>
                      <option value="Mahindra">Mahindra</option>
                      <option value="Hyundai">Hyundai</option>
                      <option value="Kia">Kia</option>
                    </select>
                  </div>

                  <div className="widget">
                    <h4 className="widget-title">Model</h4>
                    <input
                      type="text"
                      name="model"
                      value={inputFilter.model}
                      className="form-control"
                      placeholder="Model"
                      onChange={onChangeFormHandler}
                    />
                  </div>

                  <div className="widget">
                    <h4 className="widget-title">Fuel Type</h4>
                    <select
                      className="form-control"
                      name="fuelType"
                      value={inputFilter.fuelType}
                      onChange={onChangeFormHandler}
                    >
                      <option value="">Fuel Type</option>
                      <option value="Petrol">Petrol</option>
                      <option value="Diesel">Diesel</option>
                      <option value="Electric">Electric</option>
                    </select>
                  </div>

                  <div className="widget">
                    <h4 className="widget-title">Transmission</h4>
                    <select
                      className="form-control"
                      name="transmission"
                      value={inputFilter.transmission}
                      onChange={onChangeFormHandler}
                    >
                      <option value="">Transmission</option>
                      <option value="Automatic">Automatic</option>
                      <option value="Manual">Manual</option>
                    </select>
                  </div>

                  <div className="searchnt">
                    <button className="btn" >
                      <i className="fa fa-search" aria-hidden="true"></i> Update
                      Results
                    </button>
                    <button
                      className="btn"
                      style={{ marginTop: "20px" }}
                      onClick={clearFilters}
                    >
                      <i className="fa fa-search" aria-hidden="true"></i> Clear
                      Filter
                    </button>
                  </div>
                </div>
              </form>
              {/* SideBar end */}
            </div>

            {isLoading ? (
              <>
                {Array.from({ length: cardCount }, (_, index) => (
                  <CardShimmer key={index} />
                ))}
              </>
            ) : (
              <div style={{ display: "flex", width: "54rem" }}>
                <div className="">
                  {/* <div className="card-container" ref={cardContainerRef}> */}

                  {items === null ? (
                    <h1
                      style={{
                        display: "flex",

                        alignItems: "center",

                        justifyContent: "center",

                        minHeight: "70vh",
                      }}
                    >
                      No car Found
                    </h1>
                  ) : items.length === 0 ? (
                    <h3
                      style={{
                        display: "flex",

                        justifyContent: "center",

                        alignItems: "center",

                        height: "80vh",
                      }}
                    >
                      Something Went Wrong Can&apos;t fetch Car list
                    </h3>
                  ) : (
                    <InfiniteScroll
                      dataLength={items.length}
                      next={handleFetchMore}
                      hasMore={hasMore}
                      loader={<h4>Loading...</h4>}
                      endMessage={
                        <p style={{ textAlign: "center" }}>
                          <b>You are at last</b>
                        </p>
                      }
                    >
                      <div
                        style={{
                          maxWidth: "80rem",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {items.map((carDetails, index) => (
                          <div
                            key={index}
                            style={{ flex: "0 0 33.33%", padding: "10px" }}
                          >
                            <CarList1 CarDetails={carDetails} index={index} area ={inputFilter.area} />
                          </div>
                        ))}
                      </div>
                    </InfiniteScroll>
                  )}
                </div>
              </div>
            )}

            {/* <div className="pagiWrap">
              <div className="row">
                <div className="col-md-4 col-sm-4"></div>

                <div className="col-md-8 col-sm-8 text-right">
                  <ul className="pagination" style={{ marginTop: "2em" }}>
                    <li>
                      <Button
                        onClick={goToPreviousPage}
                        isDisabled={currentPage === 1}
                        colorScheme="teal"
                        variant="outline"
                        size="sm"
                        w="150px"
                        // isDisabled={currentPage < 0 ? "true" : "false"}
                      >
                        <span style={{ marginRight: "2px", padding: "5px" }}>
                          <ArrowLeftIcon />
                        </span>
                        Previous Page
                      </Button>
                    </li>

                    <li style={{ marginLeft: "20px" }}>
                     
                      <Button
                        onClick={goToNextPage}
                        colorScheme="teal"
                        variant="outline"
                        size="sm"
                        w="150px"
                        isDisabled={isError}
                      >
                        <span style={{ marginLeft: "5px", padding: "5px" }}>
                          Next Page <ArrowRightIcon />
                        </span>
                      </Button>
                    
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CarList;
