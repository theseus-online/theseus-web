<template>
<div class="page-footer">
	<div class="page-footer-inner">
		 2017 © theseus.online.
	</div>
	<div @click="scrollUp" class="scroll-to-top" style="display: block;">
		<i class="icon-arrow-up"></i>
	</div>
</div>
</template>

<script>
    import $ from "jquery";
    
    export default {
        methods: {
            scrollUp() {
                //scrollTo(0, 0);
                $("html, body").animate({ scrollTop: 0 }, "slow");
            }
        }
    }
</script>