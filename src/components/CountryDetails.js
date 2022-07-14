import { useState, useEffect } from "react";
// eslint-disable-next-line
import { useParams, Link } from "react-router-dom";
// eslint-disable-next-line
import countriesData from "../countries.json";

function CountryDetails(props) {
    const [countryDetails, setCountryDetails] = useState([]);
    const { id } = useParams();


    console.log(countryDetails)
    useEffect(() => {
        setCountryDetails()

        // eslint-disable-next-line
    }, [id])
    return (

        <div class="col-7">
            <h1>{countryDetails.name.common}</h1>
            <table class="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{countryDetails.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {countryDetails.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {/* {countries.border.map((border)=>{
                        return (
                            <li><a href="/{e.alpha3Code}">{e.name.common}</a></li>
                        )
                    }
                    )}  */}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetails;