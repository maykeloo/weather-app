import React from 'react'
import { Application, WhiteBOX } from './AppElements'
import RightSide from '../RightSide'
import LeftSide from '../LeftSide'


const WeaApp = (props) => {
    return (
        <>
            <Application>
                <WhiteBOX background = {props.background} cloudsDes = {props.cloudsDes}>
                    <LeftSide  inputColor = {props.inputColor} temp = {props.weather.temp} srcIcon = {props.srcIcon} day = {props.day} date = {props.date} month = {props.month} year = {props.year} city = {props.weather.city}/>
                    <RightSide 
                    change = {props.change} 
                    text = {props.text} 
                    submit = {props.submit}
                    clouds = {props.clouds}
                    humidity = {props.humidity}
                    pressure = {props.pressure}
                    wind = {props.wind}
                    city = {props.city}
                    lastCity = {props.lastCity}
                    background = {props.background}/>
                </WhiteBOX>
            </Application>
        </>
    )
}

export default WeaApp
