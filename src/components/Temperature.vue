<template>
  <div class="temperature">
  	<div class="temperature-degree-section">
  		<h2 class="temperature-degree">{{ temperature.temperature }}</h2>
  		<span>{{ temperature.temperatureSpan }}</span>
  	</div>
  	<p class="temperature-description">{{ temperature.summary }}</p>
  </div>
</template>

<script>
export default {
  name: 'Temperature',
  props: {
  	temperature: Object
  }
}
</script>

<style scoped>
.temperature{
	height: 30vh;
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	cursor: pointer;
}

.temperature-degree-section{
	display: flex;
	align-items: center;
}

.temperature-degree-section .temperature-degree{
	font-size: 40px;
}

.temperature-degree-section span{
	margin: 10px;
	font-size: 30px;
}
</style>
