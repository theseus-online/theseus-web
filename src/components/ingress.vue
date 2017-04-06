<template>
    <div class="services container">
        <div class="row">
            <item-box v-for="ing in ingresses" :name="ing.name" :description="ing.name" @remove="removeIngress(ing)">
                <div class="panel panel-success">
					<div class="panel-heading">
						<h3 class="panel-title" v-if="ing.secure">https</h3>
                        <h3 class="panel-title" v-else>http</h3>
					</div>
					<div class="panel-body">{{ing.host}} -> {{ing.serviceName}}.{{ing.owner}}:{{ing.servicePort}}</div>
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
                ingresses: null
            }
        },
        mounted () {
            this.loadIngresses();
        },
        methods: {
            loadIngresses() {
                this.$http.get('users/' + this.$route.params.username + '/ingresses').then(response => {
                    this.ingresses = response.data;
                }, response => {
                    // TODO: handle error.
                });
            },
            removeIngress(ing) {
                this.$http.delete('users/' + this.$route.params.username + '/ingresses/' + ing.name).then(response => {
                    this.loadIngresses();
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
