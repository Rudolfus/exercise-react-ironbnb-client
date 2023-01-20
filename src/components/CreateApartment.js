import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateApartment = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(1);
  const [image, setImage] = useState(
    "https://www.dreamtinyliving.com/wp-content/uploads/2021/02/The-Mill-Tiny-House-1-1024x806.jpg"
  );

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // Prevent page reload on submit
    e.preventDefault();
    // Create the body for the POST request
    const body = { title: title, pricePerDay: price, img: image };
    axios
      .post(process.env.REACT_APP_API_URL + "/apartments", body)
      .then((response) => {
        // Reset the state
        setTitle("");
        setPrice(1);
        setImage("");
        navigate("/apartments");
      });
  };

  return (
    <div className="CreateApartment">
      <h3>Add New Apartment</h3>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label>Price per Day</label>
        <input
          type="number"
          name="pricePerDay"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />

        <button type="submit">Create Apartment</button>
      </form>
    </div>
  );
};
export default CreateApartment;
