<template>
<div class="row">
    <div class="col-md-6 col-md-offset-3">
        <div class="portlet light bordered">
            <div class="portlet-title">
                <div class="caption font-green-haze">
                    <i class="icon-settings font-green-haze"></i>
                    <span class="caption-subject bold uppercase"> Create New Ingress </span>
                </div>
                <div class="actions">
                    <button class="btn btn-circle btn-icon-only green" @click="saveIngress()"><i class="fa fa-check"></i></button>
                    <button class="btn btn-circle btn-icon-only red" @click="routeToDashboard()"><i class="fa fa-times"></i></button>
                </div>
            </div>
            <div class="portlet-body">
                <h4><strong>Ingress Information</strong></h4>
                <form class="form-inline margin-bottom-40" role="form">
                    <div class="form-group form-md-line-input has-success">
                        <input type="text" class="form-control" placeholder="Ingress Name" v-model="ingress.name">
                        <div class="form-control-focus">
                        </div>
                    </div>
                    <div class="form-group form-md-line-input has-success">
                        <input type="text" class="form-control" placeholder="Ingress Description">
                        <div class="form-control-focus">
                        </div>
                    </div>
                    <div class="form-group form-md-line-input has-success">
                        <input type="text" class="form-control" placeholder="Domain" v-model="ingress.host">
                        <div class="form-control-focus">
                        </div>
                    </div>
                    <md-ckbox content="Secure" v-model="ingress.secure"></md-ckbox>
                </form>
                <h4><strong>Backend Information</strong></h4>
                <form class="form-inline margin-bottom-40" role="form">
                    <div class="form-group form-md-line-input form-md-floating-label has-info">
                        <select class="form-control" v-model="ingress.serviceName">
                            <option value="" disabled hidden>Select Service</option>
                            <option :value="s.name" v-for="s in services">{{s.name}}</option>
                        </select>
                        <label>Select Service</label>
                    </div>
                    <div class="form-group form-md-line-input form-md-floating-label has-info">
                        <select class="form-control" v-model="ingress.servicePort">
                            <option value="" disabled hidden>Select Port</option>s
                            <option :value="p.port" v-for="p in ports">{{p.name}}({{p.port}}/TCP)</option>
                        </select>
                        <label>Select Port</label>
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
                ingress: {
                    name: null,
                    owner: this.$route.params.username,
                    host: null,
                    secure: false,
                    serviceName: null,
                    servicePort: null
                },
                deploy_at_once: false,
                services: []
            }
        },
        methods: {
            routeToDashboard() {
                this.$router.push({name: 'ingress'});
            },
            saveIngress() {
                this.$http.post('users/' + this.$route.params.username + '/ingresses', this.ingress).then(response => {
                    this.routeToDashboard();
                }, response => {
                    // TODO: handle error
                });
            }
        },
        mounted() {
            this.$http.get('users/' + this.$route.params.username + '/services').then(response => {
                this.services = response.data;
            }, response => {
                // TODO: handle error.
            });
        },
        computed: {
            ports() {
                console.log(this.serviceName);
                if(this.ingress.serviceName) {
                    for(const s of this.services) {
                        if(s.name == this.ingress.serviceName) {
                            return s.ports.filter(p => {
                                return p.protocol == "TCP";
                            });
                        }
                    }
                }
                return [];
            }
        },
        components: {
            'md-ckbox': MdCkBox,
        }
    }
</script>
