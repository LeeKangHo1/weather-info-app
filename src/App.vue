<script setup>
  import Navbar from './components/Navbar.vue';
  import MainComp from './components/MainComp.vue';
  import { ref, onMounted } from 'vue';

  // 날씨 데이터 상태변수
  const weatherData = ref({
    icon: 'cion',
    temp: 0,
    text: 'text',
    location: 'location',
    city: 'Seoul'
  });

  // 앱이 실행되면 날씨 데이터 가져오기
  onMounted(() => {
    console.log('mounted')
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=c61686d7206df0b75e922d749f6d2138`
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        weatherData.value.icon = data.weather[0].icon;
        weatherData.value.temp = data.main.temp;
        weatherData.value.text = data.weather[0].description;
        weatherData.value.location = data.sys.country;
        weatherData.value.city = data.name;
        console.log(weatherData.value);
      })
  })
</script>

<template>
  <Navbar />
  <MainComp />

  <p>{{ weatherData.icon }}</p>
  <p>{{ weatherData.temp }}</p>
  <p>{{ weatherData.location }}</p>
  <p>{{ weatherData.city }}</p>
</template>

<style scoped lang="scss">

</style>
