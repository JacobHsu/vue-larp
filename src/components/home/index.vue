<template>
  <div>
    <!-- <LunBo :data-list="lunboList" /> -->
    <!-- <Fun /> -->
    <section class="fiction-wrapper">
      <NavHeader :is-more="false" title="热门小说" desc="起点编辑推荐" />
    </section>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { Component, Vue } from "vue-property-decorator";
import Fun from "./Fun.vue";
import LunBo from "./LunBo.vue";
import NavHeader from "@/components/common/NavHeader.vue";

@Component({
  components: {
    LunBo,
    Fun,
    NavHeader
  },
  computed: mapGetters(["lunboList"])
})
export default class Chome extends Vue {
  private newFictionList!: any[];
  private created() {
    this._getHomeData();
  }
  async _getHomeData() {
    await this.$store.dispatch("getLunbo");
  }
}
</script>

<style lang="scss" scoped>
.fiction-wrapper {
  background-color: #ffffff;
  margin-top: 20px;
}
.white-space {
  width: 100%;
  height: 80px;
}
.time {
  display: inline-block;
  .time-day,
  .time-hour,
  .time-minute,
  .time-second {
    font: 400 20px "DIN Alternate";
    position: relative;
    display: inline-block;
    width: 28px;
    margin-right: 10px;
    padding-top: 2px;
    text-align: center;
    vertical-align: middle;
    color: #fff;
    border-radius: 4px;
    background-color: #33373d;
  }
  .time-day {
    background-color: #ed424b;
  }
  .time-hour::before,
  .time-minute::before,
  .time-second::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -6px;
    width: 2px;
    height: 4px;
    margin: auto;
    content: "";
    transform: translateY(-6px);
    border-radius: 2px;
    background-color: #969ba3;
    box-shadow: 0 10px #969ba3;
  }
}
</style>
