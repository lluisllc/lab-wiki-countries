import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
// eslint-disable-next-line
import { Routes, Route } from "react-router-dom";
// eslint-disable-next-line
import countriesData from "./countries.json";
import CountryDetails from "./components/CountryDetails";

function App() {
  return <div className="App">
    <Navbar />
    <CountriesList />
    <Routes>
      <Route
        path="/countries-list"
        element={<CountriesList countries={countriesData} />}
      />
      <Route
        path="/country-details/:id"
        element={<CountryDetails />}
      />
    </Routes>
  </div>;
}
export default App;
