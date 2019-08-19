<template>
  <div class="confirm" v-if="isShow">
    <div class="con_box">
      <div class="context">
        <h6>{{text.type}}</h6>
        <p>{{text.msg}}</p>
        <div class="btn">
          <span @click="close()" v-if="text.btn.no">{{text.btn.no}}</span>
          <span @click="ok()" v-if="text.btn.ok">{{text.btn.ok}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: true,
      text: {
        type: "提示",
        msg: "确定删除此条信息？",
        btn: {
          ok: "确定",
          no: "取消"
        }
      }
    };
  },
  methods: {
    close() {
      console.log("关闭");
    },
    ok() {
      console.log("确定");
    }
  }
};
</script>
<style scoped>
.confirm {
  /* background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  /* 这里防止当用户长按屏幕，出现的黑色背景色块，以及 iPhone 横平时字体的缩放问题 */
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.con_box {
  width: 75%;
  height: 22%;
  background-color: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 5px;
}
.context {
  padding: 10px;
}
.context h6 {
  padding-top: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: #333;
}
.context p {
  padding: 0 15px;
  padding-top: 20px;
  margin-bottom: 32px;
  text-align: center;
  font-size: 16px;
  color: #666;
  line-height: 1.5;
}

.btn {
  display: flex;
  border-top: 1px solid #eee;
}
.btn span {
  flex: 1;
  display: block;
  text-align: center;
  font-size: 16px;
  margin: 3px 0;
  padding: 6px 0;
}
.btn span:nth-child(1) {
  /* background-color: #f1f1f1; */
  /* color: rgb(106, 223, 223); */
  color: #666;
  border-right: 1px solid #eee;
}
.btn span:nth-child(2) {
  color: #ffb000;
}

/* 进来的动画 */
@keyframes opacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes scale {
  0% {
    transform: scale(0);
  }
  60% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* 出去的动画 */
@keyframes outOpacity {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>

