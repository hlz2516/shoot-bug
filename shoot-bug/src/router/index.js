import VueRouter from "vue-router";
import VisitorPage from '@/pages/VisitorPage.vue';
import UserPage from '@/pages/UserPage.vue';
import AuditorPage from '@/pages/AuditorPage.vue';
import RootPage from '@/pages/RootPage.vue';

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:VisitorPage,
            children:[
                {path:'posts'},
                {path:'post'}
            ]
        },
        {
            path:'/user',
            component:UserPage,
            children:[
                {path:'posts'},
                {path:'post'},
                {path:'postedit'}
            ]
        },
        {
            path:'/auditor',
            component:AuditorPage,
        },
        {
            path:'/root',
            component:RootPage,
            children:[
                {path:'auditors'}
            ]
        }
    ]
})