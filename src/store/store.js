import Vue from "vue";
import Vuex from "vuex";

import * as actions from "./actions";

import stocks from "./modules/stocks";
import portofolio from "./modules/portofolio";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions,
	modules: {
		stocks,
		portofolio
	}
});
