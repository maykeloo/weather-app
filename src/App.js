/* eslint-disable no-unused-expressions */
import './App.css';
import WeaApp from './components/WeaApp';
import React, { Component } from 'react';
import styled from 'styled-components';
import Cities from './components/RightSide/Cities';
const API = '829e56d5536398fb63373f9579d368f3'

const Html = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgb(31,31,31);
`

class App extends Component {

  state = {
    cloudsDescript: '',
    color: '',
    time: '',
    city: '',
    weather: '',
    temp: '',
    sunset: '',
    sunrise: '',
    cloudy: '',
    humidity: '',
    wind: '',
    pressure: '',
    icon: '',
    inputOf: '',
    lastSearched: [],
  }

  typedCity = e => {
    this.setState({
      inputOf: e.target.value, 
    })
  }

  componentDidMount() {
    const Link = `https://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=${API}`



    fetch(Link)
    .then(result => result.json())
    .then(data => {
      const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString()
      const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString()  
      const dayOfMonth = new Date().getDate()   
      const monthOfYear = new Date().getMonth()
      const year = new Date().getYear() - 100
      const actualTime = new Date(data.sys.sunset * 1000).getDay()
      const months = ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru']
      const showMonth = months[monthOfYear]
      const days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela']
      const day = days[actualTime - 1]

      this.setState({
      cloudsDescript: data.weather[0].description,
      time: day,
      day: dayOfMonth,
      month: showMonth,
      year: year,
      city: 'Warszawa',
      weather: data.weather[0].main,
      temp: `${Math.floor(data.main.temp - 273.1500)}°`,
      sunset: sunsetTime,
      sunrise: sunriseTime,
      cloudy: data.clouds.all,
      humidity: data.main.humidity,
      wind: Math.floor(data.wind.speed),
      pressure: data.main.pressure,
      lastSearched: ['Londyn', 'Berlin', 'Tokyo']
    })})
    .catch(err => err)
  }

  lastCityHandler = e => {
    e.preventDefault()

    const Link = `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${API}`

    fetch(Link)
    .then(result => result.json())
    .then(data => {
      const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString()
      const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString()  
      const dayOfMonth = new Date().getDate()   
      const monthOfYear = new Date().getMonth()
      const year = new Date().getYear() - 100
      const actualTime = new Date(data.sys.sunset * 1000).getDay()
      const months = ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru']
      const showMonth = months[monthOfYear]
      const days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela']
      const day = days[actualTime - 1]

      this.setState({
      cloudsDescript: data.weather[0].description,
      time: day,
      day: dayOfMonth,
      month: showMonth,
      year: year,
      city: e.target.value,
      weather: data.weather[0].main,
      temp: `${Math.floor(data.main.temp - 273.1500)}°`,
      sunset: sunsetTime,
      sunrise: sunriseTime,
      cloudy: data.clouds.all,
      humidity: data.main.humidity,
      wind: Math.floor(data.wind.speed),
      pressure: data.main.pressure,
      inputOf: e.target.value,
    })})
    .catch(err => err)
  }


  componentDidUpdate(prevProps, prevState) {

    console.log('update');

    if(this.state.inputOf.length <= 2) return

    if(prevState.inputOf !== this.state.inputOf) {
      const Link = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputOf}&appid=${API}`



      fetch(Link)
      .then(result => result.json())
      .then(data => {
        const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString()  
        const dayOfMonth = new Date().getDate()   
        const monthOfYear = new Date().getMonth()
        const year = new Date().getYear() - 100
        const actualTime = new Date(data.sys.sunset * 1000).getDay()
        const months = ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru']
        const showMonth = months[monthOfYear]
        const days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela']
        const day = days[actualTime - 1]

        this.setState({
        cloudsDescript: data.weather[0].description,
        time: day,
        day: dayOfMonth,
        month: showMonth,
        year: year,
        city: this.state.inputOf,
        weather: data.weather[0].main,
        temp: `${Math.floor(data.main.temp - 273.1500)}°`,
        sunset: sunsetTime,
        sunrise: sunriseTime,
        cloudy: data.clouds.all,
        humidity: data.main.humidity,
        wind: Math.floor(data.wind.speed),
        pressure: data.main.pressure
      })})
      .catch(err => err)
    }
  }

  render() {

    return (
      <>
      <Html>
      <WeaApp 
        text = {this.state.inputOf} 
        change = {this.typedCity} 
        inputColor = {this.state.color} 
        weather = {this.state} 
        day = {this.state.time} 
        date = {this.state.day} 
        month  = {this.state.month} 
        year = {this.state.year}
        clouds = {this.state.cloudy}
        humidity = {this.state.humidity}
        wind = {this.state.wind}
        pressure = {this.state.pressure}
        city = {this.state.lastSearched.map(city => <Cities city = {city} key = {city}/>)}
        lastCity = {this.lastCityHandler}
        background = {this.state.weather}
        cloudsDes = {this.state.cloudsDescript}/>
      </Html>
      </>
    );
  }

}

export default App;
