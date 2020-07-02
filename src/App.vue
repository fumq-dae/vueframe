<template>
  <div>
    <div class="sassTest">测试sass</div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "./assets/css/common/common.css";
@import './App.scss';
$color: red;
.sassTest{
  color:$color;
//  background-color: $background-color;
  font-size: $big;
}
</style>
