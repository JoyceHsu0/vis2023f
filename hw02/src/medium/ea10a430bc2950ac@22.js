function _1(md){return(
md`# HW2 Medium baseline (3pt)`
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

function _yCounts(){return(
[]
)}

function _years(data){return(
data.map(item => item.year)
)}

function _5(yCounts,years,data)
{
  yCounts.length = 0; //將yCounts清空
  var minYear = Math.min(...years); //最早出生年
  var maxYear = Math.max(...years); //最晚出生年
  for (var y=minYear; y<=maxYear; y++) { 
    //所有年份都建立兩個Object，一個存放男性資料，一個存放女性資料
    yCounts.push({year:y, gender:"male", count:0}); 
    //Object包含：1. 出生年，2.男性，3.人數(設為0)
    yCounts.push({year:y, gender:"female", count:0}); 
    //Object包含：1. 出生年，2.女性，3.人數(設為0)
  }
  data.forEach (x=> {
    var i = (x.year-minYear)*2 + (x.gender=="male" ? 0 : 1); 
    yCounts[i].count++;
    //讀取data array，加總每個年份出生的人
  })
  return yCounts
}


function _6(Plot,yCounts){return(
Plot.plot({
  
  grid: true,
  y: {label: "count"},
  marks: [
    Plot.ruleY([0]),
    Plot.barY(yCounts, {x: "year", y: "count"}),
  ]
})
)}

function _plot2(Inputs){return(
Inputs.form({
  mt:  Inputs.range([0, 100], {label: "marginTop", step: 1}),
  mr:  Inputs.range([0, 100], {label: "marginRight", step: 1}),
  mb:  Inputs.range([0, 100], {label: "marginBottom", step: 1}),
  ml:  Inputs.range([0, 100], {label: "marginLeft", step: 1}),
})
)}

function _8(Plot,plot2,yCounts){return(
Plot.plot({
  marginTop: plot2.mt,
  marginRight: plot2.mr,
  marginBottom: plot2.mb,
  marginLeft: plot2.ml,
  
  grid: true,
  y: {label: "count"},
  marks: [
    Plot.ruleY([0]),
    Plot.barY(yCounts, {x: "year", y: "count", tip: true , fill:"gender"}),
  ]
})
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("data")).define("data", _data);
  main.variable(observer("yCounts")).define("yCounts", _yCounts);
  main.variable(observer("years")).define("years", ["data"], _years);
  main.variable(observer()).define(["yCounts","years","data"], _5);
  main.variable(observer()).define(["Plot","yCounts"], _6);
  main.variable(observer("viewof plot2")).define("viewof plot2", ["Inputs"], _plot2);
  main.variable(observer("plot2")).define("plot2", ["Generators", "viewof plot2"], (G, _) => G.input(_));
  main.variable(observer()).define(["Plot","plot2","yCounts"], _8);
  return main;
}
