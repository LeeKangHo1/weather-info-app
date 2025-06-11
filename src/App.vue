<script setup>
  import Navbar from './components/Navbar.vue';
  import MainComp from './components/MainComp.vue';
  import About from './components/About.vue';
  import { ref, onMounted } from 'vue';
  // import { useStore } from 'vuex';
  import { useStore } from './store/store';
  import { storeToRefs } from 'pinia'; // 상태 변수를 reactive하게 사용하기 위함

  const store = useStore();
  const { toggle } = storeToRefs(store); // 상태 변수를 꺼내오기기
  
  // 앱이 실행되면 날씨 데이터 가져오기
  onMounted(() => {
    // store.dispatch('getWeather');
    store.getWeather();
  })


</script>

<template>
  <!-- <button @click="$store.dispatch('getWeather')">getWeather</button> -->
  <Navbar />
  <div v-if="!toggle">
    <MainComp />
  </div>
  <div v-else>
    <About />
  </div>
</template>

<style scoped lang="scss">

</style>
