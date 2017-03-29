<template>
    <div>
        <header-bar :user="userinfo"></header-bar>
        <div class="clearfix"></div>
        <router-view></router-view>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
    import HeaderBar from './components/header.vue'
    import FooterBar from './components/footer.vue'

    export default {
        data() {
            return {
                userinfo: null
            }
        },
        mounted () {
            this.$http.get('myself').then(response => {
                this.userinfo = response.data;
            }, response => {});
        }, 
        methods: {
        },
        components: {
            headerBar: HeaderBar,
            footerBar: FooterBar,
        }
    }
</script>