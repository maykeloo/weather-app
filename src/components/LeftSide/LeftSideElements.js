import styled from "styled-components";


export const Leftbox = styled.div`
    background-color: ${props => props.inputColor};
    position: relative;  

    @media screen and (max-width: 786px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`
export const Logo = styled.strong`
    position: absolute;
    margin-top: 50px;
    margin-left: 110px;
    color: white;
    font-size: 16px;
    pointer-events: none;
    

    @media screen and (max-width: 786px) {
        top: 20px;
        margin: 0 auto;
        opacity: 50%
    }
`

export const Informations = styled.div`
    color: white;
    position: absolute;
    bottom: 120px;
    left: 100px;
    width: 65%;
    height: 120px;
    display: flex;
    align-items: center;
    pointer-events: none;

    @media screen and (max-width: 786px) {
        display: grid;
        text-align: center;
        font-size: 0.8em;
        position: static;
        height: 60%;
        flex-direction: row;
    }

`
export const Temp = styled.span`
    font-size: 8em;
    font-weight: bold;

    @media screen and (max-width: 786px) {
    margin-left: 15px;
    font-size: 12em;
    font-weight: 700;
    }
`

export const CityInfo = styled.div`
    margin-left: 20px;
    font-weight: bold;

    @media screen and (max-width: 786px) {
    margin-left: 0;
    margin: 0;
    font-size: 1.4em;
    z-index: 10;
    }
`

export const City = styled.span`
    font-size: 2.8em;
`

export const UnderCityTitle = styled.div`
    font-weight: 400;
`

export const Iconic = styled.img.attrs((props) => ({
    src: props.src 
}))`
    height: 100px;
    width: 100px;
`

