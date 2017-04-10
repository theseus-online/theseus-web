<template>
<div class="row">
    <div class="col-md-6 col-md-offset-3">
        <div class="portlet light bordered">
            <div class="portlet-title">
                <div class="caption font-green-haze">
                    <i class="icon-settings font-green-haze"></i>
                    <span class="caption-subject bold uppercase"> Create New Service </span>
                </div>
                <div class="actions">
                    <button class="btn btn-circle btn-icon-only green" @click="saveService()"><i class="fa fa-check"></i></button>
                    <button class="btn btn-circle btn-icon-only red" @click="routeToDashboard()"><i class="fa fa-times"></i></button>
                </div>
            </div>
            <div class="portlet-body">
                <h4><strong>Service Information</strong></h4>
                <form class="form-inline margin-bottom-40" role="form">
                    <div class="form-group form-md-line-input has-success">
                        <input type="text" class="form-control" placeholder="Service Name" v-model="service.name">
                        <div class="form-control-focus">
                        </div>
                    </div>
                    <div class="form-group form-md-line-input has-success">
                        <input type="text" class="form-control" placeholder="Service Description">
                        <div class="form-control-focus">
                        </div>
                    </div>
                    <div class="form-group form-md-line-input has-success">
                        <input type="text" class="form-control" placeholder="Backend" v-model="service.backend">
                        <div class="form-control-focus">
                        </div>
                    </div>
                    <div class="form-group form-md-line-input form-md-floating-label has-info">
                        <select class="form-control" v-model="service.backend">
                            <option value="" disabled hidden>Select Backend</option>s
                            <option :value="d.name" v-for="d in deployments">{{d.name}}</option>
                        </select>
                        <label>Select Backend</label>
                    </div>
                </form>
                <h4><strong>Ports Information</strong></h4>
                <form class="form-inline margin-bottom-40" role="form" v-for="(p, i) in service.ports">
                    <div class="form-group form-md-line-input has-success">
                        <input type="text" class="form-control" placeholder="Name" v-model="p.name">
                        <div class="form-control-focus">
                        </div>
                    </div>
                    <div class="form-group form-md-line-input form-md-floating-label has-info">
                        <select class="form-control" v-model="p.protocol">
                            <option value="" disabled hidden>Select Protocol</option>s
                            <option value="TCP">TCP</option>
                            <option value="UDP">UDP</option>
                        </select>
                        <label>Select Protocol</label>
                    </div>
                    <div class="form-group form-md-line-input has-success">
                        <input type="number" class="form-control" placeholder="Port" v-model.number="p.port">
                        <div class="form-control-focus">
                        </div>
                    </div>
                    <div class="form-group form-md-line-input has-success">
                        <input type="number" class="form-control" placeholder="Target Port" v-model.number="p.targetPort">
                        <div class="form-control-focus">
                        </div>
                    </div>
                    <div class="form-group form-md-line-input has-success" v-if="can_remove_port">
                        <button type="button" class="btn btn-danger" @click="removePort(i)"><i class="fa fa-minus"></i></button>
                    </div>
                </form>
                <form class="form-inline margin-bottom-40" role="form">
                    <div class="form-group form-md-line-input has-success">
                        <button type="button" class="btn btn-success" @click="addPort()"><i class="fa fa-plus"></i></button>
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
                service: {
                    name: null,
                    owner: this.$route.params.username,
                    ports: [
                        {
                            name: null,
                            protocol: null,
                            port: null,
                            targetPort: null
                        }
                    ]
                },
                deploy_at_once: false,
                deployments: []
            }
        },
        mounted() {
            this.$http.get('users/' + this.$route.params.username + '/deployments').then(response => {
                this.deployments = response.data;
            }, response => {
                // TODO: handle error.
            });
        },
        methods: {
            addPort() {
                this.service.ports.push({
                    name: null,
                    protocol: null,
                    port: null,
                    targetPort: null
                })
            },
            removePort(index) {
                this.service.ports.splice(index, 1);
            },
            routeToDashboard() {
                this.$router.push({name: 'service'});
            },
            saveService() {
                this.$http.post('users/' + this.$route.params.username + '/services', this.service).then(response => {
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
            can_remove_port() {
                return this.service.ports.length > 1;
            }
        }
    }
</script>
