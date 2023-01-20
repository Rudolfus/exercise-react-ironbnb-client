import ironhackersImg from "./assets/ironhackers.avif"
import './App.css';
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { RouteContext } from "react-router/dist/lib/context";

import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ApartmentsList from "./components/ApartmentsList";
import ApartmentDetails from "./components/ApartmentDetails";
import CreateApartment from "./components/CreateApartment";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apartments" element={<ApartmentsList />} />
        {/* this line must be above ":apartmentId", otherwise "create" will be passed as a params */}
        <Route path="/apartments/create" element={<CreateApartment />} />
        <Route path="/apartments/:apartmentId" element={<ApartmentDetails />} />
      </Routes>
      <h1>Welcome</h1>

      <img src={ironhackersImg} alt="ironhackers" />
    </div>
  );
}

export default App;
