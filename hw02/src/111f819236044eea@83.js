function _1(md){return(
md`# HW2
`
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

function _12(yCounts,data)
{
  yCounts.length = 0;
  for (var y=1997; y<=2003; y++) {
    yCounts.push({year:y, gender:"male", count:0});
    yCounts.push({year:y, gender:"female", count:0});   
  }
  data.forEach (x=> {
    var i = (x.year-1997)*2 + (x.gender=="male" ? 0 : 1); 
    yCounts[i].count++;
  })
  return yCounts
}


function _13(Plot,yCounts){return(
Plot.plot({
  
  grid: true,
  y: {label: "count"},
  marks: [
    Plot.ruleY([0]),
    Plot.barY(yCounts, {x: "year", y: "count"}),
  ]
})
)}

function _14(md){return(
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

function _16(Plot,plot2,yCounts){return(
Plot.plot({
  
  /*---- 2. start ----*/
  marginTop: plot2.mt,
  marginRight: plot2.mr,
  marginBottom: plot2.mb,
  marginLeft: plot2.ml,
  /*---- 2. end ----*/
  
  grid: true,
  y: {label: "count"},
  marks: [
    Plot.ruleY([0]),
    Plot.barY(yCounts, {x: "year", y: "count", tip: true , fill:"gender"}),
  ]
})
)}

function _17(md){return(
md`## <br/>_Strong baseline (4pt)_`
)}

function _18(md){return(
md`### 1. 以 bar chart 呈現每個星座的人數  (2pt)`
)}

function _sCounts(){return(
[]
)}

function _20(sCounts,data)
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

function _22(Plot,sCounts,signlist){return(
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

function _23(md){return(
md`### 2. 以 histogram 呈現每個星座的人數  (2pt)`
)}

function _24(Plot,data,signlist){return(
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
  main.variable(observer("data")).define("data", _data);
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
  main.variable(observer()).define(["yCounts","data"], _12);
  main.variable(observer()).define(["Plot","yCounts"], _13);
  main.variable(observer()).define(["md"], _14);
  main.variable(observer("viewof plot2")).define("viewof plot2", ["Inputs"], _plot2);
  main.variable(observer("plot2")).define("plot2", ["Generators", "viewof plot2"], (G, _) => G.input(_));
  main.variable(observer()).define(["Plot","plot2","yCounts"], _16);
  main.variable(observer()).define(["md"], _17);
  main.variable(observer()).define(["md"], _18);
  main.variable(observer("sCounts")).define("sCounts", _sCounts);
  main.variable(observer()).define(["sCounts","data"], _20);
  main.variable(observer("signlist")).define("signlist", _signlist);
  main.variable(observer()).define(["Plot","sCounts","signlist"], _22);
  main.variable(observer()).define(["md"], _23);
  main.variable(observer()).define(["Plot","data","signlist"], _24);
  return main;
}
