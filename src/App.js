import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
// eslint-disable-next-line
import { Routes, Route } from "react-router-dom";
// eslint-disable-next-line
import countriesData from "./countries.json";

function App() {
  return <div className="App">
    <Navbar />
    <CountriesList />
    {/* <Routes>
      <Route
        path="/Countries-list"
        element={<CountriesList countries={countriesData} />}
      />
    </Routes> */}
  </div>;
}
export default App;
