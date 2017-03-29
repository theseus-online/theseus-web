<template>
<div class="row">
    <div class="col-md-6 col-md-offset-3">
		<div class="portlet light bordered">
			<div class="portlet-title">
				<div class="caption font-green-haze">
					<i class="icon-settings font-green-haze"></i>
					<span class="caption-subject bold uppercase"> Create New Deployment </span>
				</div>
                <div class="actions">
					<button class="btn btn-circle btn-icon-only green" @click="saveDeployiment()"><i class="fa fa-check"></i></button>
                    <button class="btn btn-circle btn-icon-only red" @click="routeToDashboard()"><i class="fa fa-times"></i></button>
				</div>
			</div>
			<div class="portlet-body">
				<h4><strong>App Information</strong></h4>
				<form class="form-inline margin-bottom-40" role="form">
					<div class="form-group form-md-line-input has-success">
						<input type="text" class="form-control" placeholder="App Name" v-model="app.name">
						<div class="form-control-focus">
                        </div>
					</div>
                    <div class="form-group form-md-line-input has-success">
						<input type="text" class="form-control" placeholder="App Description">
						<div class="form-control-focus">
                        </div>
					</div>
				</form>
                <h4><strong>Containers Information</strong></h4>
				<form class="form-inline margin-bottom-40" role="form" v-for="(c, i) in app.containers">
					<div class="form-group form-md-line-input has-success">
						<input type="text" class="form-control" placeholder="Container Name" v-model="c.name">
						<div class="form-control-focus">
                        </div>
					</div>
                    <div class="form-group form-md-line-input has-success">
						<input type="text" class="form-control" placeholder="Container Image" v-model="c.image">
						<div class="form-control-focus">
                        </div>
                        <span class="help-block">namespace/image</span>
					</div>
					<div class="form-group form-md-line-input has-success" v-if="can_remove_container">
						<button type="button" class="btn btn-danger" @click="removeContainer(i)"><i class="fa fa-minus"></i></button>
					</div>
				</form>
				<form class="form-inline margin-bottom-40" role="form">
					<div class="form-group form-md-line-input has-success">
						<button type="button" class="btn btn-success" @click="addContainer()"><i class="fa fa-plus"></i></button>
					</div>
				</form>
                <h4><strong>Advanced Settings</strong></h4>
                <form class="form-horizontal margin-bottom-40" role="form">
                    <md-ckbox content="Deploy After Created" v-model="deploy_at_once"></md-ckbox>
				</form>
			</div>
		</div>
    </div>
</div>
</template>

<script>
    import MdCkBox from './md-ckbox.vue'

    export default {
        data() {
            return {
                app: {
                    name: null,
                    owner: this.$route.params.username,
                    containers: [
                        {
                            name: null,
                            image: null,  
                        }
                    ]
                },
                deploy_at_once: false,
            }
        },
        methods: {
            addContainer() {
                this.app.containers.push({
                    name: null,
                    image: null,
                })
            },
            removeContainer(index) {
                this.app.containers.splice(index, 1);
            },
            routeToDashboard() {
                this.$router.push({name: 'deployment'});
            },
            saveDeployiment() {
                this.$http.post('users/' + this.$route.params.username + '/deployments', this.app).then(response => {
                    this.routeToDashboard();
                }, response => {
                    // TODO: handle error
                });
            }
        },
        components: {
            'md-ckbox': MdCkBox,
        },
        computed: {
            can_remove_container() {
                return this.app.containers.length > 1;
            }
        }
    }
</script>