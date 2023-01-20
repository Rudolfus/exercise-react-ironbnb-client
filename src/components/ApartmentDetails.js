import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const ApartmentDetails = ({ apartmentArrFromApi, devAPI }) => {
  const { apartmentId } = useParams();
  const navigate = useNavigate();

  const getDetailsOfapartment = () => {
    axios
      .get(devAPI + "/apartments/" + apartmentId)
      .then((oneApartment) => {
        console.log("looking for an apartment...");
        ///something missing
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
        <h1>{detailsOfapartment.title} </h1>
        <img src={detailsOfapartment.img} alt="an apartment" />
        <h2>Title: {detailsOfapartment.title}</h2>
        <p>Price per Day: {detailsOfapartment.pricePerDay}</p>
        <br />
        <button onClick={deleteApartment}>Delete</button>
        <br />
        <br />
      </div>
    );
  };

  return (
    <>
      {detailsOfapartment && renderDetails()}

      <Link to="/">Back</Link>
    </>
  );
};

export default ApartmentDetails;
