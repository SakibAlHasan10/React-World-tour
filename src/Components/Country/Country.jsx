import './Country.css'
const Country = ({country}) => {
    // console.log(country)
    const {name, flags} = country
    console.log(name, flags.svg)
    return (
        <div className='country'>
            <img src={flags.png} className='img' alt="" srcset="" />
            <h3>Country:{name.common}</h3>
        </div>
    );
};

export default Country;