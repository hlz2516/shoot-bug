import Vue from "vue";
import VueRouter from "vue-router";
import VisitorPage from "@/pages/VisitorPage";
import UserPage from "@/pages/UserPage";
import AuditorPage from "@/pages/AuditorPage";
import RootPage from "@/pages/RootPage";
import PostDetailArea from "@/pages/PostDetailArea";
import PostEditArea from "@/pages/PostEditArea";
import PostsArea from "@/pages/PostsArea";
import Refresh from "@/pages/Refresh";
import axios from "axios";

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

const router = new VueRouter({
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
        {
          path: "drafts",
          component: PostsArea,
          meta: { keepAlive: true },
        },
        {
          name: "draft",
          path: "draft",
          component: PostEditArea,
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
      component: Refresh,
    },
  ],
});

router.afterEach((to, from) => {
  if (
    from.path.indexOf("/user/postedit") > -1 ||
    from.path.indexOf("/user/draft") > -1
  ) {
    Vue.prototype.$bus.$emit("showAside");
  }

  if (to.path.indexOf("/user/drafts") > -1) {
    axios
      .get("/api/draftdescs?page=1")
      .then((resp) => {
        if (resp.data.code == 200) {
          let index = to.matched.length - 1;
          to.matched[index].instances.default.postList = resp.data.data;
        }
      })
      .catch((err) => {
        console.error(err);
      });
  } else if (to.path.indexOf("/user/posts") > -1) {
    axios
      .get("/api/postdescs?page=1")
      .then((resp) => {
        if (resp.data.code == 200) {
          let index = to.matched.length - 1;
          to.matched[index].instances.default.postList = resp.data.data;
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
});

export default router;
