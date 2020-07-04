import { pull } from "lodash";

 class common {
    print_(str) {
        console.log(`______${str}`);
    }
    print(str, char = "*") {
        console.log(`${char}${str}`);
    }
}
let i=new common()
export default i;
export function fun(){
  console.log("UrlProxy1");   
}
