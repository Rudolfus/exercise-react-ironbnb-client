import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ApartmentsList = ({
  apartmentArrFromApi,
  setApartmentArrFromApi,
  devAPI,
}) => {
  const [apartArr, setApartArr] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getListOfApartments();
  }, []);

  const getListOfApartments = () => {
    axios
      .get(devAPI + "/apartments")
      .then((response) => {
        console.log(response.data);

        setApartArr(response.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (isLoading) {
    return <div>isLoading</div>;
  }

  return (
    <>
      <h1> This is the Apartment List </h1>

      {apartmentArrFromApi === null
        ? "loading apartments ..."
        : apartArr.map((apartmentDetails) => {
            return (
              <div key={apartmentDetails._id}>
                <img src={apartmentDetails.img} alt="an apartment" />
                <h2>Title: {apartmentDetails.title}</h2>
                <p>Price per Day: {apartmentDetails.pricePerDay}</p>
                <Link to={"/apartments/" + apartmentDetails.id}>
                  More Details
                </Link>
              </div>
            );
          })}
    </>
  );
};

export default ApartmentsList;
