import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props);
    const {region,population,flags,name} = props.country
    return (
        <div className='country'>
            <p>Region : {region}</p>
            <p>Population : {population}</p>
            <img src={flags.png} alt="" />
            <h2>Country Name : {name.common}</h2>
        </div>
    );
}

export default Country;