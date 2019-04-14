<template>
  <div class="location">
    <h1 class="location-timezone">{{ timezone.timezone }}</h1>
    <skycon v-bind:condition="timezone.icon" color="white" width="128" height="128"/>
  </div>
</template>

<script>
export default {
  name: 'Location',
  props: {
  	timezone: Object
  }
}
</script>

<style scoped>
.location{
	height: 30vh;
	width: 50%;
	display: flex;
	justify-content: space-around;
	align-items: center;
}

@media screen and (max-width: 740px){
	.location{
		flex-direction: column;
	}
}
</style>
