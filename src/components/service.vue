<template>
    <div class="services container">
        <div class="row">
            <item-box v-for="svc in services" :name="svc.name" :description="svc.name" @remove="removeService(svc)">
                <div v-for="p in svc.ports" class="panel panel-success">
					<div class="panel-heading">
						<h3 class="panel-title">{{p.name}}/{{p.protocol}}</h3>
					</div>
					<div class="panel-body">{{p.port}} -> {{p.targetPort}}</div>
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
                services: null
            }
        },
        mounted () {
            this.loadServices();
        },
        methods: {
            loadServices() {
                this.$http.get('users/' + this.$route.params.username + '/services').then(response => {
                    this.services = response.data;
                }, response => {
                    // TODO: handle error.
                });
            },
            removeService(s) {
                this.$http.delete('users/' + this.$route.params.username + '/services/' + s.name).then(response => {
                    this.loadServices();
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