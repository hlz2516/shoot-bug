<template>
  <div class="posts-area">
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
      let url = "";
      if (this.$route.path.indexOf("/user/posts") > -1) {
        url = `/api/postdescs?page=${val}`;
      } else if (this.$route.path.indexOf("/user/drafts") > -1) {
        url = `/api/draftdescs?page=${val}`;
      }

      axios.get(url).then((resp) => {
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
  beforeRouteEnter(to, from, next) {
    // console.log('beforeRouteEnter',to,from);
    if (
      to.path.indexOf("/user/posts") > -1
    ) {
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
    } else if (
      to.path.indexOf("/user/drafts") > -1
    ) {
      axios
        .get("/api/drafts/pagecount")
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
  }
  // activated() {
  //   console.log('postsarea activated')
  // },
  // deactivated() {
  //   console.log('postsarea deactivated')
  // },
  // destroyed() {
  //   console.log('postsarea destroyed')
  // },
}
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