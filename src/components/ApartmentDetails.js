import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ApartmentDetails = ({
  apartmentArrFromApi,
  devAPI,
  setApartmentArrFromApi,
}) => {
  const { apartmentId } = useParams();
  const navigate = useNavigate();

  /////////////////////
  const [apartmentDetails, setApartmentDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  /////////////////////

  const getDetailsOfapartment = () => {
    axios
      .get(devAPI + "/apartments/" + apartmentId)
      .then((oneApartment) => {
        console.log("looking for an apartment...");
        setApartmentDetails(oneApartment.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteApartment = () => {
    axios
      .delete(devAPI + "/apartments/" + apartmentId)
      .then((response) => {
        console.log("apartment was deleted....");
        deleteApartment();
        navigate("/apartments");
      })
      .catch((e) => {
        console.log("error deleting apartment from the API...", e);
      });
  };

  const renderDetails = () => {
    return (
      <div className="box">
        <h1>{apartmentDetails.title} </h1>
        <img src={apartmentDetails.img} alt="an apartment" />
        <h2>Title: {apartmentDetails.title}</h2>
        <p>Price per Day: {apartmentDetails.pricePerDay}</p>
        <br />
        <button onClick={deleteApartment}>Delete</button>
        <br />
        <br />
      </div>
    );
  };

  return (
    <>
      {apartmentDetails && renderDetails()}

      <Link to="/">Back</Link>
    </>
  );
};

export default ApartmentDetails;
