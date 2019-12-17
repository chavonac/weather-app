import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css'

const LocationList = ({ cities, onSelectLocation }) => {

    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        onSelectLocation(city);
    };

    const strComponents = cities => (
        cities.map((city) =>
            (<WeatherLocation
                key={city}
                city={city}
                onWeatherLocationClick={() => handleWeatherLocationClick(city)}
            />)) // Map es un for
    );

    return (
        <div className="locationList">
            {strComponents(cities)}
        </div>
    );
};


LocationList.protoTypes = {
    cities: PropTypes.array.isRequired,
    onselectLocation: PropTypes.func,
}

export default LocationList;
