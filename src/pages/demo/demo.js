


import focus from "../../dirctives/focus";
import soltTest from "../../components/slot-test";
import dialog from "./custom-dialog"
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
                addr: '北京'
            }, {
                isDone: false,
                name: 'John', 
                addr: '上海'

            }, {
                isDone: false,
                name: 'Red',
                addr: '武汉'
            }],
            count1: 4,
            count2: 6,
            visibleDialog:true

        };
    },
    directives: {
        ...focus
    },
    components: {
        soltTest,
        customDialog:dialog
    },
    methods: {
        M_COUNT_1() {
            this.$store.commit(`demo/M_COUNT_1`, { count: this.count1 });
        },
        M_COUNT_2() {
            this.$store.commit(`demo/M_COUNT_2`, { count: this.count2 });
        }, 
        A_COUNT_1() {

            this.$store.dispatch(`demo/A_COUNT_1`, { count: this.count1 });
        },
        A_COUNT_2() {
            this.$store.dispatch(`demo/A_COUNT_2`, { count: this.count2 });
        },
        $_handleOpened(){
            console.log("$_handleOpened");
        },
        $_handleCancel(){
            console.log("$_handleCancel");
        },
        $_handleConfirm(){
            console.log("$_handleConfirm");
        }

    },
    computed: {
        // count: this.$store.state.count
    },
    mounted() {

    }
}