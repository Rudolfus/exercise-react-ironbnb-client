import "../App.css";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ApartmentsList = ({
  apartmentArrFromApi,
  setApartmentArrFromApi,
  devAPI,
}) => {
  useEffect(() => {
    getApartmentArrFromApi();
  }, []);

  const getApartmentArrFromApi = () => {
    axios
      .get(devAPI + "/apartments")
      .then((response) => {
        console.log(response.data);

        setApartmentArrFromApi(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <h1> This is the Apartment List </h1>

      {apartmentArrFromApi === null
        ? "loading apartments ..."
        : apartmentArrFromApi.map((apartmentDetails) => {
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
