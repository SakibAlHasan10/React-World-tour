import './Country.css';

const Country = ({country}) => {
    // console.log(country)
    const {flags, name} = country
    return (
        <div className='country'>
            <img src={flags.png} alt="Flags" />
            <h2>Name: {name.common}</h2>
        </div>
    );
};

export default Country;