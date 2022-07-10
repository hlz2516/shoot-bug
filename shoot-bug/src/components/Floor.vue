<template>
  <div class="floor-container">
    <div class="main">
      <div class="left">
        <div class="person">
          <div class="portrait" ref="portrait"></div>
          <div class="person-info">
            {{ floorInfo["nick-name"] }}
          </div>
        </div>
      </div>
      <div class="right" v-html="floorInfo.content"></div>
    </div>
    <div class="footer">
      <span style="float: right">{{ floorInfo.time }}</span>
      <span style="float: right; margin-right: 20px">#{{ index }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: this.number,
    };
  },
  props: ["number", "floorInfo"],
  mounted() {
    //如果用户没有设置过头像图片，则使用本地默认图片；否则使用用户设置的图片
    if (this.floorInfo["portrait-url"] == "") {
      this.$refs.portrait.style.setProperty(
        "background-image",
        "url(" + require("../../public/images/touxiang.jpg") + ")"
      );
    } else {
      this.$refs.portrait.style.setProperty(
        "background-image",
        `url(${this.floorInfo["portrait-url"]})`
      );
    }
  },
};
</script>

<style scoped>
.floor-container {
  width: 98%;
  height: auto;
  background-color: lightyellow;
  box-sizing: border-box;
  border: 1px solid black;
  margin: 2px;
}

.left {
  flex: 2;
  border: 1px solid red;
}

.right {
  flex: 8;
  border: 1px solid blue;
  padding: 4px 8px;
}

.person {
  width: 8rem;
  height: 12rem;
  border: 1px solid deeppink;
  position: relative;
  top: 2rem;
  left: calc((100% - 8rem) / 2);
}

.portrait {
  width: 8rem;
  height: 8rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.person-info {
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
}

.main {
  width: inherit;
  display: flex;
  min-height: 16rem;
  height: fit-content;
}

.footer {
  width: inherit;
  height: 30px;
}
</style>