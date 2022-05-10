import React from "react";
class WeatherFetch extends React.Component {
    constructor(props) {
        super(props)
       
    }
    render() {
        // console.log("hello",this.state.arr)
        // console.log(this.state.arr.temp)
        return (
         
            <div class="out">   
            <img className="img1" src="https://tse4.mm.bing.net/th?id=OIP.L99gx4vvymvlBO579AMgEQHaIq&pid=Api&P=0&w=132&h=155" alt=""></img>&nbsp;:{this.props.fetch.temp-273}<br></br>
            <img className="img1" src="https://tse4.mm.bing.net/th?id=OIP.GdSjrF0jZMOr-er3MO-HlgHaHa&pid=Api&P=0&w=162&h=162" alt=""></img>&nbsp;:{this.props.fetch.humidity}<br></br>
            <img className="img1" src="https://tse3.mm.bing.net/th?id=OIP.zhXzyStQErdkJ8StgztAGgHaIX&pid=Api&P=0&w=141&h=159" alt=""></img>&nbsp;:{this.props.fetch.pressure}<br></br>
            {/* Min Temp:&nbsp;{this.props.fetch.temp_min} */}
            </div>
            )
        
    }
}
export default WeatherFetch