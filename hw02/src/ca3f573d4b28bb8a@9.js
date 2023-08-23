function _1(md){return(
md`# Data`
)}

function _data(){return(
[{name:"a", year: 1997, sign:4, gender:"female"},
        {name:"#", year: 1997, sign:2, gender:"male"},
       {name:"b", year: 1998, sign:4, gender:"female"},
       {name:"c", year: 1998, sign:2, gender:"male"},
       {name:"d", year: 1998, sign:7, gender:"male"},
       {name:"e", year: 1999, sign:0, gender:"male"},
       {name:"f", year: 1999, sign:7, gender:"female"},
       {name:"g", year: 1999, sign:11, gender:"male"},
       {name:"h", year: 1999, sign:9, gender:"female"},
       {name:"i", year: 2000, sign:7, gender:"male"},
       {name:"j", year: 2000, sign:7, gender:"male"},
       {name:"k", year: 2000, sign:11, gender:"female"},
       {name:"l", year: 2000, sign:5, gender:"female"},
       {name:"m", year: 2000, sign:5, gender:"male"},
       {name:"n", year: 2000, sign:11, gender:"male"},
       {name:"o", year: 2000, sign:11, gender:"male"},
       {name:"p", year: 2000, sign:11, gender:"male"},
       {name:"q", year: 2001, sign:11, gender:"female"},
       {name:"@", year: 2001, sign:0, gender:"female"},
       {name:"r", year: 2001, sign:11, gender:"male"},
       {name:"s", year: 2001, sign:5, gender:"female"},
       {name:"t", year: 2001, sign:5, gender:"female"},
       {name:"u", year: 2001, sign:11, gender:"male"},
       {name:"v", year: 2001, sign:6, gender:"male"},
       {name:"w", year: 2001, sign:7, gender:"female"},
       {name:"x", year: 2001, sign:5, gender:"female"},
       {name:"y", year: 2001, sign:5, gender:"male"},
       {name:"z", year: 2001, sign:4, gender:"female"},
       {name:"!", year: 2002, sign:0, gender:"male"},
       {name:"$", year: 2002, sign:9, gender:"male"},]
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("data")).define("data", _data);
  return main;
}
