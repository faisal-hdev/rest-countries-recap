import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props);
    const {region,population,flags,name} = props.country
    return (
        <div className='country'>
            <p>Region : {region}</p>
            <p>Population : {population}</p>
            <h2>Country Name : {name.common}</h2>
            <img style={{width:'170px'}} src={flags.png} alt="" />
        </div>
    );
}

export default Country;