<template>
  <div class="post-edit">
    <div class="title">
      <div class="title-label-area">
        <label for="title-edit"><a class="title-label">标题</a></label>
      </div>
      <div class="title-edit-area">
        <input type="text" id="title-edit" v-model="article.title" />
      </div>
    </div>
    <div class="content">
      <my-quill-editor ref="contentEditor" />
    </div>
    <div class="tags" ref="tagArea">
      <tag v-for="t in article.tagList" :key="t.content" class="tag" :tag="t" />
      <tag
        class="tag"
        ref="lastTag"
        :onConfirm="onConfirm"
        :onCancel="onCancel"
      />
    </div>
    <div class="func">
      <button @click="save">保存</button>
      <button @click="publish">发布</button>
      <button @click="setTimePublish">定时发布</button>
    </div>
  </div>
</template>

<script>
import Tag from "../components/Tag.vue";
import MyQuillEditor from "../components/MyQuillEditor.vue";
import axios from "axios";

export default {
  name: "PostEdit",
  data() {
    return {
      article: {
        id: "",
        title: "",
        content: "",
        tagList: ["java", "C#", "javascript"],
      },
    };
  },
  components: {
    Tag,
    MyQuillEditor,
  },
  methods: {
    onConfirm() {
      let val = this.$refs.lastTag.content;
      if (val != "") {
        this.tagList.push(val);
        this.$refs.lastTag.content = "";
      }
    },
    onCancel() {
      return false;
    },
    save() {
      axios
        .post("/api/article/save", this.article)
        .then((resp) => {
          if (resp.data.code === 200) {
            return "OK";
          } else return new Error("网络错误", resp.data.code);
        })
        .catch((data) => {
          console.error(data);
        });
    },
    publish() {
      axios
        .post("/api/article/publish", this.article)
        .then((resp) => {
          if (resp.data.code === 200) {
            return "OK";
          } else return new Error("网络错误", resp.data.code);
        })
        .catch((data) => {
          console.error(data);
        });
    },
    setTimePublish() {},
  },
  mounted() {
    let container = this.$refs.contentEditor.$el.querySelector(".ql-container");
    container.style.height = "600px";
  },
};
</script>

<style>
.post-edit {
  width: 100%;
  height: 900px;
  box-sizing: border-box;
  border: 2px solid purple;
}

.title {
  width: 96%;
  height: 60px;
  border: 1px solid black;
  margin: 20px auto;
  display: flex;
}

.title-label {
  font-size: 32px;
  font-weight: bold;
  line-height: 60px;
  text-decoration: none;
  color: black;
  cursor: default;
}

.title-label-area {
  flex: 1;
  text-align: center;
}

.title-edit-area {
  height: max-content;
  width: max-content;
  flex: 9;
}

#title-edit {
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  outline: none;
  font-size: 32px;
}

.content {
  width: 96%;
  height: fit-content;
  border: 1px solid black;
  margin: 20px auto;
}

.tags {
  width: 96%;
  min-height: 30px;
  height: fit-content;
  border: 1px solid black;
  margin: 20px auto;
  padding: 5px;
}

.tag {
  float: left;
  margin-right: 50px;
}

.func {
  width: 96%;
  height: 60px;
  border: 1px solid black;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.func > button {
  width: 100px;
  height: 30px;
}
</style>