import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(Response => Response.json())
        .then(data => setCountries(data))
    },[])
    // console.log(countries)
    return (
        <div>
            {
            countries.map(country => <Country country={country} key={country.name.common}></Country>)
            }
            <h2>Countries:{countries.length}</h2>
            
        </div>
    );
};

export default Countries;