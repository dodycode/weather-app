<template>
  <div class="wrapper">
    <div v-if="loading">Loading weather data...</div>
    <Location v-if="timezone && icon" v-bind:timezone="{
      timezone: timezone,
      icon: icon
    }"/>
    <Temperature v-if="fahrenheitTemp && summary && temperatureSpan" v-bind:temperature="{
      temperature: tempToShow,
      summary: summary,
      temperatureSpan: temperatureSpan
    }" v-on:click.native="changeTemp"/>
  </div>
</template>

<script>
import Location from './components/Location.vue';
import Temperature from './components/Temperature.vue';

let url = '';

export default {
  name: 'app',
  components: {
    Location,
    Temperature
  },
  data: function() {
    return {
      temperatureSpan: 'F',
      fahrenheitTemp: '',
      celciusTemp: '',
      tempToShow: '',
      timezone: '',
      icon: '',
      summary: '',
      loading: true
    }
  },
  mounted: function() {
    const API_KEY = '7b65d8d3119debc45fecfdc69e47f247';
    let long = '';
    let lat = '';

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(function(pos) {
        lat = pos.coords.latitude;
        long = pos.coords.longitude;
        this.url = `https://api.darksky.net/forecast/${API_KEY}/${lat},${long}`;
        this.getForecast();
      }.bind(this),
      function(error){
        lat = '-8.650000';
        long = '115.216667';
        this.url = `https://api.darksky.net/forecast/${API_KEY}/${lat},${long}`;
        this.getForecast();
      }.bind(this));

    }
  },
  methods: {
    getForecast: function() {
      let proxy = `https://dodycode-cors-anywhere.vercel.app/`;
      this.$http.get(proxy+this.url)
      .then(function(res) {
        return res.json();
      })
      .then(function(data){
        this.fahrenheitTemp = data.currently.temperature;
        this.celciusTemp = Math.floor((this.fahrenheitTemp - 32) * (5 / 9));
        this.tempToShow = this.fahrenheitTemp;
        this.timezone = data.timezone;
        this.icon = data.currently.icon;
        this.summary = data.currently.summary;
        this.loading = false;
      }.bind(this));
    },
    changeTemp: function() {
      if (this.temperatureSpan === 'F') {
        this.temperatureSpan = 'C';
        this.tempToShow = this.celciusTemp;
      }else{
        this.temperatureSpan = 'F';
        this.tempToShow = this.fahrenheitTemp;
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(rgb(47,150,163), rgb(48,62,143));
  font-family: sans-serif;
  color: #fff;
}
</style>
