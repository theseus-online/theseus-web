<template>
<div class="page-header navbar navbar-fixed-top">
	<!-- BEGIN HEADER INNER -->
	<div class="page-header-inner">
		<!-- BEGIN LOGO -->
		<div class="page-logo">
			<a href="index.html">
			<img src="/assets/admin/layout/img/logo.png" alt="logo" class="logo-default">
			</a>
			<div class="menu-toggler sidebar-toggler hide">
				<!-- DOC: Remove the above "hide" to enable the sidebar toggler button on header -->
			</div>
		</div>
		<!-- END LOGO -->
		<!-- BEGIN RESPONSIVE MENU TOGGLER -->
		<a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
		</a>
		<!-- END RESPONSIVE MENU TOGGLER -->
		<!-- BEGIN TOP NAVIGATION MENU -->
		<div class="top-menu">
			<ul class="nav navbar-nav pull-right">
				<!-- BEGIN USER LOGIN DROPDOWN -->
				<!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
				<li v-if="user" :class="user_dropdown_class" @click="onDropDown()">
					<a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
					<img alt="" class="img-circle" :src="user.avatar">
					<span class="username username-hide-on-mobile">{{user.name}}</span>
					<i class="fa fa-angle-down"></i>
					</a>
					<ul class="dropdown-menu dropdown-menu-default">
						<li>
                            <router-link :to="{name: 'deployment', params: {username: user.name}}"><i class="icon-user"></i> My Profile </router-link>
						</li>
                        <li class="divider">
						</li>
						<li>
                            <router-link :to="{name: 'new-deployment', params: {username: user.name}}"><i class="icon-calendar"></i> New Deployment </router-link>
						</li>
						<li>
							<router-link :to="{name: 'new-service', params: {username: user.name}}"><i class="icon-envelope-open"></i> New Service </router-link>
						</li>
						<li>
							<router-link :to="{name: 'new-ingress', params: {username: user.name}}"><i class="icon-rocket"></i> New Ingress </router-link>
						</li>
						<li class="divider">
						</li>
						<li>
							<a href="/auth/logout">
							<i class="icon-key"></i> Log Out </a>
						</li>
					</ul>
				</li>
				<!-- END USER LOGIN DROPDOWN -->
				<!-- BEGIN QUICK SIDEBAR TOGGLER -->
				<!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
				<li class="dropdown dropdown-quick-sidebar-toggler">
					<a v-if="user" href="/auth/logout" class="dropdown-toggle">
					    <i class="icon-logout"></i>
					</a>
					<a v-else href="/auth/login" class="dropdown-toggle">
					    <i class="icon-login"></i>
					</a>
				</li>
				<!-- END QUICK SIDEBAR TOGGLER -->
			</ul>
		</div>
		<!-- END TOP NAVIGATION MENU -->
	</div>
	<!-- END HEADER INNER -->
</div>
</template>

<script>
    export default {
        props: ['user'],
        data() {
            return {
                open_user_dropdown: false,
                user_dropdown_class: {
                    'dropdown': true,
                    'dropdown-user': true,
                    'dropdown-dark': true,
                    'open': false,
                }
            }
        },
        methods: {
            onDropDown() {
                this.user_dropdown_class.open = !this.user_dropdown_class.open;
            },
        },
    }
</script>
