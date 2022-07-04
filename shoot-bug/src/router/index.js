import VueRouter from "vue-router";
import VisitorPage from '@/pages/VisitorPage.vue';
import UserPage from '@/pages/UserPage.vue';
import AuditorPage from '@/pages/AuditorPage.vue';
import RootPage from '@/pages/RootPage.vue';

//保存原来的push|replace方法
var originPush = VueRouter.prototype.push;
var originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location,resolve,reject) {  
    if (resolve && reject) {
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}

VueRouter.prototype.replace = function (location,resolve,reject) {  
    if (resolve && reject) {
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}

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