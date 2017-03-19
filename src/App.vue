<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        mounted: function() {
            this.$router.push({name: 'home'})
        }
    }
</script>

<style>
</style>