<template>
  <div class="home">
    <MyHome />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import MyHome from "@/components/home/index.vue";
import { siteNavTitle } from "@/utils/tool";

@Component({
  components: {
    HelloWorld,
    MyHome
  }
})
export default class Home extends Vue {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      //获取标题
      siteNavTitle(vm, true, false, "");
    });
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: calc(100vh - 88px);
}
</style>
