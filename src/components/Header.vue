<template>
 <div class="header">
  <div class="nav">
    <ul>
      <li><router-link to='./'>首页</router-link></li>
      <li><router-link to='address'>address</router-link></li>
      <li><a>导航2</a></li>
      <li><a>导航3</a></li>
      <li><a>导航4</a></li>
    </ul>
  </div>
  <div class="banner">
      <h1>标题</h1>
      <p>副标题</p>
  </div>
 </div>

</template>

<script>
import RebootHeader from './RebootHeader'
export default {
  name: 'nav-header',
  RebootHeader
}
</script>
<style>
  a{
    text-decoration: none;
  }
  .nav{
    height: 75px;
    background: rgba(0,0,0,.0);
    position:fixed;
    top:0;
    left: 0;
    width: 100%;

  }
  .nav ul{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    font-size: 14px;
    padding: 0 8.5%;

  }
  li{
    list-style-type: none;
    margin: 0 10px;
  }
  .header{
    height: 600px;
    background: #000;

  }
  .banner{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .banner h1{
    margin-bottom: 50px;
  }
  .banner p {
    margin-bottom: 100px;
  }
</style>>