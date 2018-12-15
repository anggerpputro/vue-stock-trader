<template>
	<div>
		<h2>Your Portofolio</h2>
		<hr>
		<StockSell v-for="stock in stocks" :key="stock.id" :stock="stock"/>
	</div>
</template>

<script>
import StockSell from "@/components/StockSell.vue";

export default {
	components: {
		StockSell
	},
	computed: {
		stocks() {
			return this.$store.getters["portofolio/stocks"];
		}
	}
};
</script>
