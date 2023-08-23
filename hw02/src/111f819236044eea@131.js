import define1 from "./ca3f573d4b28bb8a@9.js";

function _1(md){return(
md`# HW2
`
)}

function _3(md){return(
md`## _Simple baseline (3pt)_`
)}

function _4(md){return(
md`### 1. 以histogram呈現每個年份出生的人數 (2pt)`
)}

function _5(Plot,data){return(
Plot.plot({
  width:400,   
  y: {grid: true, label: "count"},
  marks: [
    Plot.rectY(data, Plot.binX({y:"count"}, { x:"year", interval: 1 })),
    Plot.gridY({ interval: 1, stroke: "white", strokeOpacity: 0.5 }),
  ]
})
)}

function _6(md){return(
md`### 2. 可調整margin, fill color,  tip (1pt)`
)}

function _plot1(Inputs){return(
Inputs.form({
  mt:  Inputs.range([0, 100], {label: "marginTop", step: 1}),
  mr:  Inputs.range([0, 100], {label: "marginRight", step: 1}),
  mb:  Inputs.range([0, 100], {label: "marginBottom", step: 1}),
  ml:  Inputs.range([0, 100], {label: "marginLeft", step: 1}),
})
)}

function _8(Plot,plot1,data){return(
Plot.plot({

  width:400,
  /*---- 2. start ----*/
  marginTop: plot1.mt,
  marginRight: plot1.mr,
  marginBottom: plot1.mb,
  marginLeft: plot1.ml,
  /*---- 2. end ----*/
  
  y: {grid: true, label: "count"},
  marks: [
    Plot.rectY(data, Plot.binX({y:"count"}, { x:"year", interval:1, fill:"gender", tip: true })),
    Plot.gridY({ interval: 1, stroke: "white", strokeOpacity: 0.5 }),
    ]
})
)}

function _9(md){return(
md`## <br/>_Medium baseline (3pt)_`
)}

function _10(md){return(
md`### 1. 以 bar chart 呈現每個年份出生的人數 (2pt)`
)}

function _yCounts(){return(
[]
)}

function _years(data){return(
data.map(item => item.year)
)}

function _13(yCounts,years,data)
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


function _14(Plot,yCounts){return(
Plot.plot({
  
  grid: true,
  y: {label: "count"},
  marks: [
    Plot.ruleY([0]),
    Plot.barY(yCounts, {x: "year", y: "count"}),
  ]
})
)}

function _15(md){return(
md`### 2. 可調整margin, fill color,  tip (1pt)`
)}

function _plot2(Inputs){return(
Inputs.form({
  mt:  Inputs.range([0, 100], {label: "marginTop", step: 1}),
  mr:  Inputs.range([0, 100], {label: "marginRight", step: 1}),
  mb:  Inputs.range([0, 100], {label: "marginBottom", step: 1}),
  ml:  Inputs.range([0, 100], {label: "marginLeft", step: 1}),
})
)}

function _17(Plot,plot2,yCounts){return(
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

function _18(md){return(
md`## <br/>_Strong baseline (4pt)_`
)}

function _19(md){return(
md`### 1. 以 bar chart 呈現每個星座的人數  (2pt)`
)}

function _sCounts(){return(
[]
)}

function _21(sCounts,data)
{
  sCounts.length = 0;
  for (var s=0; s<=11; s++) {
    sCounts.push({sign:s, gender:"male", count:0});
    sCounts.push({sign:s, gender:"female", count:0});   
  }
  data.forEach (x=> {
    var i = (x.sign)*2 + (x.gender=="male" ? 0 : 1); 
    sCounts[i].count++;
  })
  return sCounts
}


function _signlist(){return(
[
  "牡羊座",
  "金牛座",
  "雙子座",
  "巨蟹座",
  "獅子座",
  "處女座",
  "天秤座",
  "天蠍座",
  "射手座",
  "摩羯座",
  "水瓶座",
  "雙魚座 "
]
)}

function _23(Plot,sCounts,signlist){return(
Plot.plot({
  grid: true,
  y: {
    grid: true,
    label: "count"
  },
  marks: [
    Plot.ruleY([0]),
    Plot.barY(sCounts, {
      x: "sign",
      y: "count", 
      fill:"gender",
      tip:true,
      title: (d) =>
        `count: ${d.count} \nsign: ${signlist[d.sign]}\ngender: ${d.gender}`
    }),
    Plot.axisX({
      tickFormat: d => {
        return signlist[d]; 
      },
    }),
    
  ]
})
)}

function _24(md){return(
md`### 2. 以 histogram 呈現每個星座的人數  (2pt)`
)}

function _25(Plot,data,signlist){return(
Plot.plot({
  width:800,
  grid: true,
  x: { domain: [0, 12]},
  y: {label: "count"},

  marks: [
    // 創建了一個直方圖，並將數據中的 value 屬性映射到 x 軸
    Plot.rectY(data, Plot.binX(
      { y: "count" }, 
      { x: "sign", interval: 1 , 
       tip:true,
       fill:"gender",
       title: (d) =>
            `sign: ${signlist[d.sign]}
            \ngender: ${d.gender}`},)),
    Plot.axisX({
      tickFormat: d => {
        return signlist[d]; 
      },
    }),
    Plot.ruleY([0]),
    
  ]
})
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  const child1 = runtime.module(define1);
  main.import("data", child1);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer()).define(["Plot","data"], _5);
  main.variable(observer()).define(["md"], _6);
  main.variable(observer("viewof plot1")).define("viewof plot1", ["Inputs"], _plot1);
  main.variable(observer("plot1")).define("plot1", ["Generators", "viewof plot1"], (G, _) => G.input(_));
  main.variable(observer()).define(["Plot","plot1","data"], _8);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer()).define(["md"], _10);
  main.variable(observer("yCounts")).define("yCounts", _yCounts);
  main.variable(observer("years")).define("years", ["data"], _years);
  main.variable(observer()).define(["yCounts","years","data"], _13);
  main.variable(observer()).define(["Plot","yCounts"], _14);
  main.variable(observer()).define(["md"], _15);
  main.variable(observer("viewof plot2")).define("viewof plot2", ["Inputs"], _plot2);
  main.variable(observer("plot2")).define("plot2", ["Generators", "viewof plot2"], (G, _) => G.input(_));
  main.variable(observer()).define(["Plot","plot2","yCounts"], _17);
  main.variable(observer()).define(["md"], _18);
  main.variable(observer()).define(["md"], _19);
  main.variable(observer("sCounts")).define("sCounts", _sCounts);
  main.variable(observer()).define(["sCounts","data"], _21);
  main.variable(observer("signlist")).define("signlist", _signlist);
  main.variable(observer()).define(["Plot","sCounts","signlist"], _23);
  main.variable(observer()).define(["md"], _24);
  main.variable(observer()).define(["Plot","data","signlist"], _25);
  return main;
}
