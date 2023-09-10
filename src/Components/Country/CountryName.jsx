
const CountryName = (props) => {
 const {country} = props
 const {altSpellings} = country
//  console.log(altSpellings)
//  console.log(country)
    return (
        <div>
            <p>AltSpellings: {`${altSpellings[1] ? altSpellings[1] : altSpellings[0]}`}</p>
        </div>
    );
};

export default CountryName;