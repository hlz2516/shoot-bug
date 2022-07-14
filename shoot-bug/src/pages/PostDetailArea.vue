<template>
  <div class="post-detail">
    <h2>{{ title }}</h2>
    <floor
      v-for="f in floorList"
      :key="f.id"
      :number="floorList.indexOf(f) + (currentPage - 1) * limited"
      :floorInfo="f"
    />
    <div class="pagination">
      <el-pagination
        background
        layout="total,prev, pager, next"
        :page-count="pageCount"
        :current-page="currentPage"
        :page-size="limited"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
    <div class="comment-cotainer">
      <my-quill-editor ref="editor" v-model="commentContent" />
      <div class="func-container">
        <button @click="comment">发表</button>
      </div>
    </div>
  </div>
</template>

<script>
import Floor from "../components/Floor.vue";
import axios from "axios";
import MyQuillEditor from "../components/MyQuillEditor.vue";
import { nanoid } from "nanoid";
import time from "time-formater";

export default {
  components: {
    Floor,
    MyQuillEditor,
    MyQuillEditor,
  },
  data() {
    return {
      id: "",
      title: "",
      pageCount: 1,
      floorList: [],
      limited: 1,
      currentPage: 1,
      commentContent:''
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;

      axios
        .get(`/api/floor?id=${this.id}&page=${val}`)
        .then((resp) => {
          if (resp.data.code === 200) {
            this.floorList = resp.data.data;
          }
        })
        .catch((err) => {
          console.error(err);
        });

      this.$nextTick(() => {
        let scroll = document.documentElement || document.body;
        scroll.scrollTop = 0;
      });
    },
    refresh(){
      if (Object.keys(this.$route.params || {}).length) {
        this.$router.replace({
          name:'refresh',
          params:this.$route.params,
          query:this.$route.query
        })
        console.log('走了params');
      }else{
        this.$router.replace({
          path:'/refresh',
          query:this.$route.query
        })
        console.log('走了query');
      }
    },
    comment() {
      //如果发表时内容为空则不发表
      if (this.commentContent == "") {
        console.log("请填写内容后再发表");
        return;
      }
      //新数据
      let newInfo = {
        id: nanoid(),
        content: this.commentContent,
        time: time().format("YYYY-MM-DD HH:mm:ss"),
        "portrait-url": "",
        "nick-name": "新来的",
      };
      //先发送post请求让数据库添加这一条数据
      axios.post("/api/floor/add?id=" + this.id, newInfo)
      .then((resp)=>{
        if (resp.data.code === 200) {
          //如果服务器端已更新数据，则刷新路由
          this.refresh()
        }
      })
      .catch((err) => {
        console.error(err);
      });
      this.commentContent = "";
    },
  },
  mounted() {
    axios.get(`/api/floor?id=${this.id}&page=${this.currentPage}`).then((resp) => {
      if (resp.data.code === 200) {
        this.floorList = resp.data.data;
      }
    });
  },
  beforeRouteEnter(to, from, next) {
    // 如果是从帖子浏览区跳转进来，就请求获取一页多少组数据，有多少页
    if (from.path.indexOf("/user/posts") > -1) {
      axios
        .get(`/api/floors?id=${to.params.id}`)
        .then((resp) => {
          if (resp.data.code === 200) {
            return resp.data.data;
          } else return new Error("network err!");
        })
        .then((data) => {
          next((vm) => {
            vm.id = to.params.id;
            vm.title = to.query.title;
            vm.pageCount = data.pages;
            vm.limited = data.limited;
          });
        });
    }
    else if (from.path.indexOf('/refresh') > -1) {
      axios
        .get(`/api/floors?id=${to.params.id}`)
        .then((resp) => {
          if (resp.data.code === 200) {
            return resp.data.data;
          } else return new Error("network err!");
        })
        .then((data) => {
          next((vm) => {
            vm.id = to.params.id;
            vm.title = to.query.title;
            vm.pageCount = data.pages;
            vm.limited = data.limited;
            vm.currentPage = vm.pageCount
          });
        });
    }
    else {
      next();
    }
  },
};
</script>

<style>
.post-detail {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 2px solid green;
}

.pagination {
  height: 30px;
  border: 1px solid black;
  margin: 2px auto;
  text-align: center;
}

.comment-cotainer {
  width: 98%;
  height: 12rem;
  border: 1px solid blue;
  margin: auto;
  position: relative;
}

.func-container {
  position: absolute;
  top: 145px;
  bottom: 0;
  width: 100%;
}
</style>