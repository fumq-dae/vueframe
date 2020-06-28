
// flow

function add(num1:number, num2:number) :number {
    return num1 + num2;
  }
  
  var result = add(1, '2');




class Foo {
    x: string;           // x 必须为字符串类型
    y: string | number;   // y 可以为字符串或数字类型
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }
  // 类实例化
  var foo : Foo = new Foo("hello", {});

  var foo1 : ?string = null;
  foo1={};

//跨域模块 
import {module} from './module';
var result = module(1122);