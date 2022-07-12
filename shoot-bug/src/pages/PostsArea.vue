<template>
  <div class="posts-area">
    <h2>这里是帖子浏览区</h2>
    <div class="inner">
      <PostItem v-for="post in postList" :key="post.id" :postInfo="post">
      </PostItem>
    </div>
    <el-pagination
      background
      layout="total,prev, pager, next"
      :page-count="pageCount"
      :current-page="1"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";
import PostItem from "../components/PostItem.vue";

export default {
  data() {
    return {
      postList: [],
      pageCount: 1,
    };
  },
  components: { PostItem },
  methods: {
    handleCurrentChange(val) {
      axios.get(`/api/postdescs?page=${val}`).then((resp) => {
        if (resp.data.code === 200) {
          this.postList = resp.data.data;
        }
      });

      this.$nextTick(() => {
        let scroll = document.documentElement || document.body;
        scroll.scrollTop = 0;
      });
    },
  },
  created() {
    // this.$bus.$on("setPosts", (value) => {
    //   if (!value) {
    //     this.postList = [];
    //     return;
    //   }
    //   this.postList = value;
    // });
    axios.get("/api/postdescs?page=1").then((resp) => {
      if (resp.data.code == 200) {
        this.postList = resp.data.data;
      }
    });
    console.log("postsarea created");
  },
  beforeRouteEnter(to, from, next) {
    if (from.path.indexOf("/index") > -1) {
      axios
        .get("/api/posts/pagecount")
        .then((resp) => {
          if (resp.data.code === 200) {
            return resp.data.data;
          }
        })
        .then((data) => {
          next((vm) => {
            vm.pageCount = data;
          });
        });
    } else {
      next();
    }
  },
  // activated() {
  //   console.log('postsarea activated')
  // },
  // deactivated() {
  //   console.log('postsarea deactivated')
  // },
  // destroyed() {
  //   console.log('postsarea destroyed')
  // },
};
</script>

<style>
.posts-area {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  border: 2px solid pink;
}

.inner {
  width: 100%;
  height: auto;
  /* overflow: auto; */
}
</style>