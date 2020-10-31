import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import sunny from './images/sunny.png';
import snow from './images/snow.png';
import thunderStorm from './images/thunderStorm.png';
import rain from './images/rain.png';

class Weather_detail extends Component {
    constructor(props) {
      super(props);
      console.log(this.props);
      this.state = {
        country : this.props.country,
        min : this.props.min,
        max : this.props.max,
        cur : this.props.cur,
        weather : this.props.weather
      }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.country !== this.props.country) {
          this.setState({
              country: this.props.country,
              min: this.props.min,
              max: this.props.max,
              cur: this.props.cur,
              weather: this.props.weather,
            });
        }
      }
    

    render() {
    let image;
    const weather = this.state.weather;
    const min_tem = "Lowest: " + this.state.min;
    const max_tem = "Highest: " + this.state.max;
    const cur_tem = "Current: " + this.state.cur;
    if (weather == 'sunny') {
        image = sunny;
    } else if (weather == 'snow') {
        image = snow;
    } else if (weather == 'thunderStorm') {
        image = thunderStorm;
    } else  {
        image = rain;
    }
      return (
        <div>
            <Grid container item xs={6} justify="center">
                <img src={image} />
            </Grid>
            <Grid container item xs={1} justify="center">
                <p style={{"font-size": "25px", color:"white", "white-space": "nowrap"}}>{cur_tem}</p>
            </Grid>
            <Grid container item xs={1} justify="space-between" direction="row">
                <p style={{"font-size": "25px", color:"white", "white-space": "nowrap"}}>{min_tem}</p>
                <p style={{"font-size": "25px", color:"white", "white-space": "nowrap"}}>{max_tem}</p>
            </Grid>
            <Grid container item xs={1} justify="center" >
                <p style={{"font-size": "25px", color:"white"}}>{weather}</p>
            </Grid>
        </div>
      );
    }
  }
  export default Weather_detail;