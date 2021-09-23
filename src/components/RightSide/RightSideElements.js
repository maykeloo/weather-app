import styled from "styled-components";
import loupe from './loupe.png'

export const LookingForLocation = styled.input.attrs((props) => ({
    placeholder: 'Another location',
    onChange: props.change,
    type: 'text', 
    value: props.text,
}))`
    background: none;
    border: 0;
    padding: 10px;
    margin-top: 40px;
    margin-left: 40px;
    margin-right: 40px;
    width: 70%;
    outline: none;
    position: relative;
    border-bottom: 1px solid grey;
    color: black;
    font-weight: bold;
`

export const RightBox = styled.div`
    background-color: white;
    border-radius: 0;
    overflow:hidden;

    @media screen and (max-width: 786px) {
        border-radius: 30px 30px 0 0;
        z-index: 11;
        background-image: none;
        background-color: white;
    }
`

export const Children = styled.div`
 width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding-right: 17px; /* Increase/decrease this value for cross-browser compatibility */
    box-sizing: content-box; /* So the width will be 100% + 17px */
`

export const SearchBar = styled.form`
`
export const Search = styled.button`
    position: absolute;
    width: 80px;
    height: 80px;
    background-color: grey;
    border: 0;
    cursor: pointer;

    @media screen and (max-width: 786px) {
        position: static;
        width: 40px;
        height: 40px;
        background: transparent;
    }
`



export const Loupe = styled.img.attrs(() => ({
    src: loupe,
}))`
    width: 12px;

    @media screen and (max-width: 786px) {
        width: 17px;
        filter: invert(100%)
    }
`

export const Infos = styled.div`
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    margin: auto;
    height: 45%;
    width:80%;

    @media screen and (max-width: 786px) {
        border: 0;
        width:70%;
        
    }
`

export const Title = styled.h1`
    color: black;
    font-weight: bold;
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 40px;
`

export const Info = styled.div`

@media screen and (max-width: 786px) {
        padding-bottom: 20px;
    }
`

export const InfoDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 25px
`

export const TitleInfo = styled.span`
    color: grey;
`

export const TextInfo = styled.span`
    color: black;

`