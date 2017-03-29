<template>
	<div class="page-sidebar-wrapper">
		<div class="page-sidebar navbar-collapse collapse">
			<ul class="page-sidebar-menu page-sidebar-fixed" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
			    <li :class="{active: $route.name == 'deployment'}">
					<router-link :to="{name: 'deployment'}"><i class="icon-bar-chart"></i>Deployment</router-link>
				</li>
			    <li :class="{active: $route.name == 'service'}">
					<router-link :to="{name: 'service'}"><i class="icon-bulb"></i>Service</router-link>
				</li>
			    <li :class="{active: $route.name == 'ingress'}">
					<router-link :to="{name: 'ingress'}"><i class="icon-graph"></i>Ingress</router-link>
				</li>
			    <li :class="{active: $route.name == 'volume'}">
					<router-link :to="{name: 'volume'}"><i class="icon-diamond"></i>Volume</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>