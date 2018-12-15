<template>
	<div>
		<h2>Stocks Available</h2>
		<hr>

		<StockBuy v-for="stock in stocks" :key="stock.id" :stock="stock"/>
	</div>
</template>

<script>
import StockBuy from "@/components/StockBuy.vue";

export default {
	components: {
		StockBuy
	},
	computed: {
		stocks() {
			return this.$store.getters.stocks;
		}
	}
};
</script>
