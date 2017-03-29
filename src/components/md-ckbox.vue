<template>
    <div class="md-checkbox md-checkbox-inline has-success">
		<input type="checkbox" class="md-check" v-model="checked">
		<label>
			<span class="check" @click="update(false)"></span>
			<span class="box" @click="update(true)"></span>
			{{content}}
        </label>
	</div>
</template>

<script>
    export default {
        props: ['value', 'content'],
        data() {
            return {
                checked: false,
            }
        },
        methods: {
            update(v) {
                this.checked = v;
                this.$emit('input', v)
            }
        },
        mounted() {
            this.checked = this.value;
        }
    }
</script>