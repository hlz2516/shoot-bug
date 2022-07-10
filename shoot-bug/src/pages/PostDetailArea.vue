<template>
  <div class="post-detail">
    <h2>{{title}}</h2>
    <floor v-for="f in floorList" :key="f.id" 
    :number="floorList.indexOf(f) + (currentPage-1)*limited" 
    :floorInfo="f" />
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
      <quill-editor
        v-model="comment"
        ref="myQuillEditor"
        class="editor"
        @ready="onEditorReady($event)"
      >
      </quill-editor>
    </div>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

import Floor from "../components/Floor.vue";
import axios from "axios";
import { quillEditor } from 'vue-quill-editor';

export default {
  components: {
    Floor,quillEditor
  },
  data() {
    return {
      id: "",
      title: "",
      pageCount: 1,
      limited: 5,
      floorList: [],
      currentPage: 1,
      comment:'',
      modules: {
            toolbar: '#toolbar'
          }
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val

      axios.get(`/api/floor?id=${this.id}&page=${val}`).then((resp) => {
        if (resp.data.code === 200) {
          this.floorList = resp.data.data;
        }
      })

      this.$nextTick(()=>{
        let scroll = document.documentElement || document.body;
        scroll.scrollTop = 0
      })
    },
    onEditorReady(e){

    }
  },
  mounted() {
    //请求第一页数据
    axios.get(`/api/floor?id=${this.id}&page=1`).then((resp) => {
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
            vm.limited = data.pagesize;
          });
        });
    } else {
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

.comment-cotainer{
  width: 98%;
  height: 12rem;
  border: 1px solid blue;
  margin: auto;
}
</style>