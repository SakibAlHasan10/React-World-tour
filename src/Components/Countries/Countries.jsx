import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countrise.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountry, setVisitedCountry] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(Response => Response.json())
        .then(data => setCountries(data))
    },[])
    // console.log(countries)
    const handleVisitedCountry = country  =>{
        const newVisitedCountry = [...visitedCountry, country]
        setVisitedCountry(newVisitedCountry)
    }
    const [visitedFlags, setVisitedFlags] = useState([])

    const addVisitedFlags = country =>{
        const newFlags = [...visitedFlags, country]
        setVisitedFlags(newFlags)
        // console.log(country)
    }
    // console.log(visitedCountry.length)
    return (
        <div>
            <h2>Countries:{countries.length}</h2>
            <div>
                <h3>Visited Country Flags:</h3>
                <div>
                    {visitedFlags.map(country => <img key={country.name.common} src={country.flags.png}/>)
                    }
                </div>
            </div>
            <div>
            <h2>All Visited Country : </h2>
                <ul>
                    
                {
                visitedCountry.map(country => <li key={country.name.common}>{country.name.common}</li>)
                }
                </ul>
            </div>
        <div className="countries_container">
            {
            countries.map(country => <Country country={country} 
                key={country.name.common} 
                handleVisitedCountry={handleVisitedCountry}
                addVisitedFlags={addVisitedFlags}>
                
                </Country>)
            }
            
        </div>
        </div>
    );
};

export default Countries;