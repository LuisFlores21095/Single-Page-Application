import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { colors } from 'vuetify/lib';

Vue.use(Vuetify, {
    theme:{
      primary:colors.purple
    }
});

export default new Vuetify({
});
