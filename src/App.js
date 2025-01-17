import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ApartmentsList from "./components/ApartmentsList";
import ApartmentDetails from "./components/ApartmentDetails";
import CreateApartment from "./components/CreateApartment";

function App() {
  const [apartmentArrFromApi, setApartmentArrFromApi] = useState();

  const devAPI = process.env.REACT_APP_API_URL;

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/apartments"
          element={
            <ApartmentsList
              apartmentArrFromApi={apartmentArrFromApi}
              setApartmentArrFromApi={setApartmentArrFromApi}
              devAPI={devAPI}
            />
          }
        />
        {/* this line must be above ":apartmentId", otherwise "create" will be passed as a params */}
        <Route path="/apartments/create" element={<CreateApartment />} />
        <Route
          path="/apartments/:apartmentId"
          element={
            <ApartmentDetails
              apartmentArrFromApi={apartmentArrFromApi}
              setApartmentArrFromApi={setApartmentArrFromApi}
              devAPI={devAPI}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
