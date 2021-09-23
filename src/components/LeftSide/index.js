import { Leftbox, Logo, Informations, Temp, CityInfo, City , UnderCityTitle, Iconic } from './LeftSideElements'
import ICONS from '../../images/Icons'
import React from 'react';

const LeftSide = (props) => {    


    return (
        <Leftbox inputColor = {props.inputColor}>
            <Logo>the.weather</Logo>
            <Informations>
                <Temp>
                    {props.temp}
                </Temp>
                <CityInfo>
                    <City>
                        {props.city}
                    </City>
                    <UnderCityTitle>{props.day} - {props.date} {props.month} '{props.year} </UnderCityTitle>
                    {/* <Iconic src = {ICONS[props.number]}/> */}
                </CityInfo>
            </Informations>
        </Leftbox>
    )
}

export default LeftSide
