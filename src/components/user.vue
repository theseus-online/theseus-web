<template>
<div class="page-container">
    <side-bar></side-bar>
	<!-- BEGIN CONTENT -->
	<div class="page-content-wrapper">
		<div class="page-content" style="min-height:1028px">
            <router-view></router-view>
		</div>
	</div>
	<!-- END QUICK SIDEBAR -->
</div>
</template>

<script>
    import SideBar from './sidebar.vue'

    export default {
        mounted () {
            if(this.$route.name == 'user') {
                this.$router.push({ name: "deployment" });
            }
        }, 
        components: {
            sideBar: SideBar
        }
    }
</script>