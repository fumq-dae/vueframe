 <!-- 插槽的使用 -->
<template>
  <div>
    <!-- 基本使用 -->
    <div>
      <slot>默认值</slot>
    </div>
    <!-- 具名插槽 -->
    <div>
      <slot name="header">头部导航</slot>
    </div>
    <div>
      <slot name="footer">尾部导航</slot>
    </div>
    <!-- 作用域插槽-处理实体 -->
    <div>
      <slot name="obj" :slotData="info">{{info.subTitle}}</slot>
    </div>
    <!-- 作用域插槽-处理列表 -->
    <ul>
      <li v-for="item in list" v-bind:key="item.name">
        <slot name="arr" v-bind:row="item"></slot>
        <span>{{item.addr}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "solt-test",
  props: ["info", "list"],
  data() {
    return {};
  }
};
</script>

