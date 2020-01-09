<template>
  <div class="time-list" id="time-list">
    <h2>Time list</h2>
    <div id="timelineContainer" class="timelineContainer">
      <div class="timelineMajor">
        <h2 class="timelineMajorMarker">2015</h2>
        <dl class="timelineMinor">
          <dt id="event01">
            <a>Event title</a>
          </dt>
          <dd class="timelineEvent" id="event01EX" style="display: none; ">
            <p>事件内容.</p>
          </dd>
          <!-- /.timelineEvent -->
        </dl>
        <!-- /.timelineMinor -->
        <dl class="timelineMinor">
          <dt id="event02">
            <a>Another thing</a>
          </dt>
          <dd class="timelineEvent" id="event02EX" style="display: none; ">
            <p>内容</p>
          </dd>
          <!-- /.timelineEvent -->
        </dl>
        <!-- /.timelineMinor -->
      </div>
      <div class="timelineMajor">
        <h2 class="timelineMajorMarker">2016</h2>
        <dl class="timelineMinor">
          <dt id="event03">
            <a>Event title</a>
          </dt>
          <dd class="timelineEvent" id="event03EX" style="display: none; ">
            <p>事件内容.</p>
          </dd>
          <!-- /.timelineEvent -->
        </dl>
        <!-- /.timelineMinor -->
        <dl class="timelineMinor">
          <dt id="event4">
            <a>Another thing</a>
          </dt>
          <dd class="timelineEvent" id="event04EX" style="display: none; ">
            <p>内容</p>
          </dd>
          <!-- /.timelineEvent -->
        </dl>
        <!-- /.timelineMinor -->
      </div>
      <div class="timelineMajor">
        <h2 class="timelineMajorMarker">2017</h2>
        <dl class="timelineMinor">
          <dt id="event05">
            <a>Event title</a>
          </dt>
          <dd class="timelineEvent" id="event05EX" style="display: none; ">
            <p>事件内容.</p>
          </dd>
          <!-- /.timelineEvent -->
        </dl>
        <!-- /.timelineMinor -->
        <dl class="timelineMinor">
          <dt id="event6">
            <a>Another thing</a>
          </dt>
          <dd class="timelineEvent" id="event06EX" style="display: none; ">
            <p>内容</p>
          </dd>
          <!-- /.timelineEvent -->
        </dl>
        <!-- /.timelineMinor -->
      </div>
      <div class="timelineMajor">
        <h2 class="timelineMajorMarker">2018</h2>
        <dl class="timelineMinor">
          <dt id="event07">
            <a>Event title</a>
          </dt>
          <dd class="timelineEvent" id="event07EX" style="display: none; ">
            <p>Another thing</p>
          </dd>
          <!-- /.timelineEvent -->
        </dl>
        <!-- /.timelineMinor -->
        <dl class="timelineMinor">
          <dt id="event8">
            <a>Another thing</a>
          </dt>
          <dd class="timelineEvent" id="event08EX" style="display: none; ">
            <p>内容</p>
          </dd>
          <!-- /.timelineEvent -->
        </dl>
        <!-- /.timelineMinor -->
      </div>
      <div class="timelineMajor">
        <h2 class="timelineMajorMarker">2019</h2>
        <dl class="timelineMinor">
          <dt id="event09">
            <a>Event title</a>
          </dt>
          <dd class="timelineEvent" id="event09EX" style="display: none; ">
            <p>事件内容.</p>
          </dd>
          <!-- /.timelineEvent -->
        </dl>
        <!-- /.timelineMinor -->
        <dl class="timelineMinor">
          <dt id="event10">
            <a>Another thing</a>
          </dt>
          <dd class="timelineEvent" id="event10EX" style="display: none; ">
            <p>内容</p>
          </dd>
          <!-- /.timelineEvent -->
        </dl>
        <!-- /.timelineMinor -->
      </div>
      <div class="timelineMajor">
        <h2 class="timelineMajorMarker">2020</h2>
        <dl class="timelineMinor">
          <dt id="event11">
            <a>Event title</a>
          </dt>
          <dd class="timelineEvent" id="event11EX" style="display: none; ">
            <p>事件内容.</p>
          </dd>
          <!-- /.timelineEvent -->
        </dl>
        <!-- /.timelineMinor -->
        <dl class="timelineMinor">
          <dt id="event12">
            <a>Another thing</a>
          </dt>
          <dd class="timelineEvent" id="event12EX" style="display: none; ">
            <p>内容</p>
          </dd>
          <!-- /.timelineEvent -->
        </dl>
        <!-- /.timelineMinor -->
      </div>
      <!-- /.timelineMajor -->
    </div>
    <!-- /#timelineContainer -->
  </div>
</template>

<script>
import anime from "animejs";
export default {
  name: "time-list",
  mounted() {
    anime({
      targets: ".css-prop-demo",
      backgroundColor: "#FFF",
      borderRadius: ["0%", "50%"],
      easing: "easeInOutQuad",
      // width:'1000',
      duration: 1000
    });
  }
};
</script>

<style>
.time-list {
  width: 60%;
  padding: 20px;
}
.timeListButton {
  background: #f9f9f9;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.35);
}
.timelistButtonBackground {
  background: #f9f9f9;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}


@media screen and (max-width: 500px) {
  .timelineMajor h2{
    font-size: 24px;
  }
}
</style>
