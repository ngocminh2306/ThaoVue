<template>
   <div>
       <!-- <hzqing-vue-timeline 
        timelineColor="#f67aa8"  
        timeContentColor="#fff"
        :dataList="data">
        </hzqing-vue-timeline> -->
    <Snowf
      :amount="100"
      :size="8"
      :speed="0.6"
      :wind="0"
      :opacity="1"
      :swing="1"
      :image="null"
      :zIndex="-1"
      :resize="true"
      color="#fff"
    />
    <div class="" id="messengerThao">
   </div>
   <div class="text-cmt" id="comment">
    <div>Làm cái này anh nhận ra anh chả biết chút gì về Thảo cả Thảo ạ =)))</div>
    <div>Đến 1 cái ảnh để ghép vào cũng không có =))</div>
    <span>
      希望我们有梗多机会接触互相了解。
    </span>
    </div>
  </div>
</template>

<script>
import Snowf from "vue-snowf";
export default {
  components: {
    Snowf
  },
  data() {
    return {
      // price: 200,
      // data: [
      //   {
      //     time: 1522372393000,
      //     img: "static/touxiang.jpeg",
      //     title: "hzqing.com",
      //     content: "这是衡钊清的个人博客"
      //   },
      //   {
      //     time: "2018-03-30 14:36:35",
      //     img: "static/one.jpeg",
      //     title: "这是一个简单的vue时间轴插件",
      //     content: "这是一个简单的vue时间轴插件，使用非常的方便"
      //   },
      //   {
      //     time: 1522372393000,
      //     img: "static/three.jpg",
      //     title: "努力奋斗",
      //     content: "当你发现你的才华撑不起野心时，就请安静下来学习吧~~~"
      //   }
      // ]
    };
  },
  methods: {
    // clicking() {
    //   this.price = this.price + 100;
    // }
  }
};
</script>
<style lang="css">
.text-cmt {
  color: aliceblue;
  font-size: 24px;
  font-family: "Space Mono", monospace;
}
#messengerThao {
  left: 29%;
  background-image: url("../assets/thao7.png");
  background-repeat: no-repeat;
  height: 730px;
  width: 745px;
  position: absolute;
  margin-top: 120px;
  /* overflow: hidden; */
}
</style>

 