import styled from "styled-components";
import rain from './WeatherImages/rain.jpg'
import clearsky from './WeatherImages/clearsky.jpg'
import snow from '../WeaApp/WeatherImages/snow.jpg'
import cloudy from '../WeaApp/WeatherImages/cloudy.jpg'
import storm from '../WeaApp/WeatherImages/storm.jpg'
import drizzle from '../WeaApp/WeatherImages/drizzle.jpg'
import fewClouds from '../WeaApp/WeatherImages/few-clouds.jpg'
import scatteredClouds from '../WeaApp/WeatherImages/scatteredClouds.jpg'
import brokenClouds from '../WeaApp/WeatherImages/brokenClouds.jpg'

export const Application = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
`

export const WhiteBOX = styled.div`
    background-image: url(${props => {
        if(props.cloudsDes === 'few clouds') {
        return fewClouds
    }

    else if(props.cloudsDes === 'scattered clouds') {
        return scatteredClouds
    }

    else if(props.cloudsDes === 'broken clouds') {
        return brokenClouds
    }

    else if(props.cloudsDes === 'overcast clouds') {
        return cloudy   
    }
    
    else if(props.background === 'Clear') {
        return clearsky
    }

    else if(props.background === 'Snow') {
        return snow
    }

    else if(props.background === 'Rain') {
        return rain
    }

    else if(props.background === 'Drizzle') {
        return drizzle
    }

    else if(props.background === 'Storm') {
        return storm
    }
    
    }});
    width: 60vw;
    height: 70vh;
    display: grid;
    grid-template-columns: 65% 35%;
    box-shadow: 0px 0px 30px 21px rgba(0,0,0,0.4);
    display: visible;

    @media screen and (max-width: 786px) {
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: 65% 35%;
    }
`