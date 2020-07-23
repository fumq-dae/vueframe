


import focus from "../../dirctives/focus";
import soltTest from "../../components/slot-test";
export default {
    data() {
        return {
            name: "fumq",
            age: 31,
            msg: "消息",
            info: {
                title: "标题",
                subTitle: "子标题"
            },
            list: [{
                isDone: true,
                name: 'Tom',
                addr:'北京'
            }, {
                isDone: false,
                name: 'John',
                addr:'上海'
                
            }, {
                isDone: false,
                name: 'Red',
                addr:'武汉'
            }]

        };
    },
    directives: {
        ...focus
    },
    components: {
        soltTest
    },
}