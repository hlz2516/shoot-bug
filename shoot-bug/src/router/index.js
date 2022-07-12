import VueRouter from "vue-router";
import VisitorPage from "@/pages/VisitorPage.vue";
import UserPage from "@/pages/UserPage.vue";
import AuditorPage from "@/pages/AuditorPage.vue";
import RootPage from "@/pages/RootPage.vue";
import PostDetailArea from "@/pages/PostDetailArea";
import PostEditArea from "@/pages/PostEditArea";
import PostsArea from "@/pages/PostsArea";
import Refresh from '@/pages/Refresh.vue';

//保存原来的push|replace方法
var originPush = VueRouter.prototype.push;
var originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

export default new VueRouter({
  routes: [
    {
      path: "/index",
      component: VisitorPage,
      children: [
        { path: "posts", component: PostsArea },
        { path: "post", component: PostDetailArea },
      ],
    },
    {
      path: "/",
      redirect: "/index",
    },
    {
      path: "/user",
      component: UserPage,
      children: [
        {
          path: "posts",
          component: PostsArea,
          meta: { keepAlive: true },
        },
        //打开详情页时必须传递post的id
        {
          name: "post",
          path: "post/:id",
          component: PostDetailArea,
          meta: { keepAlive: false },
        },
        {
          path: "postedit",
          component: PostEditArea,
          meta: { keepAlive: false },
        },
      ],
    },
    {
      path: "/auditor",
      component: AuditorPage,
    },
    {
      path: "/root",
      component: RootPage,
      children: [{ path: "auditors" }],
    },
    {
      name: "refresh",
      path: "/refresh",
      component: Refresh
    }
  ],
});
