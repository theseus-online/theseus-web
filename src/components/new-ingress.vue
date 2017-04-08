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
                        <input type="text" class="form-control" placeholder="Host" v-model="ingress.host">
                        <div class="form-control-focus">
                        </div>
                    </div>
                    <md-ckbox content="Secure" v-model="ingress.secure"></md-ckbox>
                </form>
                <h4><strong>Backend Information</strong></h4>
                <form class="form-inline margin-bottom-40" role="form">
                    <div class="form-group form-md-line-input has-success">
                        <input type="text" class="form-control" placeholder="Service Name" v-model="ingress.serviceName">
                        <div class="form-control-focus">
                        </div>
                    </div>
                    <div class="form-group form-md-line-input has-success">
                        <input type="text" class="form-control" placeholder="Service Port" v-model.number="ingress.servicePort">
                        <div class="form-control-focus">
                        </div>
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
        components: {
            'md-ckbox': MdCkBox,
        }
    }
</script>
