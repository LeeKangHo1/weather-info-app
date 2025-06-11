import { defineStore } from "pinia";

// store 만들기 (export를 써서 외부에서 사용 가능하게)
export const useStore = defineStore('main', { // main은 store 이름 -> store 여러 개 정의 가능
    state: () => ({
        // 상태변수 정의
        weatherData: {
            icon: 'icon',
            temp: 0,
            text: 'text',
            location: 'location',
            city: 'Seoul',
        },
        toggle: false, // true일 때 about 보여주기
    }),
    actions: {
        // 함수
        addCount(payload) {
            this.count += 1 + payload;
        },
        updateWeather(payload) {
            this.weatherData = payload;
            this.weatherData.icon = payload.weather[0].icon;
            this.weatherData.temp = payload.main.temp;
            this.weatherData.text = payload.weather[0].description;
            this.weatherData.location = payload.sys.country;
            this.weatherData.city = payload.name;
        },
        onSearchCity(payload) {
            this.weatherData.city = payload;
        },
        toggleButton () {
            this.toggle = !this.toggle
        },

        // 비동기 함수 async await
        async getWeather() { 
        const API_KEY = import.meta.env.VITE_API_KEY;     
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.weatherData.city}&appid=${API_KEY}`
        await fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // mutation 함수로 날씨 정보 업데이트
                // context.commit('updateWeather', data);
                this.updateWeather(data);
            })
            .catch(err => {
                alert('에러가 발생했습니다. 잠시 후 다시 시도해 주세요.');
            })
        }
    }
});