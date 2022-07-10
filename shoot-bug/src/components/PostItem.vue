<template>
  <div class="post-box" 
    @mouseenter="appear" 
    @mouseleave="disappear" 
    @click="seeDetail">
    <div v-show="mouseIn" class="mask"></div>

    <el-descriptions
      :title="postInfo.title"
      style="height: 90%"
      :column="1"
      size="medium"
      :contentStyle="contentStyle"
      :labelStyle="labelStyle"
      :colon="false"
    >
      <template slot="extra">
        <ul class="tag-list">
          <li
            v-for="tag in postInfo.tags"
            :key="tag"
            style="float: left; margin: 0 4px; color: orange"
          >
            {{ tag }}
          </li>
        </ul>
        <span style="vertical-align: middle">{{ postInfo.postTime }}</span>
      </template>
      <el-descriptions-item>
        {{ postInfo.desc }}
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelStyle: {
        "margin-top": "8px",
      },
      contentStyle: {
        display: "-webkit-box",
        "-webkit-line-clamp": 3,
        overflow: "hidden",
        "text-overflow": "ellipsis",
        "-webkit-box-orient": "vertical",
      },
      mouseIn:false
    };
  },
  methods: {
    appear(){
        this.mouseIn = true;
    },
    disappear(){
        this.mouseIn =false;
    },
    seeDetail(){
        this.$router.push({path:`/user/post/${this.postInfo.id}`,query:{title:this.postInfo.title}})
    }
  },
  props: ["postInfo"]
};
</script>

<style>
.post-box {
  width: 98%;
  height: 125px;
  margin: 4px 2px;
  border: 1px solid magenta;
  padding: 4px 12px;
  box-sizing: border-box;
  position: relative;
}

.post-box:hover{
    cursor: pointer;
}

.tag-list {
  list-style: none;
  margin: 0;
  display: inline-block;
  vertical-align: middle;
  margin-right: 50px;
}

.mask{
    width: 100%;
    height: 100%;
    background-color: rgba(230,230,250,0.3);
    position: absolute;
    left: 0;
    top: 0;
}

</style>