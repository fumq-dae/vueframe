import Vue from 'vue';

 Vue.directive('tip', {
    inserted: function (el) {
        el.setAttribute("placeholder", "这是一个全局指令测试！");
    },
    bind: function (el, binding, vnode) {
        el.value=binding.value;
    }
});