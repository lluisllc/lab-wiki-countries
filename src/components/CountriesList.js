// eslint-disable-next-line
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import countriesData from "../countries.json";

function CountriesList() {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        setCountries(countriesData)
        // eslint-disable-next-line
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <div className="list-group">
                        {countries.map((e, index) => {
                            return (
                                <Link to={`/country-details/${e.alpha3Code}`}><p>{e.name.common}</p></Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}



export default CountriesList;