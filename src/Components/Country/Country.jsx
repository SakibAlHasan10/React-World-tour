import { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountry, addVisitedFlags}) => {
    // console.log(country)
    const {flags, name, area, population, cca2, cca3, ccn3, cioc} = country
    const [Visited, setVisited] = useState(false)
    const handleVisited = () =>{
        setVisited(!Visited)
    }
    // console.log(addVisitedFlags)
    return (
        <div className={`country ${Visited && 'visited'}`}>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="Flags" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca2}, {cca3}, {ccn3}, {cioc}</p>
            <button onClick={()=>addVisitedFlags(country)}>Add Flags</button>
            <button onClick={()=>handleVisitedCountry(country)}>Add Visited Country</button>
            <button onClick={handleVisited}>{Visited? 'Visited' : 'Going'}</button>
        </div>
    );
};

export default Country;