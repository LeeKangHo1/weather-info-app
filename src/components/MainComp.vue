<template>
    <div class="comtainer">
        <SearchBar @onSearchCity="onSearchCity" />
        <WeatherInfo :weatherData="props.weatherData" />
    </div>
</template>

<script setup>
    import SearchBar from './SearchBar.vue';
    import WeatherInfo from './WeatherInfo.vue';

    const emits = defineEmits(['onSearchCity']);

    // 날씨 데이터 상태 변수
    const props = defineProps({
        weatherData: Object,
    })
    console.log(props.weatherData);

    // 검색어 이벤트 함수
    const onSearchCity = (city) => {
        console.log(city);
        emits('onSearchCity', city)
    }
</script>
 
<style lang="scss">
  
</style>