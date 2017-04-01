<template>
    <div class="deployments container">
        <div class="row">
            <item-box v-for="dep in deployments" :name="dep.name" :description="dep.name" @remove="removeDeployment(dep)">
                <div v-for="c in dep.containers" class="panel panel-success">
					<div class="panel-heading">
						<h3 class="panel-title">{{c.name}}</h3>
					</div>
					<div class="panel-body">{{c.image}}</div>
				</div>
            </item-box>
        </div>
    </div>
</template>

<script>
    import ItemBox from "./item-box.vue"

    export default {
        data() {
            return {
                deployments: null
            }
        },
        mounted () {
            this.loadDeployments();
        },
        methods: {
            loadDeployments() {
                this.$http.get('users/' + this.$route.params.username + '/deployments').then(response => {
                    this.deployments = response.data;
                }, response => {
                    // TODO: handle error.
                });
            },
            removeDeployment(d) {
                this.$http.delete('users/' + this.$route.params.username + '/deployments/' + d.name).then(response => {
                    this.loadDeployments();
                }, response => {
                    // TODO: handle error.
                });
            }
        },
        components: {
            'item-box': ItemBox,
        }
    }
</script>