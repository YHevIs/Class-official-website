<template>
  <div class="inauguration">
    <div
      class="myChart"
      id="myChart_0"
      :style="{ width: '50%', height: '500px' }"
    ></div>
    <div
      class="myChart"
      id="myChart_1"
      :style="{ width: '50%', height: '500px' }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "inauguration",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    window.addEventListener("scroll", this.rollingLoading);
  },
  methods: {
    rollingLoading() {
      var scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 600) {
        var _this = this;
        _this.drawLine();
        window.removeEventListener("scroll", _this.rollingLoading);
      }
    },

    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart_0 = this.$echarts.init(document.getElementById("myChart_0"));
      // 绘制图表1
      myChart_0.setOption({
        backgroundColor: "rgba(0, 0, 0, 0)",

        title: {
          text: "Member",
          left: "center",
          top: 20,
          textStyle: {
            color: "#ccc"
          }
        },

        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
          show: false,
          min: 10,
          max: 38,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: "人员构成",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: [
              { value: 37, name: "男" },
              { value: 11, name: "女" }
            ].sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            label: {
              color: "rgba(255, 255, 255, 0.3)"
            },
            labelLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.3)"
              },
              smooth: 0.2,
              length: 30,
              length2: 25
            },
            itemStyle: {
              color: "#fff",
              shadowBlur: 200,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            },

            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function() {
              return Math.random() * 200;
            }
          }
        ]
      });
      let myChart_1 = this.$echarts.init(document.getElementById("myChart_1"));
      // 绘制图表2
      myChart_1.setOption({
        backgroundColor: "rgba(0, 0, 0, 0)",

        title: {
          text: "Inauguration",
          left: "center",
          top: 20,
          textStyle: {
            color: "#ccc"
          }
        },

        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
          show: false,
          min: 0,
          max: 20,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: "职业构成",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: [
              { value: 2, name: "平面设计" },
              { value: 19, name: "实习生" },
              { value: 1, name: "服装销售" },
              { value: 1, name: "排版" },
              { value: 1, name: "营业员" },
              { value: 1, name: "视频剪辑" },
              { value: 1, name: "客户经理" },
              { value: 1, name: "web前端开发" },
              { value: 3, name: "设计" },
              { value: 1, name: "助理" },
              { value: 1, name: "投诉处理" },
              { value: 1, name: "协勤" },
              { value: 1, name: "美工试用期" },
              { value: 1, name: "储备经理" },
              { value: 1, name: "打包" },
              { value: 2, name: "美工" },
              { value: 1, name: "插画师" },
              { value: 1, name: "仓库" },
              { value: 1, name: "客服" },
              { value: 6, name: "未知" }
            ].sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            label: {
              color: "rgba(255, 255, 255, 0.3)"
            },
            labelLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.3)"
              },
              smooth: 0.2,
              length: 30,
              length2: 25
            },
            itemStyle: {
              color: "#fff",
              shadowBlur: 200,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            },

            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function() {
              return Math.random() * 200;
            }
          }
        ]
      });
    }
  }
};
</script>

<style>
.inauguration {
  padding: 10px 8.5%;
  margin: 30px 0;
  display: flex;
}
</style>
