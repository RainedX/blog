(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"0tuc":function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),c=a("dEAq"),r=a("ZpkN");a("JjdP");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u57fa\u672c\u6982\u5ff5"},l.a.createElement(c["AnchorLink"],{to:"#\u57fa\u672c\u6982\u5ff5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u6982\u5ff5"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u7c7b\uff1a\u5b9a\u4e49\u4e86\u4e00\u4ef6\u4e8b\u7269\u7684\u62bd\u8c61\u7279\u70b9\uff0c\u5305\u542b\u5b83\u7684\u5c5e\u6027\u548c\u65b9\u6cd5"),l.a.createElement("li",null,"\u9762\u5411\u5bf9\u8c61\u4e09\u5927\u7279\u6027\uff1a\u5c01\u88c5\u3001\u7ee7\u627f\u3001\u591a\u6001"),l.a.createElement("li",null,"\u5b58\u53d6\u5668\uff08getter & setter\uff09\uff1a\u7528\u4ee5\u6539\u53d8\u5c5e\u6027\u7684\u8bfb\u53d6\u548c\u8d4b\u503c\u884c\u4e3a"),l.a.createElement("li",null,"\u4fee\u9970\u7b26\uff1a\u4fee\u9970\u7b26\u662f\u4e00\u4e9b\u5173\u952e\u5b57\uff0c\u7528\u4e8e\u9650\u5b9a\u6210\u5458\u6216\u7c7b\u578b\u7684\u6027\u8d28\u3002\u6bd4\u5982",l.a.createElement("code",null,"public"),"\u3001",l.a.createElement("code",null,"protected")," \u3001",l.a.createElement("code",null,"private")),l.a.createElement("li",null,"\u62bd\u8c61\u7c7b(abstract)\uff1a\u62bd\u8c61\u7c7b\u662f\u4f9b\u5176\u4ed6\u7c7b\u7ee7\u627f\u7684\u57fa\u7c7b\uff0c",l.a.createElement("strong",null,"\u62bd\u8c61\u7c7b\u4e0d\u5141\u8bb8\u88ab\u5b9e\u4f8b\u5316\uff0c\u62bd\u8c61\u7c7b\u4e2d\u7684\u62bd\u8c61\u65b9\u6cd5\u5fc5\u987b\u5728\u5b50\u7c7b\u4e2d\u88ab\u5b9e\u73b0\uff0c\u4e00\u4e2a\u7c7b\u53ea\u80fd\u7ee7\u627f\u81ea\u53e6\u4e00\u4e2a\u7c7b(extends)")),l.a.createElement("li",null,"\u63a5\u53e3\uff08Interfaces\uff09\uff1a\u4e0d\u540c\u7c7b\u4e4b\u95f4\u516c\u6709\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\uff0c\u53ef\u4ee5\u62bd\u8c61\u6210\u4e00\u4e2a\u63a5\u53e3\uff0c",l.a.createElement("strong",null,"\u7c7b\u53ef\u4ee5\u7ee7\u627f(implements)\u591a\u4e2a\u63a5\u53e3"))),l.a.createElement("h2",{id:"es6-\u4e2d\u7684\u7c7b"},l.a.createElement(c["AnchorLink"],{to:"#es6-\u4e2d\u7684\u7c7b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"es6 \u4e2d\u7684\u7c7b"),l.a.createElement(r["a"],{code:"class Animal {\n  public name;\n  public age;\n\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n\n  static sayHello() {\n    console.log('hello');\n  }\n}\n\nclass Dog extends Animal {\n  constructor(name, age) {\n    super(name, age); // \u8c03\u7528\u7236\u7c7b\u7684 constructor(name, age)\n  }\n}",lang:"javascript"}),l.a.createElement("h2",{id:"es7-\u4e2d\u7684\u7c7b"},l.a.createElement(c["AnchorLink"],{to:"#es7-\u4e2d\u7684\u7c7b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"es7 \u4e2d\u7684\u7c7b"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"es6"),"\u4e2d\u5b9e\u4f8b\u7684\u5c5e\u6027\u53ea\u80fd\u901a\u8fc7\u6784\u9020\u51fd\u6570\u4e2d\u7684",l.a.createElement("code",null,"this.name = xxx"),"\u6765\u5b9a\u4e49\uff0c",l.a.createElement("code",null,"es7"),"\u4e2d\u53ef\u4ee5\u76f4\u63a5\u5728\u7c7b\u91cc\u9762\u5b9a\u4e49\uff1a")),l.a.createElement(r["a"],{code:"class Animal {\n  name = 'Rain';\n\n  constructor() {\n    /*...*/\n  }\n}\n\nlet a = new Animal();\nconsole.log(a.name); // Rain",lang:"javascript"}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"es6"),"\u5c5e\u6027\u4e0d\u53ef\u4ee5\u4f7f\u7528",l.a.createElement("code",null,"static"),"\u63cf\u8ff0\uff0c",l.a.createElement("code",null,"es7"),"\u53ef\u4ee5\u4f7f\u7528",l.a.createElement("code",null,"static"),"\u5b9a\u4e49\u4e00\u4e2a\u9759\u6001\u5c5e\u6027\uff1a")),l.a.createElement(r["a"],{code:"class Animal {\n  static name = 'Rain';\n\n  constructor() {\n    /*...*/\n  }\n}\n\nconsole.log(Animal.name); // Rain",lang:"javascript"}),l.a.createElement("h2",{id:"ts-\u4e2d\u7684\u7c7b"},l.a.createElement(c["AnchorLink"],{to:"#ts-\u4e2d\u7684\u7c7b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"ts \u4e2d\u7684\u7c7b"),l.a.createElement("h3",{id:"\u57fa\u672c\u4f7f\u7528"},l.a.createElement(c["AnchorLink"],{to:"#\u57fa\u672c\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u4f7f\u7528"),l.a.createElement(r["a"],{code:"class Animal {\n  public name!: string; // !\u975e\u7a7a\u65ad\u8a00\n  public age!: number;\n\n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n\n  static sayHello() {\n    console.log('hello');\n  }\n}",lang:"javascript"}),l.a.createElement("h3",{id:"\u4fee\u9970\u7b26"},l.a.createElement(c["AnchorLink"],{to:"#\u4fee\u9970\u7b26","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4fee\u9970\u7b26"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"public"),"\u8c01\u90fd\u53ef\u4ee5\u8bbf\u95ee\u5230"),l.a.createElement("li",null,l.a.createElement("code",null,"protected"),"\u81ea\u5df1\u548c\u5b50\u7c7b\u53ef\u4ee5\u8bbf\u95ee\u5230\uff0c\u5b50\u7c7b\u7684\u5b9e\u4f8b\u65e0\u6cd5\u8bbf\u95ee")),l.a.createElement(r["a"],{code:"class Animal {\n  public name!: string;\n  protected constructor(name: string) {\n    this.name = name;\n  }\n}\nclass Cat extends Animal {\n  constructor(name: string) {\n    super(name);\n  }\n}\n\n// \u9519\u8bef protected\u4fee\u9970\u6784\u9020\u51fd\u6570\u4fee\u65f6\uff0c\u8be5\u7c7b\u53ea\u5141\u8bb8\u88ab\u7ee7\u627f\nlet a = new Animal('Rain');",lang:"javascript"}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"private"),"\u9664\u4e86\u81ea\u5df1\u90fd\u8bbf\u95ee\u4e0d\u5230\uff0c\u5f53\u6784\u9020\u51fd\u6570\u4fee\u9970\u4e3a",l.a.createElement("code",null,"private"),"\u65f6\uff0c\u8be5\u7c7b\u4e0d\u5141\u8bb8\u88ab\u7ee7\u627f\u6216\u5b9e\u4f8b\u5316")),l.a.createElement(r["a"],{code:"class Animal {\n  public name!: string;\n  private constructor(name: string) {\n    this.name = name;\n  }\n}\n// \u9519\u8bef private\u4fee\u9970\u6784\u9020\u51fd\u6570\u4e0d\u5141\u8bb8\u88ab\u7ee7\u627f\nclass Cat extends Animal {\n  constructor(name: string) {\n    super(name);\n  }\n}\n// \u9519\u8bef private\u4fee\u9970\u6784\u9020\u51fd\u6570\u4e0d\u5141\u8bb8\u88ab\u5b9e\u4f8b\u5316\nlet a = new Animal('Rain');",lang:"javascript"}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"readonly"),"\u53ea\u8bfb\u4fee\u9970\u7b26")),l.a.createElement(r["a"],{code:"class Animal {\n  public readonly name!: string;\n  constructor(name: string) {\n    this.name = name;\n  }\n\n  updateName(name: string) {\n    // \u9519\u8bef\uff0cname\u65f6\u53ea\u8bfb\u5c5e\u6027\uff0c\u53ea\u80fd\u5728constructor\u521d\u59cb\u5316\n    this.name = name;\n  }\n}",lang:"javascript"}),l.a.createElement("h3",{id:"\u9759\u6001\u5c5e\u6027\u548c\u65b9\u6cd5"},l.a.createElement(c["AnchorLink"],{to:"#\u9759\u6001\u5c5e\u6027\u548c\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u9759\u6001\u5c5e\u6027\u548c\u65b9\u6cd5"),l.a.createElement(r["a"],{code:"// \u9759\u6001\u5c5e\u6027\u548c\u65b9\u6cd5\u662f\u53ef\u4ee5\u88ab\u5b50\u7c7b\u7ee7\u627f\nclass Animal {\n    static type = 'animal';\n    static sayHello() {\n        return 'hello';\n    }\n    private _name: string = 'Rain';\n\n    get name() { // \u5c5e\u6027\u8bbf\u95ee\u5668\n        return this._name;\n    }\n    set name(name: string) {\n        this._name = name;\n    }\n}\nlet animal = new Animal();\nconsole.log(animal.name);",lang:"javascript"}),l.a.createElement("p",null,l.a.createElement("strong",null,"\u9759\u6001\u65b9\u6cd5\u548c\u666e\u901a\u65b9\u6cd5\u4e2d",l.a.createElement("code",null,"super"),"\u4ee3\u8868\u7684\u542b\u4e49\u4e0d\u540c")),l.a.createElement(r["a"],{code:"class Animal {\n  static type = 'animal';\n  public name!: string;\n\n  constructor(name: string) {\n    this.name = name;\n  }\n\n  static sayHello() {\n    return 'hello';\n  }\n\n  eat() {\n    console.log('eat');\n  }\n}\n\nclass Cat extends Animal {\n  constructor(name: string) {\n    super(name); // super ===> Animal.call(Cat, ...args)\n  }\n\n  static sayHello() {\n    let res = super.sayHello(); // super ===> Animal\n\n    return res + ' world';\n  }\n\n  eat() {\n    // super\u6307\u4ee3\u7236\u7c7b\u7684\u539f\u578b\n    super.eat(); // super ===> Animal.prototype\n  }\n  // sleep\u76f8\u5f53\u4e8e\u6302\u8f7d\u5230Cat.prototype\u4e0a\u5c5e\u6027\n  get sleep() {\n    return 'sleep';\n  }\n}\n\nlet tom = new Cat('Tom');\nconsole.log(tom.sleep); // sleep",lang:"javascript"}),l.a.createElement("h2",{id:"\u62bd\u8c61\u7c7b"},l.a.createElement(c["AnchorLink"],{to:"#\u62bd\u8c61\u7c7b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u62bd\u8c61\u7c7b"),l.a.createElement("p",null,"\u62bd\u8c61\u7c7b\u4e0d\u53ef\u4ee5\u88ab\u5b9e\u4f8b\u5316"),l.a.createElement(r["a"],{code:"namespace d {\n  abstract class Animal {\n    abstract name: string;\n  }\n\n  class Dog extends Animal {\n    name = 'rain';\n  }\n}",lang:"javascript"}),l.a.createElement("p",null,l.a.createElement("strong",null,"\u6700\u540e\u8865\u5145\u4e00\u4e0b\uff1a\u6211\u4eec\u518d ts \u4e2d\u8868\u793a\u7c7b\u7684\u7c7b\u578b\uff1f")),l.a.createElement(r["a"],{code:"class Person {\n  constructor(public name: string) {\n    this.name = name;\n  }\n}\n\n// \u8868\u793a\u4e00\u4e2a\u6784\u9020\u51fd\u6570\u7c7b\u578b\ntype IConstructor<T> = new (name: string) => T;\n\n//  \u4e5f\u53ef\u4ee5\u7528\u63a5\u53e3\u8868\u793a\n// interface IConstructor<T> {\n//   new (name: string): T;\n// }\n\nfunction createIntance<T>(constructor: IConstructor<T>, name: string) {\n  return new constructor(name);\n}\n\nconst instance = createIntance<Person>(Person, 'rain');\n\nconsole.log(instance.name);",lang:"javascript"})))}}}]);