<template>
    <div class="col-md-6">
	    <!-- BEGIN PORTLET-->
		<div class="portlet light bg-inverse">
			<div class="portlet-title">
				<div class="caption font-purple-plum">
					<i class="icon-speech font-purple-plum"></i>
					<span class="caption-subject bold uppercase">{{name}}</span>
					<span class="caption-helper">{{description}}</span>
				</div>
				<div class="actions">
					<a class="btn btn-circle btn-icon-only btn-default" @click="onRemove()">
						<i class="icon-trash"></i>
					</a>
				</div>
			</div>
			<div class="portlet-body">
				<slot></slot>
			</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['name', 'description'],
		methods: {
			onRemove() {
				this.$emit("remove");
			}
		}
    }
</script>