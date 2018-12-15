import stocks from "@/data/stocks";

const state = {
	stocks: []
};

const mutations = {
	setStocks(state, stocks) {
		state.stocks = stocks;
	},
	rndStocks(state) {}
};

const actions = {
	buyStock: ({ commit }, order) => {
		commit();
	},
	initStocks: ({ commit }) => {
		commit("setStocks", stocks);
	},
	randomizeStocks: ({ commit }) => {
		commit("rndStocks");
	}
};

const getters = {
	stocks: state => state.stocks
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
};
