<template>
    <div class="search-bar">
        <form @submit.prevent>
            <div class="form-group">
                <input v-model="inputText" type="search" placeholder="지역을 입력해 주세요">
                <button 
                  @click="
                    store.onSearchCity(inputText)
                    store.getWeather();
                  "
                >
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                </button>
            </div>
        </form>
      </div>
</template>

<script setup>

  import { useStore } from '../store/store';
  const store = useStore();

</script>

<style lang="scss" scoped>
  .search-bar {
    padding: 8px 20px;
    border-radius: 40px;
    background: #fff;
    border: 1px solid #ccc;
    padding: 0 20px;
  
    form {
      .form-group {
        display: flex;
        input {
          width: 100%;
          border: none;
          padding: 1em 0;
          font-size: 18px;
          outline: none;
        }
        button {
          background: transparent;
          border: none;
          &:hover { cursor: pointer; }
          .icon { font-size: 24px; }
        }
      }
    }
  }
</style>