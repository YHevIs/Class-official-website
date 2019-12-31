<template>
  <div class="bannerThree">
    <div class="banner-text">
      <h1>Class official website</h1>
      <p>They mutually encourage each other.</p>
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
    this.init();
    this.animate();
  },
  methods: {
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