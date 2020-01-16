<template>
  <div class="message-board">
    <h2>Message Board</h2>
    <ul class="messages">
      <li class="message" v-for="message in messages" :key="message.id">
        <div class="messageHead">
          <div class="head-img"><img src="" alt="" /></div>
          <span> {{ message.username }}</span>
          <div class="Uas">
            <p>{{ !message.ua ? message.ua = '未知' : message.ua }}</p>
            <p>{{ !message.os ? message.os = '未知' : message.os}}</p>
          </div>
        </div>
        <div class="messageMain">
          <p class="messageText">
            {{ message.message }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "message-board",
  data: function() {
    return {
      messages: []
    };
  },
  mounted() {
    window.addEventListener("scroll", this.rollingLoading);
    this.messageInit();

    let messageDom = document.getElementsByClassName("messageText");
    for (let message = 0; message < messageDom.length; message++) {
      this.show(messageDom[message]);
    }
  },
  methods: {
    messageInitresOk(title, message) {
      this.$notify({
        title: title,
        message: message,
        type: 'success',
      });
     
    },
    messageInit() {
      this.getlist(
        "http://localhost/Class-official-website/public/index.php/api/messageBoard",
        res => {
          this.messages = res;
          console.log(res);
          this.messageInitresOk("初始化", "留言板数据初始化完成");
        }
      );
    },
    getlist(url, cb) {
      axios
        .get(url)
        .then(res => {
          if (res) {
            cb && cb(res.data);
          }
        })
        .catch(() => {});
    },
    show(dom) {
      var box = dom;
      var text = box.innerHTML;
      var newBox = document.createElement("div");
      var btn = document.createElement("a");
      newBox.innerHTML = text.substring(0, 100);
      btn.innerHTML = text.length > 100 ? "...显示全部" : "";
      btn.href = "###";
      btn.onclick = function() {
        if (btn.innerHTML == "...显示全部") {
          btn.innerHTML = "收起";
          newBox.innerHTML = text;
        } else {
          btn.innerHTML = "...显示全部";
          newBox.innerHTML = text.substring(0, 100);
        }
      };
      box.innerHTML = "";
      box.appendChild(newBox);
      box.appendChild(btn);
    }
  }
};
</script>

<style>
.Uas {
  display: flex;
  align-items: center;
}
.Uas p {
  color: rgb(255, 255, 255);
  background: rgba(255, 255, 255, 0.329);
  margin: 0 4px;
  padding: 2px 4px;
  border-radius: 2px;
}
.message {
  background: #000;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
}
.messageMain {
  margin: 10px 0 0;
}
.message-board {
  padding: 10px 20px;
  width: 100%;
}
.head-img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
}
.messageHead {
  display: flex;
  align-items: center;
  border-bottom: outset 1px #fff;
  padding-bottom: 10px;
}
.messageHead span {
  margin: 0 10px;
}
.el-notification__content {
  color: #606266 !important;
}
@media screen and (max-width: 500px) {
  .messageText {
    font-size: 18px;
  }
}
</style>
