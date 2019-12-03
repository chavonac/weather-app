import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import tranformWeather from './../../services/tranformWeather';
import { api_weather } from './../../constants/api_url';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'México',
            data: null
        };
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = tranformWeather(data);
            this.setState({
                data: newWeather
            });
        });
    };

    render() {
        console.log("render");
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                {data ? <WeatherData data={data}></WeatherData> : 
                <CircularProgress size={50}/>}
            </div>
        );
    }
};

export default WeatherLocation;