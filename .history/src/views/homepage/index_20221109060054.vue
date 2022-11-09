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
            <box-container :boxTitle="year + '年' + types + '数'">
              <city-count />
            </box-container>
          </div>
          <div class="chart-item">
            <box-container :boxTitle="year + '年' + types + '数占比'">
              <type-count />
            </box-container>
          </div>
          <div class="chart-item">
            <box-container :boxTitle="year + '年' + types + '数占比'">
              <word-chart />
            </box-container>
          </div>
        </div>
      </z-col>
      <z-col :span="10">
        <count-to :value="sum" suffix="万" :speed="20" />
        <select v-model="this.types" placeholder="请选择查询类型" style="margin:0;height:20px; background: none;border-radius: 30px; border: 1px solid #2885c0; color: #2885c0;" @change="upDateType">
          <option v-for="item in typeData" :key="item" :label="item" :value="item"></option>
        </select>
        <div style="width:100%;height:75%">
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
            <box-container :boxTitle="year + '年' + types + '年龄分布'">
              <funnel-chart />
            </box-container>
          </div>
          <div class="chart-item">
            <box-container :boxTitle="year + '年' + types + '市值'">
              <liquid-chart />
            </box-container>
          </div>
          <div class="chart-item">
            <box-container :boxTitle="year + '年' + types + '对比'">
              <line-chart />
            </box-container>
          </div>
        </div>
      </z-col>
    </z-row>
  </div>
</template>

<script>
import store from "@/store/index";
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

const typeData = ["学生", "教师", "学校"];

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
      number: 0,
      types: "",
      typeData
    }
  },
  methods: {
    change(num) {
      this.number = num
    },
    upDateType() {
      this.$store.commit('SET_TYPE',this.types)
    }
  },
  setup() {
    let { year, sum, types, setCommitType } = useResize();

    return {
      year,
      sum,
      types,
      setCommitType
    };
  },
  watch: {
    '$store.state.types':function(val){
      console.log(val);
    }
  }
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
