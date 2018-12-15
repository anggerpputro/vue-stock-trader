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
						<a href="#">Link</a>
					</li>
					<li class="dropdown">
						<a
							href="#"
							class="dropdown-toggle"
							data-toggle="dropdown"
							role="button"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Dropdown
							<span class="caret"></span>
						</a>
						<ul class="dropdown-menu">
							<li>
								<a href="#">Action</a>
							</li>
							<li>
								<a href="#">Another action</a>
							</li>
							<li>
								<a href="#">Something else here</a>
							</li>
							<li role="separator" class="divider"></li>
							<li>
								<a href="#">Separated link</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<!-- /.navbar-collapse -->
		</div>
		<!-- /.container-fluid -->
	</nav>
</template>
