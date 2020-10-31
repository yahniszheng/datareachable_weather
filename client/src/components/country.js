import React, { Component } from 'react';
import { Grid, Button} from '@material-ui/core';
import left from './images/leftArrow.png';
import right from './images/rightArrow.png';
import ReactLoading from 'react-loading';
import Weather_detail from './weather_detail';


class Country extends Component {
    constructor() {
      super();
      this.state = {
        cur_index : 0,
        cur_country : "Sydney",
        country_list : ["Sydney", "Melbourne", "Brisbane"],
        loading : false, // loading status
        weather_data : {} //cashing weather data
      }
      this.click_left = this.click_left.bind();
      this.click_right = this.click_right.bind();
      this.fetch_data = this.fetch_data.bind();
    }
  
    click_left = () => {
      let temp = this.state.cur_index;
      const len = this.state.country_list.length;
      temp = (temp + len - 1) % len;
      this.setState({cur_index: temp, cur_country: this.state.country_list[temp]});
      console.log("left");
    }

    click_right = () => {
      let temp = this.state.cur_index;
      const len = this.state.country_list.length;
      temp = (temp + len + 1) % len;
      this.setState({cur_index: temp, cur_country: this.state.country_list[temp]});
      console.log("right");
    }

    fetch_data = () => {
      const url = `http://localhost:8000/?country=${this.state.cur_country}`;
      this.setState({loading : true});
      fetch(url, {method: "GET"})
        .then(res => {
          // console.log(res.json());
          return res.json();
        })
        .then(res => {
          // console.log(res.data);
          return res.data;
        })
        .then(res => {
          const temp = this.state.weather_data;
          temp[this.state.cur_country] = res;
          this.setState({
            weather_data: temp,
            loading: false
          });
        })
        .catch(error => {
          console.log(error);
        });
    }

    componentDidMount() {
      this.fetch_data();
    }

    // fetch data only if not cashed
    componentDidUpdate(prevProps, prevState) {
      if (prevState.cur_index !== this.state.cur_index) {
        if (!this.state.weather_data[this.state.cur_country]) {
          this.fetch_data();
        }
      }
    }

    
    render() {
      const imgMyimageexample = require('./background.jpg');
      // const left = require('./images/leftArrow.jpg');
      // const right = require('./images/rightArrow.jpg');
      const divStyle = {
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundImage: `url(${imgMyimageexample})`,
        backgroundSize: 'cover'  
      };
      let country = this.state.cur_country;
      let loading = this.state.loading;
      let data = this.state.weather_data[country];
      console.log(data);
      if (!data) {
        loading = true;
      }
      return (
        <div style={divStyle}>
            <Grid
                container
                spacing={0}
                direction="row"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
                >
                <Grid item xs={4}>
                  <img src={left}  onClick={this.click_left}/>
                </Grid>
                  <Grid
                  container
                  item
                  direction="column"
                  alignItems="center"
                justify="space-evenly"
                style={{ minHeight: '100vh' }}
                spacing={3}
                  xs={4}
                  >
                  <Grid item xs={3}>
                    <p style={{"font-size": "70px", color:"white"}}>{this.state.cur_country}</p>
                  </Grid>
                  {loading ?  
                  <Grid item xs={9}>
                    <ReactLoading type="spin" color="#34c0eb" height={300} width={300} /> 
                  </Grid> :
                   <Weather_detail min={data.min} cur={data.cur} max={data.max} weather={data.weather} country={this.state.cur_country} />
                  }
                  </Grid>
                <Grid item xs={4}>
                  <img src={right}  onClick={this.click_right}/>
                </Grid>
            </Grid>
        </div>
      );
    }
  }
  export default Country;