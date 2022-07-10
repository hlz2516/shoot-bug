import VueRouter from "vue-router";
import PostBrowse from "@/components/PostBrowse";
import PostEdit from "@/components/PostEdit";
/* import VisitorPage from '@/pages/VisitorPage.vue';
import UserPage from '@/pages/UserPage.vue';
import AuditorPage from '@/pages/AuditorPage.vue';
import RootPage from '@/pages/RootPage.vue';
import PostDetailArea from '@/pages/PostDetailArea';
import PostEditArea from '@/pages/PostEditArea';
import PostsArea from '@/pages/PostsArea';
 */
//保存原来的push|replace方法
var originPush = VueRouter.prototype.push;
var originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}
//创建路由
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/PostBrowse'
        },
        {
            path: '/PostBrowse',
            component: PostBrowse,
            name: '帖子浏览',
        },
        {
            path: '/PostEdit',
            component: PostEdit,
            name: '我要发帖',
        }
       /*  {
            //创建主路由,默认是帖子浏览页
            //一级路由有帖子浏览和编辑
            path: '/index',
            component: SideBar,
            redirect: '/index/posts',
            children: [
                { path: '/index/posts', component: PostBrowse },
                { path: '/index/edit', component: PostEdit },
            ]
        } */,
        /* {
            path: '/user',
            component: UserPage,
            children: [
                { path: 'posts', component: PostBrowse },
                { path: 'post', component: PostDetailArea },
                { path: 'postedit', component: PostEditArea }
            ]
        },
        {
            path: '/auditor',
            component: AuditorPage,
        },
        {
            path: '/root',
            component: RootPage,
            children: [
                { path: 'auditors' }
            ]
        }, */
    ]
})