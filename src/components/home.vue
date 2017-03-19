<template>
    <component :is="currentView"></component>
</template>

<script>
    import Welcome from './welcome.vue'

    export default {
        data () {
            return {
                currentView: 'welcome', 
                userinfo: null,
            }
        },
        mounted () {
            this.$http.get('myself').then(userinfo => {
                this.userinfo = userinfo
            }, error => {
                alert(error)
            })  
        },
        components: {
            welcome: Welcome,
        }
    }
</script>

<style>
</style>