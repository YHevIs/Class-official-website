<template>
  <div class="bannerThree">
    <div class="banner-text">
      <h1>Class official website</h1>
      <p>With memory,with fantasy,to life,to the motherland in all directions.</p>
    </div>
  </div>
</template>

<script>
import * as Three from "three";
export default {
  name: "banner-three",
  data: function() {
    return {};
  },
  mounted() {
    //初始化
    this.init();
    this.animate();
    this.$notify({
          title: '初始化',
          message: 'Banner3D渲染初始化完成',
          type: "success"
        });
  },
  methods: {
    //banner动画初始化
    init: function() {
      let container = document.getElementById("container");

      this.camera = new Three.PerspectiveCamera(
        70,
        container.clientWidth / container.clientHeight,
        0.01,
        10
      );
      this.camera.position.z = 1;

      this.scene = new Three.Scene();

      let geometry = new Three.BoxGeometry(0.35, 0.35, 0.35);
      let material = new Three.MeshNormalMaterial();

      this.mesh = new Three.Mesh(geometry, material);
      this.scene.add(this.mesh);

      this.renderer = new Three.WebGLRenderer({ antialias: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);
    },
    //banner动画update
    animate: function() {
      requestAnimationFrame(this.animate);
      this.mesh.rotation.x == 0.99 ? this.mesh.rotation.x = 0 : this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y == 0.98 ? this.mesh.rotation.y = 0 : this.mesh.rotation.y += 0.02;
      this.renderer.render(this.scene, this.camera);
    }
  }
};
</script>
<style>
.banner-text {
  position: absolute;
}
.banner-text{
  display: flex;
  flex-direction: column;
  align-items:center;
}
p{
  font-size: 12px;
  opacity: .5;
}
</style>