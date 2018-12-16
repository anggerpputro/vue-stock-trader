<template>
	<nav class="navbar navbar-default navbar-static-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<router-link to="/" class="navbar-brand">Stock Trader</router-link>
			</div>

			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<router-link to="/" tag="li" exact-active-class="active">
						<a class="nav-link">Home</a>
					</router-link>
					<router-link to="/portofolio" tag="li" exact-active-class="active">
						<a class="nav-link">Portofolio</a>
					</router-link>
					<router-link to="/stocks" tag="li" exact-active-class="active">
						<a class="nav-link">Stocks</a>
					</router-link>
				</ul>

				<ul class="nav navbar-nav navbar-right">
					<li>
						<a href="#" @click="endDay">End Day</a>
					</li>
					<li class="dropdown" :class="{open: isDropdownOpen}" @click="isDropdownOpen = !isDropdownOpen">
						<a
							href="#"
							class="dropdown-toggle"
							data-toggle="dropdown"
							role="button"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Save & Load
							<span class="caret"></span>
						</a>
						<ul class="dropdown-menu">
							<li>
								<a href="#" @click="saveData">Save Data</a>
							</li>
							<li>
								<a href="#" @click="loadData">Load Data</a>
							</li>
						</ul>
					</li>
					<li>
						<strong class="navbar-text">Funds: {{ funds | currency }}</strong>
					</li>
				</ul>
			</div>
			<!-- /.navbar-collapse -->
		</div>
		<!-- /.container-fluid -->
	</nav>
</template>

<script>
export default {
	data() {
		return {
			isDropdownOpen: false
		};
	},
	computed: {
		funds() {
			return this.$store.getters["portofolio/funds"];
		}
	},
	methods: {
		endDay() {
			this.$store.dispatch("stocks/randomizeStocks");
		},
		saveData() {
			const data = {
				funds: this.$store.getters["portofolio/funds"],
				portofolio: this.$store.getters["portofolio/stocks"],
				stocks: this.$store.getters["stocks/stocks"]
			};
			this.$http.put("data.json", data);
		},
		loadData() {
			this.$store.dispatch("loadData");
		}
	}
};
</script>
