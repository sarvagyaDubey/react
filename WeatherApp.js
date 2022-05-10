import React from "react";
import axios from "axios";
import "./style/WeatherApp.css";
import WeatherFetch from "./WeatherFetch";
class WeatherApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [],
            search: ""
        }
    }
    handleChange = (e) => {
        this.setState({ search: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.search}&appid=7f19aabb783431b647d4fd157b5fc023`)
            .then((res) => this.setState({news:res.data.main})).catch((err) => console.log(err))
    }
    render() {
        // console.log(this.state.news)
        return (
            <div className="card">
                <center>
                    <h3>React Weather App</h3>
                    <img src="https://www.iphonefaq.org/files/styles/large/public/ios-weather.jpg?itok=7ugiciWv"></img>
                <form>
                   <strong>City Name:</strong> <input type="text" onChange={(e) => this.handleChange(e)}></input>
                    <button class="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>seacrh</button>
                </form></center><br></br>
                <WeatherFetch fetch={this.state.news}></WeatherFetch>
                {/* <div>
               temperature: {this.state.news.temp}<br></br>
                humidity:{this.state.news.humidity}<br></br>
               max temp: {this.state.news.temp_max}
               </div> */}
            </div>
        )
    }
}
export default WeatherApp