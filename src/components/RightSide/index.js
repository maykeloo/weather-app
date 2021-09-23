import React from 'react'
import Cities from './Cities';
import { LookingForLocation, RightBox, SearchBar, Infos, Title, Info, TextInfo, TitleInfo, InfoDiv, Children, Loupe } from './RightSideElements'



const RightSide = (props) => {
    return (
        <>
            <RightBox background ={props.background}>
                <Children>
                <SearchBar>
                    <LookingForLocation text = {props.text} change = {props.change}/>
                    <Loupe/>
               <div style ={{
                   display: "flex",
                   flexDirection: "row",
                   marginLeft: "20px"
               }}>
               <Cities city = {props.city} lastCity = {props.lastCity}/>
               </div>
                
                </SearchBar>
                <Infos>
                    <Title>Szczegółowe parametry pogodowe</Title>
                    <Info>
                        <InfoDiv>
                        <TitleInfo>
                            Zachmurzenie
                        </TitleInfo>

                        <TextInfo>
                            {props.clouds}%
                        </TextInfo>
                        </InfoDiv>


                        <InfoDiv>
                        <TitleInfo>
                            Wilgotność
                        </TitleInfo>

                        <TextInfo>
                            {props.humidity}%
                        </TextInfo>
                        </InfoDiv>
                        
                        <InfoDiv>
                        <TitleInfo>
                            Wiatr
                        </TitleInfo>

                        <TextInfo>
                            {props.wind}km/h
                        </TextInfo>
                        </InfoDiv>

                        <InfoDiv>
                        <TitleInfo>
                            Ciśnienie
                        </TitleInfo>

                        <TextInfo>
                            {props.pressure}hPa
                        </TextInfo>
                        </InfoDiv>
                    </Info>
                </Infos>
                </Children>
            </RightBox>
        </>
    )
}

export default RightSide
