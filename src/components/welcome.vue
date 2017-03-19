<template>
    <div class="blankslate home-guide-block">
        <h1>A better way to service</h1>
        <p>To deploy, or not to deploy?</p>
        <br>
        <h1 class="text-center">Get started for free</h1>
        <p class="text-center">Share your service with others.</p>
        <button class="btn btn-large btn-primary" @click="login">Sign in with Github</button>
    </div>
</template>

<script>
    export default {
        methods: {
            login() {
                window.location = "https://theseus.online/auth/login?back_url=" + window.location;
            }
        }
    }
</script>

<style>
.home-guide-block {
    width: 100%;
    height: 100%;
    position: absolute; 
    top: 0; 
    left: 0;
    background-image:url(/images/bg.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.home-guide-block > h1, p {
    color: white;
}
</style>