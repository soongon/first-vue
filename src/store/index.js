import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    movieTitle: '스타워즈 영화목록',
    films: [],
  },
  getters: {
  },
  mutations: {
    setFilms(state, data) {
      state.films = data;
    }
  },
  actions: {
    loadStarwars(context) {
      axios.get('https://swapi.dev/api/films')
            .then(result => {
                context.commit('setFilms', result.data.results);
              });
            
    }
  },
  modules: {
  }
}
)
