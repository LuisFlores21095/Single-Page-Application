import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
      iconfont: 'mdi'
  
    },
  // this is the spot to modify
  
    theme: {
      themes: {
        light: {
          secondary: '#6e859c',
          primary: '#3f8abf'
        }
      }
    }
  })