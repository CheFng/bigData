<template>
  <div class="home-container">
    <z-row :gutter="15">
      <z-col :span="7">

        <div class="echartList">
          <dv-decoration-7 class="btn-box">
            <button class="button" @click="change(0)">
              <dv-decoration-11 id="btn1" class="btn">基础数据</dv-decoration-11>
            </button>
            <button class="button" @click="change(1)">
              <dv-decoration-11 id="btn2" class="btn">面积数据</dv-decoration-11>
            </button>
          </dv-decoration-7>
          <div class="chart-item">
            <box-container :boxTitle="year + '年销售额度排名'">
              <city-count />
            </box-container>
          </div>
          <div class="chart-item">
            <box-container :boxTitle="year + '年销售种类占比'">
              <type-count />
            </box-container>
          </div>
          <div class="chart-item">
            <box-container :boxTitle="year + '年销售品牌占比'">
              <word-chart />
            </box-container>
          </div>
        </div>
      </z-col>
      <z-col :span="10">
        <count-to :value="sum" suffix="万" :speed="20" />
        <div style="width:100%;height:85%">
          <scatter-map />
        </div>
      </z-col>
      <z-col :span="7">
        <div class="echartList">
          <dv-decoration-7 class="btn-box">
            <button class="button" @click="change(2)">
              <dv-decoration-11 id="btn1" class="btn">设备可视化</dv-decoration-11>
            </button>
            <button class="button" @click="change(3)">
              <dv-decoration-11 id="btn2" class="btn">人数可视化</dv-decoration-11>
            </button>
          </dv-decoration-7>
          <div class="chart-item">
            <box-container :boxTitle="year + '年客户年龄分布'">
              <funnel-chart />
            </box-container>
          </div>
          <div class="chart-item">
            <box-container :boxTitle="year + '年公司市值'">
              <liquid-chart />
            </box-container>
          </div>
          <div class="chart-item">
            <box-container :boxTitle="year + '年同行业销售额度对比'">
              <line-chart />
            </box-container>
          </div>
        </div>
      </z-col>
    </z-row>
  </div>
</template>

<script>
import { ZRow, ZCol } from "@UI/components";
import boxContainer from "@/components/boxContainer/index";
import fourAngel from "@/components/fourAngel/index";
import countTo from "@/components/countTo/index";
import {
  cityCount,
  typeCount,
  scatterMap,
  wordChart,
  funnelChart,
  lineChart,
  liquidChart,
} from "./components";
import useResize from "@/componentApi/useResize.js";
import { ref } from "vue";

export default {
  name: "homepage",
  components: {
    ZRow,
    ZCol,
    boxContainer,
    cityCount,
    typeCount,
    scatterMap,
    wordChart,
    funnelChart,
    lineChart,
    liquidChart,
    fourAngel,
    countTo,
  },
  data() {
    return {
      number: 0
    }
  },
  methods: {
    change(num) {
      this.number = num
    }
  },
  setup(props, context) {
    const { year, sum } = useResize();

    return {
      year,
      sum,
    };
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100%;
  position: relative;

  .echartList {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;

    .chart-item {
      height: 30.0%;
      width: 100%;
    }
    .btn-box {
  height: 20px;
  margin: 5%;
}
.button {
  background-color: transparent;
  border-style: none;
}
.btn {
  width: 130px;
  height: 45px;
  color: #fff;
}
  }
}
</style>
