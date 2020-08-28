let modules = {
    // 模块有相同的属性,用命名空间隔开
    namespaced: true,
    state: {
        count1:1,
        count2:2
    },
    mutations: {
        ["M_COUNT_1"](state, payload) {
            state.count1 =parseFloat (payload.count);
        },
        ["M_COUNT_2"](state, payload) {
            state.count2 = parseFloat(payload.count);
        }
    },
    actions:{
        ["A_COUNT_1"](context,payload){
            setTimeout(()=>{
                context.commit('M_COUNT_1',payload)
            },2000)
        },
        ["A_COUNT_2"](context,payload){
            setTimeout(()=>{
                context.commit('M_COUNT_2',payload)
            },2000)
        }
    },
    getters:{
        count(state){
            return state.count1+state.count2;
        },
        fullInfo(state,getters){
            return `总个数是：${getters.count}`;
        } 
    }
};

export default modules;
