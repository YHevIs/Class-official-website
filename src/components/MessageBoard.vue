<template>
  <div class="message-board">
    <h2>Message Board</h2>
    <ul class="messages">
      <li class="message">
        <div class="messageHead">
          <div class="head-img"><img src="" alt="" /></div>
          <span>name</span>
          <div class="Uas">
            <p>Ua</p>
            <p>Ua</p>
          </div>
        </div>
        <div class="messageMain">
          <p class="messageText">
            留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言
            留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言
            留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言
          </p>
        </div>
      </li>
      <li class="message">
        <div class="messageHead">
          <div class="head-img"><img src="" alt="" /></div>
          <span>name</span>
          <div class="Uas">
            <p>Ua</p>
            <p>Ua</p>
          </div>
        </div>
        <div class="messageMain">
          <p class="messageText">
            留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言
            留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言
            留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言
            留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言
            留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言
            留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "message-board",

  mounted() {
    window.addEventListener("scroll", this.rollingLoading);

    // this.show("messageText");
    let messageDom = document.getElementsByClassName("messageText");
    for (let message = 0 ; message < messageDom.length ; message ++){
      this.show(messageDom[message])
    }
    window.console.log(document.getElementsByClassName("messageText"))
  },
  methods: {
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
@media screen and (max-width: 500px){
  .messageText{
    font-size: 18px;
  }
}
</style>
