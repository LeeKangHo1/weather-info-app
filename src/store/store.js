import { createStore } from 'vuex';

// store 만들기
export default createStore({
    state: {
        // initail state
        count: 0,
        weatherData: {
            icon: 'icon',
            temp: 0,
            text: 'text',
            location: 'location',
            city: 'Seoul',
        }
    },
    mutations: {
        // mutations(데이터 변경 함수들)
        addCount(state, payload) {
            state.count += 1 + payload;
        },
        updateWeather(state, payload) {
            state.weatherData = payload;
            state.weatherData.icon = payload.weather[0].icon;
            state.weatherData.temp = payload.main.temp;
            state.weatherData.text = payload.weather[0].description;
            state.weatherData.location = payload.sys.country;
            state.weatherData.city = payload.name;
        },
        onSearchCity(state, payload) {
            state.weatherData.city = payload;
        },
    },
    actions: {
        // actions(데이터 변경)
        getWeather(context) { // 함수 정의를 위해 function 적지 않아도 된다       
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=c61686d7206df0b75e922d749f6d2138`
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // mutation 함수로 날씨 정보 업데이트
                context.commit('updateWeather', data);
            })
            .catch(err => {
                alert('에러가 발생했습니다. 잠시 후 다시 시도해 주세요.');
            })
        }
    }
})