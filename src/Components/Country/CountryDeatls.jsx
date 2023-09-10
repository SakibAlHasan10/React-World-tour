
const CountryDeatls = (props) => {
    console.log(props)
    const {country} = props
    console.log(country.languages)

    return (
        <div>
        <p>languages: {`${country?.languages?.eng ? country?.languages?.eng : 'data not found'}`}</p>
        </div>
    );
};

export default CountryDeatls;