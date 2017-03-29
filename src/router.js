import VueRouter from 'vue-router'
import Home from './components/home.vue'
import User from './components/user.vue'
import Deployment from './components/deployment.vue'
import NewDeployment from './components/new-deployment.vue'
import Err404 from './components/err404.vue'
import Err500 from './components/err500.vue'

export default new VueRouter({
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home,
        },
        {
            name: 'err404',
            path: '/err404',
            component: Err404,
        },
        {
            name: 'err500',
            path: '/err500',
            component: Err500,
        },
        {
            name: 'user',
            path: '/users/:username',
            component: User,
            children: [
                {
                    name: "deployment",
                    path: "deployments",
                    component: Deployment,
                },
                {
                    name: "service",
                    path: "services",
                    component: Deployment,
                },
                {
                    name: "ingress",
                    path: "ingresses",
                    component: Deployment,
                },
                {
                    name: "volume",
                    path: "volumes",
                    component: Deployment,
                },
                {
                    name: "new-deployment",
                    path: "new-deployment",
                    component: NewDeployment
                }
            ]
        }
    ]
})